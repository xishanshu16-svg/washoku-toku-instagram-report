# 公開確認記録

- 確認日：2026-10-11
- 表示名：萬 燕楽・八坂通り 燕楽 様×PR調査
- 本番：https://enraku-kyoto-two-stores-pr-report.xishanshu16.workers.dev/
- Git remote：https://github.com/xishanshu16-svg/washoku-toku-instagram-report.git
- Branch：main
- 公開HTMLを含むソースcommit：d12dd00fa07768eae5132d9aa096578c58101b15
- Cloudflare Worker：enraku-kyoto-two-stores-pr-report
- Cloudflare Version：6c75a7b0-6337-4bff-b112-450c8a939e9e
- HTTP：200
- 公開HTMLとローカルHTMLはバイト単位で一致。
- HTML SHA-256：ea4592dc50d8b51b7d4d3a6aaf8d61c6f05448235877b31e288300cd8afa788c

## 品質確認

- ビルド成功。テスト成功（件数・投稿ID・参照先・欠損・順位・内部アンカー）。
- 7タブを本番でクリックし、適切な1パネルのみが表示されることを確認。
- 両店の夜ランキングは各10名（9名評価、ことは直接根拠不足で保留）。
- 昼は両店とも10名保留。現行昼営業を未確認と表示。
- 近似事例は各10件。両店の重複6件を明記。14ユニーク投稿のうち8件が10万再生以上。
- 各店3企画、合計6本。各撮影指示書の7区間を確認。
- ローカル1280px・390pxで表示確認。本番も通常幅と390pxで横はみ出しなし。
- 概要内リンク、撮影指示書の開閉、元投稿リンクの行先、背景の停止／再開、キーボードEnd、戻る操作を確認。
- OS reduced-motion と画面非表示時の停止は状態遷移テストも成功。
- 本番確認画像：qa/desktop.jpg（本番ページのみ。Instagramのログイン画面等は保存していない）。

既存の別店舗フォルダ・Workerを変更していない。
公開数値は2026-10-11の確認値。全投稿・動画全編の確認とは扱わない。
この記録・確認画像の追加はドキュメントのみで、本番HTMLは上記ソースcommitと同じ。
