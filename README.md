# 和食 徳 Instagram集客レポート

京都グルメ系Instagramリールを調査し、「和食 徳」向けの集客企画・撮影指示へ落とし込んだ静的HTMLダッシュボードです。

## 公開ファイル

- `outputs/index.html` — ダッシュボード本体
- `outputs/DEPLOY.md` — デプロイメモ

外部JavaScript、Webフォント、画像アセットを使わない単一HTML構成です。

## Cloudflare公開

Cloudflare PagesのWorkers統合版で公開しています。

- 公開URL: https://washoku-toku-instagram-report.xishanshu16.workers.dev
- Static assets directory: `outputs`
- Production branch: `main`
- 更新コマンド: `npx wrangler deploy`
