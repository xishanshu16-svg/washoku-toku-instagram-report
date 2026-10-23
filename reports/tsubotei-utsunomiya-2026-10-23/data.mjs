import {selectedReels,priceExcludedReels,verifiedCandidates} from './five-account-reels.mjs';
export const extraCreators=[];
export {priceExcludedReels,verifiedCandidates};
export const meta={title:'浜やき屋 壺亭 様×PR調査',checkedAt:'2026-10-23',generatedAt:'2026-10-23',period:null,priceFilter:{min:4000,max:5000,currency:'JPY'},
 scope:'指定5名の公開プロフィール・リール一覧・実投稿を再調査。指定外アカウントと写真は採用しない。再生数を確認した価格候補は5投稿・4店舗だが、通常予算に媒体差のある4投稿は本枠から除外。採用1件／希望約10件に対し9件不足。全投稿・全期間を網羅したとは言えません。',
 method:'Instagramの既存ログイン状態で、指定URLと公開投稿へ直接アクセス。おすすめフィード・個人の閲覧履歴は選定に使用せず、プロフィール／一覧の表示サンプルから料理と夜用途を照合。店舗は食べログ・公式Instagram・ホットペッパーを照合。',
 limits:'再生・フォロワーは公開の丸め表示。保存・共有・視聴維持率・視聴者地域・実送客・PR費は取得不可。反応の大小は来店や好意の証明ではありません。冒頭映像・カット順・音声は未確認で、勝因は本文からの仮説です。',
 timeNote:'今回の想定客単価は4,000〜5,000円。期間指定なし。単品・宴会コース料金だけで通常の客単価一致としません。掲載予算・実会計・投稿時の価格を区別し、媒体間の差は明示します。'};
const base='https://tabelog.com/tochigi/A0901/A090101/9013986/';
export const sources={tabelog:base,menu:base+'dtlmenu/',course:'https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A090101&LstPrf=A0901&pal=tochigi&pplan_id=289591624&rcd=9013986',conflictCourse:'https://tabelog.com/rst/rstdtl_party_dtl?LstAre=A090101&LstPrf=A0901&pal=tochigi&pplan_id=297333971&rcd=9013986',hotpepper:'https://www.hotpepper.jp/strJ003763630/',instagram:'https://www.instagram.com/hamayakiya_tubotei/',lemon:'https://www.instagram.com/hamayakiya_tubotei/p/Ddn3wIxxXZe/'};
export const store={name:'浜やき屋 壺亭',genre:'居酒屋・海鮮',address:'栃木県宇都宮市東宿郷2-17-10（東口屋台村内）',phone:'080-4209-2158',budget:{day:null,night:'4,000〜4,999円（食べログ掲載予算）'},dayStatus:'対象外｜昼営業を確認できず',
 facts:[['主役','浜焼き・刺身。貝や魚の焼き上がりと、取り分ける時間をPRの核にできる。単品の現行販売価格は確認できず。',sources.menu],['入口の料金','浜焼きを含む8品・2時間飲み放題付き5,000円税込、4〜40名という掲載あり。コース内容変更や追加料金は予約時に確認。',sources.course],['場所と席','宇都宮駅東口から徒歩5分の掲載。38席（掘りごたつ30・テーブル8）、個室なし。貸切条件・実利用上限は店舗確認。',sources.tabelog],['飲料','公式に瀬戸内グリーン生レモンサワーの発信あり。日本酒等も掲載。旬の入荷・限定品は投稿時点と現在を区別する。',sources.lemon],['営業','公式プロフィール・ホットペッパーは17:00〜23:00、木曜定休。食べログは24:00までのため、終了時刻・例外日は要確認。',sources.instagram],['利用上の条件','ホットペッパーに20歳未満入店不可の案内。食べログは全席喫煙可。子連れ向けPRは提案しない。',sources.hotpepper]],
 conflicts:[
 '閉店時刻：公式Instagram・ホットペッパー23時／食べログ24時。コース利用可能時間には25時の記載もあり、深夜営業を約束しない。',
 '別のマグロカマ付きプランは、見出し6,500円と料金欄6,000円、説明文5,000円が混在。確認前の広告・台本には採用しない。',
 '席数38席と最大予約40名の掲載差がある。貸切の下限・当日の席配置・上限は店へ確認。',
 '単品のお通しは550円税込の掲載。5,000円コースへの別途適用有無は未確認で、総額保証にしない。',
 'メニュー更新表示は2026/03/18。食材・盛り合わせ・季節品・単品価格は仕入れで変わるため撮影当日に確定。',
 '「本ハマグリの仕入れ値500円」という記載を販売価格と混同しない。大漁焼盛の期間限定内容や入荷魚を常設保証しない。'],
 target:'成人の友人グループ、仕事帰りの食事、駅東口で集まりたい宴会幹事（提案上の仮説）。実客層・居住地・送客成果は未確認。',
 positioning:'まずは浜焼きの動作、次に人数・料金・場所。高級感や激安より「一緒に焼く夜」と幹事の判断材料を伝える。',
 differentiation:'宇都宮駅東口の屋台村で浜焼きと海鮮を囲める組合せが訴求軸。唯一・地域一番とは断定せず、実物と利用条件で説明する。',
 officialStatus:'食べログの公式リンクと、同じホットペッパー店舗へつながるプロフィールを照合。表記は「浜焼き屋 壼亭」だが、レポート名は食べログの「浜やき屋 壺亭」で統一。味・接客品質は未体験。'};

// 数値は確認時の公開表示。nullは未取得、0は「コメントはまだありません」の明示を確認した値。
const raw=[
 {code:'DeqyJI0TSbn',handle:'tochigi_gourmet1',restaurant:'魚屋 食処 源天',meal:'夜用途（昼夜併記）',views:123000,viewsDisplay:'12.3万',likes:925,comments:9,publishedLabel:'3日前',menuPrice:'刺盛3人前3,179円／さんま1,309円／串6本1,419円等（投稿記載）',pr:'タイアップ表示／店舗との共同投稿',tags:['海鮮','焼き物','人数と価格'],transferScore:5,
 observed:'刺身・焼き魚・串焼きを価格付きで整理し、夜限定の串を区別。',hypothesis:'海鮮の種類と分量・価格が、同行者との比較検討を助ける可能性。',alternative:'店舗共同投稿、投稿後3日という条件も影響し得る。コメントの一部に魚種の指摘があり、反応の多さを好意と見なさない。',transfer:'壺亭の通常の浜焼き盛りと刺身を、実人数・単品料金・提供条件付きで見せる。',avoid:'備長炭・地元産食材・元店の価格や魚種を壺亭に移さない。撮影料理名と字幕を照合する。'},
 {code:'DebYpooTZV1',handle:'tochigi_gourmet1',restaurant:'炭火焼鳥 鶏乃蔵',meal:'夜用途（昼夜併記）',views:350000,viewsDisplay:'35万',likes:4333,comments:14,publishedLabel:'10月13日',menuPrice:'コース5,500円／6,600円／8,250円、串350〜450円等（投稿記載）',pr:'タイアップ表示',tags:['調理の価値','コース','昼夜の条件'],transferScore:4,
 observed:'部位・炭火の説明と、単品・コース・ランチを分けた価格案内。',hypothesis:'料理の選ぶ理由を、料金と利用目的に結び付けている点が検討を促した可能性。',alternative:'ブランド鶏・新店・PR露出や経過日数も異なる。35万再生を海鮮宴会の送客予測へ換算できない。',transfer:'浜焼きを焼いて取り分ける動作と、8品コースの内容を分けて説明する。',avoid:'銘柄鶏・希少性・上質な空間・昼営業は対象店の事実ではない。'},
 {code:'DeTnPprzTp6',handle:'tochigi_gourmet1',restaurant:'GABUKICHI 宇都宮西口店',meal:'夜',views:282000,viewsDisplay:'28.2万',likes:3926,comments:3,publishedLabel:'10月10日',menuPrice:'ピザ550円税込／ピンチョス418円／サングリア企画660円等（投稿記載）',pr:'タイアップ表示',tags:['仕事帰り','注文の目安','体験'],transferScore:3,
 observed:'料理の単価と遊びのある飲料企画を、友人・仕事帰りの夜へ結び付ける。',hypothesis:'注文を想像できる単価と使う場面が、飲み会候補として共有される理由になり得る。',alternative:'新規開店・低い単品価格・PR条件の影響があり、壺亭と同価格・同業態ではない。',transfer:'浜焼きと一杯の組合せを実際の料金で案内し、同行者に送りやすい情報へ。',avoid:'ピザ価格・ジャンケン特典・新店という設定は使わない。'},
 {code:'Dd_NJLWvhOP',handle:'tochigi__gurume',restaurant:'炉端と炭火 火としお',meal:'夜',views:86000,viewsDisplay:'8.6万',likes:901,comments:20,publishedLabel:'10月2日',menuPrice:'甘鯛4,378円／吉次7,678円／大山鶏385円等、税込（投稿記載）',pr:'タイアップ表示／#PR',tags:['魚の焼き上がり','友人','体験'],transferScore:5,
 observed:'魚が焼ける時間や食感を、友人との会話・仕事終わりの夜へつなぐ本文。',hypothesis:'完成品だけでなく待つ時間の楽しさが、浜焼きの体験PRに近い。',alternative:'10万未満の参考例。店の空間・高価格の魚・利用層は同じではなく、実送客は未確認。',transfer:'貝が開く瞬間と取り分ける手元を通常調理で撮り、誰と囲む夜かを示す。',avoid:'炉端カウンター・魚種・元店の価格・予約状況は転載しない。'},
 {code:'DcfvBu5RUgh',handle:'tochigi_discover',restaurant:'包包包（つつみさん）',meal:'夜',views:50000,viewsDisplay:'5万',likes:417,comments:6,publishedLabel:'8週間前',menuPrice:null,pr:'#PR／依頼制作を本文に明記',tags:['幹事','貸切条件','来店導線'],transferScore:5,
 observed:'宴会幹事の悩みを入口に、駅・貸切・少人数利用・要問合せ項目まで整理。',hypothesis:'予約前に必要な情報がまとまり、幹事が候補を保存する動機になり得る。',alternative:'再生5万の構造参考。保存数や予約成約は非公開で、有効性を数値で証明した事例ではない。',transfer:'壺亭の5,000円コース、4名からの掲載条件、席と予約確認事項を一枚にまとめる。',avoid:'西口徒歩3分・貸切人数・小籠包を対象店の事実にしない。'},
 {code:'DbKwi9Gx5xP',handle:'tochigi_discover',restaurant:'大衆酒場キミドリ',meal:'夜',views:141000,viewsDisplay:'14.1万',likes:1623,comments:22,publishedLabel:'12週間前',menuPrice:null,pr:'確認できず（本文末尾に欠けあり）',tags:['仕事帰り','店主の想い','料理と酒'],transferScore:4,
 observed:'手作り料理の理由と店主への取材を、仕事帰りの一杯に結び付け、保存を促す。',hypothesis:'使う場面と料理の背景を一緒に伝え、日常の夜の候補になりやすい可能性。',alternative:'同じ宇都宮でも西口側。取材内容・料理・PR条件の違いがあり、投稿間の数字差をコピー効果と断定できない。',transfer:'壺亭の店主に浜焼きの食べ方と仕入れを取材し、承認された言葉で料理と夜の用途を説明。',avoid:'他店の職人の発言・餃子・日本酒20種・静けさは流用しない。'},
 {code:'Dbz9GjhRNDH',handle:'tochigi_discover',restaurant:'鉄板居酒屋 源天',meal:'夜',views:73000,viewsDisplay:'7.3万',likes:677,comments:15,publishedLabel:'8月9日',menuPrice:null,pr:'共同投稿／本文に依頼制作を示す記載（末尾欠けあり）',tags:['調理ライブ','会話','友人'],transferScore:4,
 observed:'鉄板料理のライブ感と店主の考えを、友人・仕事仲間で過ごす夜へ結び付ける。',hypothesis:'調理中の期待や人の温度が、料理一覧だけより記憶に残る可能性。',alternative:'再生10万未満。地域が小山、料理が鉄板、共同投稿という差がある。',transfer:'浜焼きの通常の焼き上がりと会話の手元を、許可を得て撮影する。',avoid:'鉄板カウンター・チンチロ・子ども利用は壺亭に使わない。'},
 {code:'Dbuz-PKxKtn',handle:'tochigi_discover',restaurant:'とり料理 壱の宮',meal:'夜',views:175000,viewsDisplay:'17.5万',likes:1830,comments:5,publishedLabel:'10週間前',menuPrice:'おまかせ6,000円／8,000円／12,000円、21時〜串セット3,800円・税込（投稿記載）',pr:'#PR',tags:['誰と過ごすか','コース','時間条件'],transferScore:3,
 observed:'料理の品数より大切な人と過ごす体験を訴求し、コース価格と開始時間を併記。',hypothesis:'料金だけでなく一夜の目的を示すことで、誘う理由を作れる可能性。',alternative:'新店・コース専門店・記念日用途は壺亭と違う。再生数に店名や新規性が寄与した可能性もある。',transfer:'壺亭では記念日の高級感ではなく、仲間と囲む海鮮と飲み放題の時間へ置換。',avoid:'元店のキャラクター比喩・開始時刻・串セットを転用しない。'},
 {code:'DdJPsrvzW_3',handle:'tochino_ki_',restaurant:'肉と米と酒',meal:'夜',views:61000,viewsDisplay:'6.1万',likes:494,comments:0,publishedLabel:'9月11日',menuPrice:'90分のライス・ナムル・ドリンクセット1,500円税別・注文必須（肉代別の投稿記載）',pr:'PR表記は確認できず',tags:['東宿郷','食べ方','追加条件'],transferScore:4,
 observed:'宇都宮駅東口・東宿郷の夜店で、肉を食べる動作と必須セットを説明。',hypothesis:'近い地区の店で、独特な食べ方と条件を言語化する形式は応用しやすい。',alternative:'新店と9月限定特典、量の訴求が含まれ、通常の海鮮料金と同一視できない。6.1万は10万未満の参考。',transfer:'浜焼きの食べ方を一つ説明し、通常料金・人数・お通し等の条件を明記。',avoid:'9月のキャベツ特典・肉200g・無限おかわりは対象店に持ち込まない。'},
 {code:'DejMePDMMwk',handle:'usagi.gurume',restaurant:'肉と秘伝のタレ ゆいの杜',meal:'時間帯未特定／料理の参考',views:123000,viewsDisplay:'12.3万',likes:1440,comments:8,publishedLabel:'6日前',menuPrice:'ハンバーグダブル＋ステーキ200g 2,390円／まんが肉2本2,490円（投稿記載）',pr:'PR表記は確認できず',tags:['食感の違い','選ぶ理由','料理比較'],transferScore:3,
 observed:'食感の好みを区別し、食べた内容・分量・料金を具体的に説明。紹介時刻・夜利用は未特定。',hypothesis:'万人向けの褒め言葉だけでなく、食感の違いが料理を選ぶ判断材料になる可能性。',alternative:'肉の見た目や既存ファン、題材の新鮮さの影響もあり、夜の海鮮PR実績とは扱わない。',transfer:'壺亭の焼き貝と刺身を別の食感として説明する方法だけを参考にする。',avoid:'硬いハンバーグ・まんが肉・量・価格を流用しない。夜実績に二重計上しない。'}
];
const publicPost=p=>({...p,url:'https://www.instagram.com/'+p.handle+'/reel/'+p.code+'/',checkedAt:meta.checkedAt,budget:null,actualSpend:null,fullVideoObserved:false,hook:'冒頭0〜3秒の実映像は未確認。本文の訴求を要約した分析です。'});
export const posts=selectedReels;
export const supportPosts=[];
// 価格未確認の調理体験例は、夜PRの相談根拠に限定。本枠へ合算しない。
export const selectionPosts=raw.filter(p=>p.code==='Dd_NJLWvhOP').map(p=>({...publicPost(p),format:'リール',budget:'夜の一人予算は確認できず',budgetSource:'https://tktakayuki0507.wixsite.com/hitoshio',budgetNote:'一皿料金は一人予算ではないため、本枠の価格一致例から除外。'}));
export const axes=['料理・体験','利用場面','価格と条件','地域・来店導線'];
const day={score:null,status:'対象外',reason:'対象店の昼営業を確認できないため、昼向けの依頼順位・料理・星は設定しません。',ask:'昼営業を新設する場合のみ、提供日・料理・価格を確定して別途選定。'};
const baselineAccounts=[
 {handle:'tochigi_gourmet1',name:'栃木グルメ【グルメ&スポット】',followers:'18.4万人',profilePosts:1122,axis:'栃木県の店とスポット、料理ごとの価格説明',evidence:['DeqyJI0TSbn','DebYpooTZV1','DeTnPprzTp6'],day:{...day},night:{score:5,reason:'海鮮・焼き物の直接例と、単品・人数・コース条件を分ける説明が最も近い。',axes:['源天の刺身・焼き魚・串を紹介。壺亭の浜焼きと刺身という主力に直接つながる。','友人や仕事帰りの居酒屋用途を確認。対象店は成人のグループ向けへ明確化する。','3人前と単品、コースとランチを区別。壺亭は5,000円プランと追加料金を分けて依頼。','宇都宮の夜投稿と県内海鮮の両方あり。東口の居住者比率・予約成果は取得不可。'],rankReason:'1位は海鮮の直接性と料金説明の具体性を優先。18.4万フォロワーや35万再生だけで決めていない。魚種に関する指摘もあるため、字幕と料理名の事前照合を発注条件にする。',brief:'浜焼きの焼き上がり→通常の刺身・盛り→人数と現行料金→東口の入口と予約。',caution:'同じ炭火設備・産地・魚種・価格とは限らない。元店の情報や最上級表現を流用しない。',ask:'東口の海鮮・4,000〜5,000円台の通常PRを複数、費用、閲覧地域、数値取得日とPR条件、字幕確認可否。'}},
 {handle:'tochigi_discover',name:'たべごん｜栃木グルメ&おでかけ発見',followers:'4.8万人',profilePosts:140,axis:'宇都宮の使う場面・取材・店を選ぶ理由',evidence:['DcfvBu5RUgh','DbKwi9Gx5xP','Dbz9GjhRNDH','Dbuz-PKxKtn'],day:{...day},night:{score:4,reason:'宴会幹事・仕事帰り・店主取材まで具体化。浜焼きの体験を、予約の判断材料へ変える依頼に合う。',axes:['鉄板のライブ感と料理の背景を説明。浜焼きは別調理なので、実物で撮り直す必要がある。','包包包で幹事・団体、キミドリで仕事帰りを明示。壺亭の夜用途との接点が強い。','壱の宮に時間別のコース価格あり。他2店の価格は未取得で、通常の浜焼き総額を別途確認。','宇都宮駅周辺の夜店を複数確認。ただし西口例が中心で、東口の送客効果は未確認。'],rankReason:'2位は幹事の意思決定と取材型の説明を重視。りんと同率4点だが、宴会の直接例があるため先に提案。海鮮そのものと東口の直接性は1位に劣る。5万の宴会投稿をバズ扱いせず、構造参考として評価。',brief:'「幹事が知りたい3つ」→浜焼き→人数・料理と飲料の条件→席→予約。',caution:'プロフィールの子連れ軸は今回使わない。壺亭には20歳未満入店不可の案内がある。',ask:'東口での夜PR、通常飲み放題コースの紹介例、費用、取材・字幕承認、視聴者地域。'}},
 {handle:'tochigi__gurume',name:'りん｜栃木のおしゃれグルメ',followers:'12.6万人',profilePosts:286,axis:'友人と行きたい栃木のグルメ・空間',evidence:['Dd_NJLWvhOP'],day:{...day},night:{score:4,reason:'宇都宮の魚の焼き上がりと友人との夜を紹介。料理と過ごす時間を組み合わせる提案に向く。',axes:['火としおで魚の焼き上がり・食感を説明。貝が開く浜焼きの待つ楽しさへ応用しやすい。','友人との会話・仕事終わりの夜を明記。カフェや観光の雰囲気を無理に対象店へ持ち込まない。','税込の一皿料金を列挙。ただし高価格の魚があり、壺亭の一人予算とは別の値。','宇都宮の夜店を直接確認。中央本町の例で、東口の閲覧・来店実績は未確認。'],rankReason:'3位は魚と焼く体験が近いため。同率のたべごんより宴会人数・コース条件の直接根拠が少なく、今回の近い夜リールも1本なので順位を下げた。8.6万は10万未満の参考例で、高再生実績とは表示しない。',brief:'貝が開く瞬間→取り分ける二人以上の手元→海鮮と一杯→東口・料金・予約。',caution:'おしゃれな炉端カウンター・高級魚・個室・空席の取りやすさを約束しない。',ask:'海鮮居酒屋や4,000〜5,000円台の夜PRを追加で複数、費用、通常の浜焼き撮影経験、地域別閲覧。'}},
 {handle:'tochino_ki_',name:'トチノキ｜栃木グルメ おでかけ',followers:'7.3万人',profilePosts:126,axis:'大きさ・価格・食べ方を伝える地元グルメ',evidence:['DdJPsrvzW_3'],day:{...day},night:{score:3,reason:'東宿郷の夜店を紹介しており地域が近い。一方で主な根拠は肉料理で、海鮮宴会の実績は未確認。',axes:['独特な肉の食べ方を説明。浜焼きの食べ方解説へ構造を応用できるが、海鮮の直接例が不足。','ガッツリ食べる日という軸は接点あり。激安やデカ盛りではなく仲間と囲む夜へ調整。','必須セットと税別料金を記載。対象店では税込・お通し・料理代を正確に分ける。','肉と米と酒は東宿郷2丁目で、対象店に近い地区。ただし地域内閲覧者比率は不明。'],rankReason:'4位は地域の直接性を評価したため。うさぎと3点同率だが、夜営業と東宿郷の実投稿がある方を先にした。6.1万の1例で実力全体や再生見込みを判断しない。',brief:'浜焼き初心者への一つのコツ→実物・通常量→料金と入口。',caution:'月間閲覧者のプロフィール自己申告を、第三者確認の到達人数に使わない。終了した特典や肉の量を流用しない。',ask:'海鮮居酒屋・宴会PRの最近の複数投稿、特典なしの通常実績、費用と地域別閲覧。'}},
 {handle:'usagi.gurume',name:'うさぎ＠栃木グルメ',followers:'7.8万人',profilePosts:2311,axis:'食感や料理ごとの価格を具体的に紹介',evidence:['DejMePDMMwk','DeBy-azGqgM'],day:{...day},night:{score:3,reason:'海鮮・焼き魚の説明に接点。ただし今回の海鮮根拠は昼中心のカルーセルで、夜リールの直接性が弱い。',axes:['源天で焼き魚・寿司・海鮮を紹介。肉リールでは食感の違いを言語化。料理説明の接点を評価。','確認できた魚の投稿は昼の御膳が主軸。浜焼き宴会・夜飲みの紹介はサンプル内で不足。','御膳や一皿の税込料金を説明。夜の一人総額・飲料条件の説明は追加確認が必要。','宇都宮の料理紹介あり。海鮮の例は下野市で、東口・夜の送客は未確認。'],rankReason:'5位は力量の評価ではなく今回の証拠の距離。海鮮を紹介していても、それだけで夜リール実績とはしない。12.3万の肉リールは時間帯未特定、カルーセルの再生は取得不可のまま。',brief:'本人から夜の海鮮リール例を確認できたら、焼き貝と刺身の違いを説明する案を相談。',caution:'カルーセルをリールに数えず、家族・子連れ利用を対象店に持ち込まない。プロフィールの個人的事情は選定基準にしない。',ask:'夜の浜焼き・海鮮居酒屋リールを複数、飲料込み予算を伝えた例、費用、閲覧地域。'}}
];
const baselinePatterns=[
 {title:'焼く時間を、来店の理由に',text:'完成品だけでなく、一緒に焼いて取り分ける時間を主役にする。壺亭では実際の貝の焼き上がりを通常提供のまま撮る。',refs:['Dd_NJLWvhOP','Dbz9GjhRNDH'],alternative:'料理や店の新規性・共同投稿の影響もある。未視聴の映像構成の共通率ではない。',test:'冒頭を貝の動作と盛りの全景で比較。料金・字幕量・尺はできるだけ固定。'},
 {title:'幹事が決められる情報を添える',text:'人数・料理と飲料・料金・予約先を分けて示す。5,000円プランの現行条件を確認してから、友人に送りやすい案内にする。',refs:['DcfvBu5RUgh','DeqyJI0TSbn','DebYpooTZV1'],alternative:'保存・シェア・予約の実数は未取得。本文の説明構造からの仮説。',test:'公開反応と、専用予約リンク等で確認できる問い合わせ・実来店を別々に記録。'},
 {title:'誰と過ごす、どんな夜か',text:'仕事帰りの一杯と友人の宴会を分ける。店の言葉・料理・入口を一つの用途へ結び付ける。',refs:['DbKwi9Gx5xP','Dbuz-PKxKtn','DdJPsrvzW_3'],alternative:'居住者や実客層は未確認。成人の夜利用という今回の提案対象であり、顧客構成の実測ではない。',test:'体験主導と幹事向け情報主導を別企画にし、相談の質と来店用途まで確認する。'}
];
export const accounts=baselineAccounts.map(a=>{const {day,...baseAccount}=a;let n={...a.night};let evidence=[];
 if(a.handle==='tochigi_gourmet1'){evidence=['DeqyJI0TSbn'];n={...n,score:4,reason:'海鮮・焼き魚を夜の料理として価格付きで紹介。5名の確認範囲では最も直接的。ただし通常予算の媒体差が残るため、発注確定ではなく第一相談候補。',axes:['刺身・さんま・夜限定串という具体的な魚介の根拠がある。浜焼きそのものの実績とは区別。','昼夜併記だが夜限定料理を明示。壺亭では成人の友人・宴会へ絞る。','食べログ4,000〜4,999円と、ぐるなび通常3,000円が併存。一致実績を断定せず、本人へ4,000〜5,000円の実例を確認。','源天は下野市。県内の海鮮接点はあるが、宇都宮駅東口の閲覧・予約成果は取得不可。'],rankReason:'相談順1位。料理の直接性と人数・価格の具体性を優先した定性判断。媒体差があるため前回5点から4点へ下げた。12.3万再生は公開表示だが、共同投稿・PR条件や反応の内容も異なり、来店保証ではない。',ask:'通常の飲料込み4,000〜5,000円で海鮮を紹介した最近のリールを複数、実会計の内訳、PR費、宇都宮の閲覧地域、商用利用範囲、字幕確認。'};}
 else if(a.handle==='tochigi__gurume'){evidence=['Dd_NJLWvhOP'];n={...n,score:3,reason:'魚の焼き上がり・友人と過ごす夜という体験の近さで第二相談候補。ただし夜予算が未確認なので価格一致実績には数えない。',rankReason:'相談順2位。魚の調理体験は近いが、浜焼き宴会の料金・人数の直接根拠が不足。8.6万再生の参考にとどめ、価格確認前は近似事例カードから外した。前回4点から3点へ変更。',axes:['魚の焼き上がりや食感を本文で説明。貝が開く動作への転用は提案上の仮説。','宇都宮で友人・仕事終わりの夜を明記。宴会幹事向け実績は別途確認。','夜の一人予算は取得不可。魚一皿4,378円等を客単価に読み替えない。','中央本町の投稿。東口への送客実績・視聴者地域は取得不可。']};}
 else {n={...n,score:null,reason:'4,000〜5,000円・夜の海鮮／浜焼きという今回条件の直接根拠を十分確認できず、点数と順位を保留。',rankReason:'前回の順位は肉・ピザ・中華などの構造参考も含んでいたため撤回。本人の力量が低いという判断ではなく、今回の公開サンプルで条件一致の根拠が不足しているため。',axes:['海鮮・浜焼きの夜リールを条件付きで確認する必要あり。','成人の友人・仕事帰り・宴会向けの紹介例を追加確認。','通常の一人会計4,000〜5,000円、飲料・お通し込みの条件を要確認。','プロフィールの栃木発信だけで宇都宮駅東口の送客を保証しない。'],brief:'条件に近い実投稿を本人から確認できた場合だけ、現行の浜焼きと料金を伝える案を相談。',caution:'価格不一致・昼料理・カルーセルを今回の夜リール実績へ繰り上げない。',ask:'通常一人会計4,000〜5,000円の夜の海鮮リールを複数、実績URL、PR費、視聴者地域、取得可能なインサイト。'};}
 return {...baseAccount,evidence,night:n};});
export const orders={night:['tochigi_gourmet1','tochigi__gurume','tochigi_discover','tochino_ki_','usagi.gurume'],day:[]};
accounts[0].evidence=['DIgJehOyAeq','DGSfW2yyjgv','DeqyJI0TSbn'];
accounts[0].night.reason='公式・HPで夜4,001〜5,000円のルタンブルを紹介した15.5万再生のリールを確認。海鮮の海色・源天にも接点があるが、両店は予算に媒体差があるため採用事例に数えない。';
accounts[0].night.axes[2]='ルタンブルは公式・HPの夜予算が対象帯。ただし洋風料理。海色・源天は通常予算の媒体差があり、海鮮で価格まで揃う直接例は未確認。';
accounts[0].night.rankReason='相談順1位。対象帯のルタンブル15.5万再生と、価格選外でも海鮮の説明が近い海色12.7万・源天12.3万を分けて判断。単に再生が最多だからではなく、料理・量・料金の具体性を評価する。ただし洋風料理と浜焼きには距離があり、実送客・視聴地域・PR費は未確認。';
accounts.find(a=>a.handle==='tochigi__gurume').evidence=['DFr-JbJyLbg','DWJGfPlj9Ob','Dd_NJLWvhOP'];
accounts.find(a=>a.handle==='tochigi__gurume').night.reason='カモメヤの24.2万・15.3万再生を確認。ただし通常予算の媒体差と、過去のコメント特典の影響があり、条件一致実績には採用しない。火としおの魚の説明は料理体験の補助根拠に限定する。';
accounts.find(a=>a.handle==='tochigi__gurume').night.axes[2]='カモメヤはHP4,001〜5,000円／食べログ3,000〜3,999円。火としおは通常予算未確認。いずれも今回の価格条件一致の本枠には入れない。';
accounts.find(a=>a.handle==='tochigi__gurume').night.rankReason='相談順2位。料理の食べどきと友人との夜の説明は応用可能。ただし24.2万・15.3万は別々のカモメヤ投稿で、2店舗の実績ではない。コメント72・89件は過去の特典希望を含み得るため、自然な来店意向や予約と解釈しない。価格が揃う海鮮実例を本人へ確認するまで3点に留める。';
export const patterns=[
 {title:'看板料理を、量・食感・料金で具体化',text:'採用したルタンブル本文では、名物を単品の量と料金付きで案内。壺亭では通常の貝・刺身・人数と、飲料・お通し込みの条件へ置き換える。',refs:['DIgJehOyAeq'],alternative:'採用は1投稿のみ。複数のバズに共通する映像の法則ではなく、本文から立てた仮説。',test:'料理の動作と盛りの全景を冒頭で比較し、料金・尺・字幕量はできるだけ固定。'},
 {title:'注文判断と、一人総額を混同しない',text:'一皿価格だけでは一人4,000〜5,000円になると証明できない。壺亭では実注文の人数・料理・飲料・お通しを確認してから総額を載せる。',refs:['DIgJehOyAeq'],alternative:'ルタンブルの本人実会計は未取得。再生15.5万を価格説明の効果と断定しない。',test:'問い合わせの予算・人数・予約成約を、公開の再生数とは別に記録。'},
 {title:'特典コメントと、来店意向を分ける',text:'選外候補のカモメヤ2投稿は、キーワードコメントで過去の特典を案内。壺亭の企画では未承認の特典を作らず、まず保存・共有と正しい予約情報を優先する。',refs:['DFr-JbJyLbg','DWJGfPlj9Ob'],alternative:'価格条件から選外の分析補足。コメント数の差は特典・経過期間・料理等が異なり、原因を特定できない。',test:'自然な質問、特典希望、予約相談を別集計。終了したクーポンを現在の案内として使わない。'}
];
export const comparisonStores=[];
export const coverage={fullVideoCount:0,targetCount:10,reels:posts.length,photoSupplements:0,viewsVerifiedCandidates:verifiedCandidates.length,distinctCandidateStores:4,listingPriceMatchCount:posts.length,priceExcludedCount:priceExcludedReels.length,shortfall:10-posts.length,strictMatchCount:0,strictMatchDefinition:'投稿者の一人実会計4,000〜5,000円と10万再生を両方確認した件数。店舗掲載予算の一致とは別。',detailIds:[...verifiedCandidates,...selectionPosts].map(p=>p.code),sourceNote:'指定5名のみで、リール一覧の再生表示と元投稿IDを照合。採用1件、価格に媒体差のある選外4件。写真・指定外アカウントは0件。安価な店の4,000円宴会コースや一人の口コミ会計は、店舗の通常予算に読み替えていません。全期間・全投稿の網羅確認ではなく、目標10件には9件不足。'};
