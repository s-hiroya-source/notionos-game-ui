const tabs=[...document.querySelectorAll('.tab')];const screens=[...document.querySelectorAll('.screen')];tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('is-active'));screens.forEach(s=>s.classList.remove('is-active'));tab.classList.add('is-active');document.getElementById(tab.dataset.screen).classList.add('is-active')}));

const worldDetails={principles:['COMPASS','世界のルールと構造を示す。判断が迷子になったときの方角。'],archive:['ARCHIVE','出来事・原典・記憶・振り返りを残し、世界の履歴を失わない。'],guild:['AI GUILD','AI Module / Skillを、使える能力やParty Memberとして扱う。'],hub:['HUB','情報を見る・入力する・行動へ移るためのHUD / Menu / Hub。'],evolution:['EVOLUTION LAB','実行結果から品質を見直し、仕組みを改善するPatch Loop。']};
const detail=document.getElementById('world-detail');document.querySelectorAll('.world-node').forEach(node=>node.addEventListener('click',()=>{document.querySelectorAll('.world-node').forEach(n=>n.classList.remove('is-selected'));node.classList.add('is-selected');const [title,text]=worldDetails[node.dataset.detail];detail.innerHTML=`<div class="panel-label">WORLD INFO</div><h3>${title}</h3><p class="muted">${text}</p>`}));

document.querySelectorAll('.mode').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.mode').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active')}));

['energy','attention','time','buffer'].forEach(id=>{const input=document.getElementById(id);const value=document.getElementById(`${id}-value`);input.addEventListener('input',()=>value.textContent=input.value)});

const systems=[
  {name:'Current State',kind:'Current',desc:'現在地をPlayer / World Stateとして表示する。',on:true,effect:{orientation:8,awareness:7}},
  {name:'Quest Flow',kind:'Current',desc:'Theme → Project → Action → Evidenceの流れを見る。',on:true,effect:{action:8,learning:5}},
  {name:'AI Guild',kind:'Current',desc:'利用可能なAI能力をAbilityとして把握する。',on:true,effect:{awareness:5,action:4}},
  {name:'Next Quest Resolver',kind:'Candidate',desc:'状態と資源から次のAction候補を提示する。',on:false,effect:{action:18,orientation:6}},
  {name:'Resource Forecast HUD',kind:'Candidate',desc:'行動した場合の時間・注意力・余力を予測する。',on:false,effect:{action:9,awareness:10}},
  {name:'Return-to-Play Mode',kind:'Candidate',desc:'中断後に最短で世界へ戻れる入口を作る。',on:false,effect:{recovery:20,orientation:4}},
  {name:'Fog of War',kind:'Candidate',desc:'未知領域を可視化し、探索余地を感じさせる。',on:false,effect:{orientation:7,learning:8}},
  {name:'Invention Bench',kind:'Candidate',desc:'既存Quest外の新しい可能性を組み立てる。',on:false,effect:{learning:12,action:5}}
];
const base={orientation:64,action:34,awareness:51,recovery:31,learning:56};const lab=document.getElementById('lab-grid');
function renderSystems(){lab.innerHTML='';systems.forEach((s,i)=>{const card=document.createElement('article');card.className='system-card';card.innerHTML=`<div class="system-row"><span class="tag ${s.kind==='Candidate'?'experimental':''}">${s.kind}</span><button class="toggle ${s.on?'on':''}" aria-label="toggle ${s.name}" data-i="${i}"></button></div><h3>${s.name}</h3><p>${s.desc}</p>`;lab.appendChild(card)});lab.querySelectorAll('.toggle').forEach(btn=>btn.addEventListener('click',()=>{systems[Number(btn.dataset.i)].on=!systems[Number(btn.dataset.i)].on;renderSystems();updateScores()}))}
function updateScores(){const score={...base};systems.filter(s=>s.on).forEach(s=>Object.entries(s.effect).forEach(([k,v])=>score[k]+=v));document.getElementById('score-orientation').textContent=Math.min(score.orientation,99);document.getElementById('score-action').textContent=Math.min(score.action,99);document.getElementById('score-awareness').textContent=Math.min(score.awareness,99);document.getElementById('score-recovery').textContent=Math.min(score.recovery,99);document.getElementById('score-learning').textContent=Math.min(score.learning,99)}
renderSystems();updateScores();
