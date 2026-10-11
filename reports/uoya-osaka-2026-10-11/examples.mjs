// 取得済みの実投稿だけを使う。以下の勝因・転用はキャプションに基づく仮説／新規提案。
export const exampleSelections = [
 ['DcDyeSPppBx','day',3,'一皿を食べ進める楽しさ','だし巻き重から出汁茶漬けへの味変が、食事を具体的に想像する理由になった可能性。','主菜の寄り→通常の一食→実食の食感→内容と税込価格を20秒で。','うお家の味変サービス・だし巻き重は未確認。百花の価格も取得不可。料理の工程を見せる間接参考。'],
 ['DdWGs4YhPTn','day',5,'近い地域×一食の内容','大阪湾岸の定食と880円の価格が、近隣の昼ごはん候補として判断しやすくした可能性。','住之江公園の地名→当日のランチ全景→主菜→税込価格→昼の営業日。','副菜食べ放題は元店舗の条件。うお家のサービスとしてコピーしない。価格は投稿当時の表示。'],
 ['DdvVeKbMsFv','day',4,'セットを具体化する','肉吸い・卵かけめし・だし巻きという内容の具体性が、一食の満足感を想像する手掛かりになった可能性。','主菜・ご飯・汁物・副菜を一画面に並べ、何が付くかと実際の価格をセットで表示。','元投稿は1,350円で、うお家の掲載昼予算と異なる。料理と価格一致ではなく情報整理を借りる。'],
 ['DcvhDusPa-W','day',4,'御膳の彩り×昼の使い方','ホテルの和食ランチという文脈と御膳の内容が、安さ以外の昼の食事価値を伝えた可能性。','一食の真上→小鉢・主菜の寄り→通常盛りと席→内容・税込価格。','8.6万再生の参考投稿。ホテル・朝食の話題・御膳1,870円はうお家の条件ではない。'],
 ['DcDfeEIN2gj','night',5,'名物×和食酒場の用途','とろたくという名物と料理人の背景が、夜の和食酒場を選ぶ具体的な理由になった可能性。','当日提供する魚料理の主役1品→寿司・天ぷら→飲料→人数と税込総額。','元投稿の職歴・名物は他店固有。4,000〜6,000円は投稿記載で、うお家と完全な価格一致ではない。'],
 ['DdOAJLxz0-I','night',4,'刺身盛りの内容×利用条件','大きな刺身盛りの内容と予約・申告条件が、驚きと来店前の確認動機を作った可能性。','通常の刺身盛りを全景と寄りで撮り、何人分か・単品価格・注文総額まで回収。','特別な盛り・予約申告条件を転用しない。刺身1人前2,000〜2,500円は料理価格で、客単価ではない。'],
 ['DcX9lD9teNo','night',4,'握りの具体性×店の物語','移転・復活の話題と握りの紹介が、店への関心と食べたい料理の想像をつないだ可能性。','許可を得た実際の握り・提供の手元→一貫の寄り→注文の全景→総額と駅徒歩。','うお家の移転・復活ストーリーは未確認。対面で握る席の体験も撮影前に確認。価格帯は異なる。'],
 ['DdqZXI_TOl4','night',4,'海鮮＋天ぷらの組み合わせ','箱盛り・とろたく・天ぷらの異なる料理が、夜の注文を組み立てやすくした可能性。','魚料理の冷たい一皿→温かい天ぷら→飲料→2人分の実会計で夜の使い方を提示。','紙袋・箱盛りは他店の提供方法。元投稿の夜2,000〜3,000円はうお家の掲載夜予算より低い。'],
 ['DeJULiPTLGj','night',5,'寿司・刺身・天ぷらを一度に','大きな寿司ネタと複数の魚料理が、何を注文したいか具体化した可能性。','当日の通常盛りの寿司→刺身→天ぷらを短くつなぎ、飲料込みの注文総額を明示。','大きなネタ・盛り量をうお家の特徴として約束しない。寿司2,500円・刺身1,980円は単品表示。PR投稿。'],
 ['Db-ky1BBi2v','night',5,'握りの内容×アクセス','魚屋の職人握りと盛合せ・駅直結の情報が、料理の選択と移動の不安を減らした可能性。','盛合せを一皿で見せる→通常の内容と価格→駅から最終曲がり角→確認済み来店導線。','魚屋の職歴や駅直結は他店の条件。うお家は食べログの徒歩3分表記を使う。いいね・コメントは取得不可。']
].map(([code,meal,score,pattern,hypothesis,transfer,caution])=>({code,meal,score,pattern,hypothesis,transfer,caution}));

const esc=s=>String(s??'取得不可').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const count=n=>n==null?'取得不可':n.toLocaleString('ja-JP');
const link=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
export function renderExamples(reports){
 const all=reports.flatMap(r=>r.posts.map(p=>({...p,profile:r.profile})));
 const selected=exampleSelections.map(s=>{const p=all.find(p=>p.shortcode===s.code);if(!p)throw Error('Missing example '+s.code);return {...p,...s};});
 const buzz=selected.filter(p=>p.views>=100000).length;
 const intro=`<section id="examples-summary" class="section"><div class="section-head"><div class="eyebrow">10 ACTUAL REEL REFERENCES</div><h2>近似事例10件｜昼4件・夜6件</h2></div><p class="note">10万再生以上 ${buzz}件／10万未満の参考投稿 ${10-buzz}件。取得済みの実投稿から料理・利用場面の接点で選定。各時間帯の中では再生数降順。価格一致のランキングではありません。<br>公開数値・キャプションの確認時点：2026-10-11。全動画の冒頭・音声・カット順は未確認。勝因は仮説、撮影構成はうお家への新規提案です。</p><nav class="overview-nav" aria-label="近似事例の項目"><a href="#lunch-cases">昼の4件へ</a><span>／</span><a href="#cases">夜の6件へ</a></nav></section>`;
 const section=meal=>{const day=meal==='day',rows=selected.filter(p=>p.meal===meal).sort((a,b)=>b.views-a.views);return `<section id="${day?'lunch-cases':'cases'}" class="section"><div class="section-head"><div class="eyebrow">${day?'DAY':'NIGHT'} PR / REFERENCES</div><h2>${day?'昼の4件｜一食の内容・価格・和食の見せ方':'夜の6件｜寿司・海鮮・酒場の利用場面'}</h2></div><div class="grid">${rows.map((p,i)=>`<article class="card example-card" data-shortcode="${esc(p.shortcode)}" data-meal="${meal}"><span class="rank">${String(i+1).padStart(2,'0')} · ${esc(p.views_display)} 再生</span><small style="display:block;margin-bottom:12px">${p.views>=100000?'10万再生以上':'参考投稿／10万再生未満'}${p.pr?' · PR表示あり':''}</small><h3>${esc(p.store)}</h3><p>${esc(p.profile.name)}<br>${link(p.url,'元投稿')}</p><p>${esc(p.pattern)}</p><small>投稿記載価格：${esc(p.posted_price)}<br>いいね ${count(p.likes)} · コメント ${count(p.comments)}</small><div class="rating" aria-label="転用可能性5点中${p.score}点">${'★'.repeat(p.score)+'☆'.repeat(5-p.score)} <small>${p.score}/5</small></div><details class="fit-evidence"><summary>勝因仮説・うお家への転用</summary><p><span class="label">確認したキャプションの訴求要約</span><br>${esc(p.caption_summary)}</p><p><span class="label">伸びた理由の仮説</span><br>${esc(p.hypothesis)} 題材・露出・投稿経過日数など別の説明もあり、因果は未確定。</p><p><span class="label">うお家で撮る構成（提案）</span><br>${esc(p.transfer)}</p><p><span class="label">そのまま使わない条件</span><br>${esc(p.caution)}</p><p>星は具体構成の転用可能性の定性評価。映像の観察記録や送客成果ではありません。価格は当時の投稿記載で現行客単価の独立照合ではなく、うお家のメニュー・価格・営業は撮影前に確認。</p></details><a class="button" href="/accounts/${esc(p.profile.username)}/">アカウントの詳細分析を見る</a></article>`).join('')}</div></section>`;};
 return intro+section('day')+section('night');
}
