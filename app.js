const navItems=[...document.querySelectorAll('.nav-item')];
const screens=[...document.querySelectorAll('.screen')];
function openScreen(id){
  navItems.forEach(item=>item.classList.toggle('is-active',item.dataset.screen===id));
  screens.forEach(screen=>screen.classList.toggle('is-active',screen.id===id));
  window.scrollTo({top:0,behavior:'instant'});
}
navItems.forEach(item=>item.addEventListener('click',()=>openScreen(item.dataset.screen)));
document.addEventListener('keydown',event=>{
  const map={'1':'world','2':'quests','3':'character','4':'journal','5':'lab'};
  if(map[event.key]) openScreen(map[event.key]);
});

const landmarkData={
  rules:{icon:'◇',title:'WORLD RULES — NotionOS設計原則',text:'NotionOSが何のために存在し、何を残し、何を減らし、何を改善とみなすか。プレイヤー装備ではなく、この世界そのものを支配するルール。'},
  map:{icon:'◎',title:'SYSTEM MAP — NotionOSシステムマップ',text:'現在どの領域・正本・関係が存在するかを示す世界地図。原則 / ユーザーデータ / AI / インターフェース / 進化改善の5領域を接続する。'},
  archive:{icon:'▤',title:'ARCHIVE — ユーザーデータ',text:'現実・観測、会話原典、証拠・ファイル、振り返り、自己モデル、未来、活動、資源。UIやAIが変わっても残るSave Data。'},
  guild:{icon:'✦',title:'AI GUILD — AI台帳',text:'Context / Module / Skill / Harness / Agent / System の現在定義。標準AIハーネスは、問いごとに必要な能力だけを選ぶAutomatic Loadout。'},
  hub:{icon:'⌘',title:'HUB — インターフェース',text:'現在地、表示、入力、接続・共有の接面。LifeWorld OS自身も、この交換可能なHUD / Menu / Hubの一つ。'},
  lab:{icon:'⚗',title:'EVOLUTION LAB — NotionOS進化・改善基盤',text:'実行フィードバック、改善実験、定義履歴、品質ループ。巡回・テスト・レビューから、承認された変更を定着させるPatch Loop。'},
  future:{icon:'✧',title:'FUTURE BEACON — 未来仮説',text:'過去から予測したゴールではなく、存在させたい未来の仮説。現在へ方向と選択圧を与える、遠方のDestination / Beacon。'},
  region:{icon:'△',title:'QUEST REGION — Theme / Subject',text:'複数Projectを評価する意味・問い・世界の切り方。Region / Quest Lineとして、その中に有限のQuestであるProjectが存在する。'}
};
const landmarkInfo=document.getElementById('landmark-info');
document.querySelectorAll('.landmark').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.landmark').forEach(item=>item.classList.remove('is-selected'));
  button.classList.add('is-selected');
  const data=landmarkData[button.dataset.landmark];
  landmarkInfo.innerHTML=`<div class="landmark-icon">${data.icon}</div><div><div class="hud-kicker">WORLD INFO</div><h3>${data.title}</h3><p>${data.text}</p></div>`;
}));

const questData={
  lifeworld:{badge:'MAIN QUEST',title:'LifeWorld OS / notionOS ゲームUI',lead:'NotionOSの現行構造を、説明書ではなく「人生をプレイする画面」へ翻訳し、触った不便から不足機能を発見する。',objectives:[['done','Public Repositoryを作成','GitHubをUI実装の正本にする','DONE'],['done','GitHub Pagesで公開','実際に触れるブラウザ環境を作る','DONE'],['active','現行NotionOSをゲーム機能へ配置','存在しない機能は足さず、現在ある役割だけを翻訳','ACTIVE'],['','操作して違和感を観測','現実・観測 / 会話原典へ戻せるEvidenceにする','NEXT']]},
  ai:{badge:'QUEST LINE',title:'AIとの文脈共有コストを下げる',lead:'毎回自分を説明し直すのではなく、標準AIブートストラップから必要な正本・Context・能力へ最短で到達できる状態を育てる。',objectives:[['done','標準AIブートストラップを入口化','必要な正本だけを選択する','CURRENT'],['active','標準AIハーネスで能力を動的編成','必要なModule / Contextだけを使用','ACTIVE'],['','実運用の発揮差を観測','実行フィードバックと品質ループへ接続','ONGOING']]},
  future:{badge:'QUEST LINE',title:'鮮明な未来から現在を変える',lead:'過去の自己像を最適化するだけでなく、未来仮説を照明として、非連続な選択肢や外部世界の信号へ気づける状態をつくる。',objectives:[['done','未来仮説をDestinationとして保持','存在させたい未来を具体的世界状態として記述','CURRENT'],['active','4つの外界レーダーを運用','未来 / 潮流 / 機会 / 成立境界を別の問いで観測','ACTIVE'],['','現実で小さく実験','結果から未来仮説を更新・棄却できるようにする','ONGOING']]}
};
const questDetail=document.getElementById('quest-detail');
function renderQuest(key){
  const q=questData[key];
  questDetail.innerHTML=`<div class="quest-badge">${q.badge}</div><h2>${q.title}</h2><p class="lead">${q.lead}</p><div class="quest-meta"><span>MODEL</span><b>Subject → Project → Object</b><span>STATE</span><b>現行構造</b></div><div class="quest-objectives"><h3>OBJECTIVES / TASKS</h3>${q.objectives.map(([state,title,desc,status])=>`<div class="objective-row ${state}"><i>${state==='done'?'✓':state==='active'?'◆':'◇'}</i><div><b>${title}</b><small>${desc}</small></div><em>${status}</em></div>`).join('')}</div>`;
}
document.querySelectorAll('.quest-line').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.quest-line').forEach(item=>item.classList.remove('is-active'));
  button.classList.add('is-active');renderQuest(button.dataset.quest);
}));

const gearData={
  direction:['人生の指向','何を大切にし、どのように世界と関わりながら生きたいか。ゲーム上ではPlayer Compass / North Star。'],
  traits:['Pattern.DB｜自己モデル','繰り返し観測される傾向・成立条件・反証・有効な介入。Character Traitsは固定人格ではなく更新可能なモデル。'],
  tools:['ツール.DB','実際に使えるサービス、ツール、テンプレート、ガジェット等。AI能力とは分け、Inventory / Toolbeltとして扱う。'],
  resources:['資源運用モデル｜7資産','時間・ヒト・モノ・カネ・アタマ・ココロ・カラダ。現在値を捏造せず、既存の資源カテゴリだけを表示。'],
  skills:['AI台帳｜Skill / Module','ModuleはAbility、Skillは特定依頼を再現可能に処理するTechnique。運用状態とバージョンを持つ。'],
  loadout:['標準AIハーネス v3.3','問いに応じ、AI協働・証拠・回答設計を基盤に、必要なModuleとモデルContextだけを条件付きで選ぶAutomatic Loadout。']
};
const gearInfo=document.getElementById('gear-info');
document.querySelectorAll('.gear-node').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.gear-node').forEach(item=>item.classList.remove('is-selected'));
  button.classList.add('is-selected');const [title,text]=gearData[button.dataset.gear];
  gearInfo.innerHTML=`<span class="menu-kicker">EQUIPMENT INFO</span><h2>${title}</h2><p>${text}</p>`;
}));

const journalData={
  events:{kicker:'WORLD EVENT LOG',title:'現実・観測.DB',type:'SOURCE',text:'出来事・観察・行動・結果・反応・記憶・外部ソースを、解釈前の一次記録として残す。',items:[['WORLD EVENT','GitHub PagesでLifeWorld OSを公開','結果：ブラウザでページ表示を確認'],['OBSERVATION','初期UIが「ゲーム」ではなくダッシュボードに見えた','反応：探索画面・装備画面の身体感覚が必要'],['CHANGE','ゲーム機能と現行NotionOS機能を再照合','観測を次のUI設計へ接続']]},
  dialogue:{kicker:'DIALOGUE LOG',title:'会話原典.DB',type:'SOURCE',text:'人・AI・会議・チャット等の会話そのものを、後から再解釈できる原典として保持する。',items:[['CHAT','「全然ゲームUIじゃなかった」','UI評価の原文を残せる'],['CHAT','「今NotionOSにあるもので世界を歩きたい」','プロジェクト目的の解像度が上がった'],['CHAT','「見えていないものは実装しなくていい」','今回の実装境界を明示']]},
  evidence:{kicker:'EVIDENCE ARCHIVE',title:'証拠・ファイル.DB',type:'SOURCE',text:'現実・観測や会話原典を裏付ける文書・画像・音声・動画・URL等の証拠実体。',items:[['SCREEN','GitHub Pagesの公開画面','UIが実際にどう見えたかの証拠'],['IMAGE','ゲームUIコンセプト画像','探索画面・装備画面の方向性比較'],['CODE','GitHub Repository','Web実装の現行正本']]},
  replay:{kicker:'REPLAY / JOURNAL',title:'日記.DB / 振り返り',type:'REFLECTION',text:'原典をそのまま保存するのではなく、本人が経験を再観測し、意味・物語・可能性を確認した結果を残す。',items:[['REPLAY','何が起きたかを原典から再観測','事実と解釈を混ぜない'],['REFLECT','違和感・嬉しさ・意味を味わう','AI下書きは本人確認前に確定しない'],['UPDATE','自己モデル / 現在地 / 未来仮説の更新候補','自動反映ではなく候補として返す']]},
  lore:{kicker:'COMPENDIUM',title:'ノート.DB',type:'KNOWLEDGE',text:'考察、一般化、着想、再利用したい知識、構造モデル、制作の種を保持する。',items:[['MODEL','NotionOS ↔ Open World アナロジー','再利用できる構造モデル'],['DESIGN','料理設計｜状態変換と4つの時計','領域知識の整理例'],['IDEA','LifeWorld OSのUI仮説','原典から派生した制作知識']]}
};
const journalContent=document.getElementById('journal-content');
function renderJournal(key){const j=journalData[key];journalContent.innerHTML=`<div class="journal-heading"><div><span class="menu-kicker">${j.kicker}</span><h2>${j.title}</h2></div><span class="record-type">${j.type}</span></div><p>${j.text}</p><div class="log-list">${j.items.map(([type,title,desc])=>`<article><time>${type}</time><b>${title}</b><small>${desc}</small></article>`).join('')}</div>`;}
document.querySelectorAll('.journal-tab').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.journal-tab').forEach(item=>item.classList.remove('is-active'));button.classList.add('is-active');renderJournal(button.dataset.journal);}));

const labData={
  patrol:{kicker:'PATROL MODE',title:'巡回 → Quality Case',text:'固定した問題を前提にせず、検索 → 候補抽出 → 必要箇所の深読みで、未知の差異・滞留・構造負債を探す。',steps:[['TRIGGER','手動起動 / 変更イベント'],['HARNESS','巡回・検証ハーネス'],['EVIDENCE','差異・根拠を収集'],['CASE','共通品質ケース']]},
  test:{kicker:'TEST MODE',title:'期待状態 → 差異 → 再確認',text:'既知の期待状態や変更内容を基準に、同じ条件で検証して回帰・不整合・意図しない影響を確認する。',steps:[['EXPECTED','正本から期待状態を解決'],['RUN','対象を同条件で検証'],['COMPARE','期待との差を分類'],['RESULT','合格 / 不合格 / 判定不能']]},
  review:{kicker:'REVIEW MODE',title:'品質ケース → 統合判断',text:'複数ケース・実行フィードバック・改善実験を必要範囲で統合し、維持・局所修正・改善実験・再設計等を判断する。',steps:[['CASES','品質ケースを統合'],['CAUSE','原因・影響を判断'],['DECIDE','維持 / 修正 / 実験'],['APPROVE','必要なら本人承認']]}
};
const labProcess=document.getElementById('lab-process');
function renderLab(key){const l=labData[key];labProcess.innerHTML=`<div class="lab-heading"><span class="menu-kicker">${l.kicker}</span><h2>${l.title}</h2></div><p>${l.text}</p><div class="process-track">${l.steps.map((s,i)=>`${i?'<i>→</i>':''}<div><span>0${i+1}</span><b>${s[0]}</b><small>${s[1]}</small></div>`).join('')}</div><div class="quality-profiles"><span>構造整合性</span><span>運用ループ</span><span>鮮度・現実同期</span><span>簡素性・構造負債</span></div>`;}
document.querySelectorAll('.lab-mode').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.lab-mode').forEach(item=>item.classList.remove('is-active'));button.classList.add('is-active');renderLab(button.dataset.mode);}));
