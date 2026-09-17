# デプロイメモ

`index.html` だけで動く静的ダッシュボードです。外部JavaScript、フォント、画像アセットはありません。

## Cloudflare Pages（Workers統合版）

公開URL：<https://washoku-toku-instagram-report.xishanshu16.workers.dev>

`wrangler.jsonc` の `assets.directory` で `outputs` を指定しています。更新時はリポジトリのルートで次を実行します。

```sh
npx wrangler deploy
```

## ローカル確認

ブラウザで `index.html` を開くだけで閲覧できます。
