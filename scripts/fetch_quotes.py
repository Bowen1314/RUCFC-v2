"""Fetch quotes for the homepage ticker and write quotes.json.

Run by the GitHub Action before each Pages deploy. Stdlib only.
Primary source: Tencent's public quote feed (US, HK and A-shares in one call).
Fallback: Yahoo's batch spark endpoint. If a symbol still fails, the last
published value is reused so the banner never loses an item.
"""
import json
import sys
import time
import urllib.request

# display symbol, Tencent code, Yahoo symbol, English name, Chinese name, currency
SYMBOLS = [
    ("NVDA", "usNVDA", "NVDA", "NVIDIA", "英伟达", "USD"),
    ("AAPL", "usAAPL", "AAPL", "Apple", "苹果", "USD"),
    ("MSFT", "usMSFT", "MSFT", "Microsoft", "微软", "USD"),
    ("GOOGL", "usGOOGL", "GOOGL", "Alphabet", "谷歌", "USD"),
    ("AMZN", "usAMZN", "AMZN", "Amazon", "亚马逊", "USD"),
    ("META", "usMETA", "META", "Meta", "Meta", "USD"),
    ("TSLA", "usTSLA", "TSLA", "Tesla", "特斯拉", "USD"),
    ("JPM", "usJPM", "JPM", "JPMorgan", "摩根大通", "USD"),
    ("GS", "usGS", "GS", "Goldman Sachs", "高盛", "USD"),
    ("0700.HK", "hk00700", "0700.HK", "Tencent", "腾讯控股", "HKD"),
    ("BABA", "usBABA", "BABA", "Alibaba", "阿里巴巴", "USD"),
    ("600519.SS", "sh600519", "600519.SS", "Kweichow Moutai", "贵州茅台", "CNY"),
    ("1211.HK", "hk01211", "1211.HK", "BYD", "比亚迪", "HKD"),
    ("1810.HK", "hk01810", "1810.HK", "Xiaomi", "小米集团", "HKD"),
    ("PDD", "usPDD", "PDD", "PDD Holdings", "拼多多", "USD"),
    ("BIDU", "usBIDU", "BIDU", "Baidu", "百度", "USD"),
]

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36"}


def get(url, timeout=20):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
        return r.read()


def fetch_tencent():
    """{display symbol: {price, prev}} from one request to qt.gtimg.cn."""
    out = {}
    code_to_sym = {t: s for s, t, *_ in SYMBOLS}
    try:
        raw = get("https://qt.gtimg.cn/q=" + ",".join(code_to_sym)).decode("gbk", "replace")
    except Exception as e:  # noqa: BLE001
        print(f"warn: tencent: {e}", file=sys.stderr)
        return out
    for line in raw.split(";"):
        line = line.strip()
        if "=" not in line:
            continue
        key, val = line.split("=", 1)
        code = key.strip()[2:]  # drop leading "v_"
        f = val.strip('"').split("~")
        try:
            price, prev = float(f[3]), float(f[4])
            if price > 0 and prev > 0 and code in code_to_sym:
                out[code_to_sym[code]] = {"price": round(price, 2), "prev": round(prev, 2)}
        except (IndexError, ValueError):
            pass
    return out


def fetch_yahoo(symbols):
    """Batch fallback for whatever Tencent missed."""
    out = {}
    if not symbols:
        return out
    y_to_sym = {y: s for s, _, y, *_ in SYMBOLS if s in symbols}
    for host in ("query1", "query2"):
        try:
            d = json.loads(get(f"https://{host}.finance.yahoo.com/v7/finance/spark?symbols={','.join(y_to_sym)}&range=1d&interval=1d"))
            for r in d["spark"]["result"]:
                try:
                    m = r["response"][0]["meta"]
                    prev = m.get("chartPreviousClose") or m.get("previousClose")
                    out[y_to_sym[r["symbol"]]] = {"price": round(float(m["regularMarketPrice"]), 2), "prev": round(float(prev), 2)}
                except Exception:  # noqa: BLE001
                    pass
            return out
        except Exception as e:  # noqa: BLE001
            print(f"warn: yahoo via {host}: {e}", file=sys.stderr)
            time.sleep(3)
    return out


def load_previous(url):
    if not url:
        return {}
    try:
        return {q["s"]: q for q in json.loads(get(url, 15)).get("quotes", [])}
    except Exception:  # noqa: BLE001
        return {}


def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else "quotes.json"
    prev_url = sys.argv[2] if len(sys.argv) > 2 else ""

    got = fetch_tencent()
    missing = [s for s, *_ in SYMBOLS if s not in got]
    got.update(fetch_yahoo(missing))
    previous = load_previous(prev_url)

    quotes, fresh = [], 0
    for sym, _, _, en, zh, cur in SYMBOLS:
        q = got.get(sym)
        if q:
            fresh += 1
        elif sym in previous:
            q = {"price": previous[sym]["price"], "prev": previous[sym]["prev"]}
        else:
            continue
        quotes.append({"s": sym, "en": en, "zh": zh, "cur": cur, **q})

    with open(out_path, "w") as fh:
        json.dump({"updated": int(time.time()), "fresh": fresh, "quotes": quotes}, fh, ensure_ascii=False, separators=(",", ":"))
    print(f"wrote {len(quotes)} quotes ({fresh} fresh) -> {out_path}")
    if not quotes:
        sys.exit(1)


if __name__ == "__main__":
    main()
