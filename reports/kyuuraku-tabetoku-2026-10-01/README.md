# 焼肉 久楽 × たべとく Instagram Reels Report

公開リール直近2か月（2026-08-01〜2026-10-01）51本を確認し、再生数TOP10の分析と焼肉 久楽向けPR企画へ落とし込んだ静的HTMLレポートです。

## 構成

- `public/index.html` — レポート本体
- `public/assets/` — TOP10投稿の公開OGサムネイル
- `data/report.json` — 調査条件・集計値・TOP10数値の機械可読データ
- `wrangler.jsonc` — 既存サイトと分離したCloudflare Workers設定

## 公開

```sh
cd reports/kyuuraku-tabetoku-2026-10-01
npx wrangler deploy
```
