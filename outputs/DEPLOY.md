# デプロイメモ

`index.html` だけで動く静的ダッシュボードです。外部JavaScript、フォント、画像アセットはありません。

## Cloudflare Pages

1. この `outputs` ディレクトリをGitHubリポジトリへ追加します。
2. Cloudflare Pagesでリポジトリを接続します。
3. Build commandは空欄、Build output directoryは `outputs` を指定します。
4. デプロイ後、条件切替ボタン、Instagramリンク、スマートフォン幅を確認します。

Direct Uploadを使う場合は、Cloudflare DashboardのWorkers & Pagesから `outputs` ディレクトリをアップロードできます。

## ローカル確認

ブラウザで `index.html` を開くだけで閲覧できます。
