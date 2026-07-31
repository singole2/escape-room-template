/* index scripts for 神農嘗百草 Escape Room */
/* QDB: each question's options: first element MUST be correct; UI will shuffle display */
const QDB = {
  beginner: [
    { q: "神農嘗百草的主要人物是誰？", opts: ["神農","黃帝","孔子","李時珍"], explain:"故事主角為神農。" },
    { q: "神農嘗百草的主要目的是？", opts: ["了解草藥的功效與毒性","建立耕作制度","編寫詩歌","統一度量衡"], explain:"神農為了辨別草藥用途與毒性，親自嘗試。" },
    { q: "故事中神農嘗藥的行為代表哪種品質？", opts: ["無私與奉獻","貪婪","懦弱","嫉妒"], explain:"神農為了民眾健康犧牲自己，表現無私奉獻。" },
    { q: "《神農嘗百草》常被用來說明什麼？", opts: ["中藥起源與觀察精神","兵法策略","經濟制度","哲學爭辯"], explain:"本故事代表中藥與實驗觀察精神。" },
    { q: "神農嘗藥時遇到危險會怎麼做？", opts: ["忍耐並記錄反應","馬上放棄","召集其他人試藥","不記錄"], explain:"神農會觀察、記錄反應，繼續測試。" },
    { q: "神農嘗百草在文化中被視為什麼象徵？", opts: ["醫藥之父","戰神","詩人","商人"], explain:"神農被稱為醫藥之父或農業先祖。" },
    { q: "故事強調的實驗方法是？", opts: ["親身嘗試與觀察","純粹推演","猜測","複製別人的結論"], explain:"神農以實驗（嘗試）與觀察為主。" },
    { q: "故事中的草藥被分為？", opts: ["有用與有毒","稀有與常見","價格高低","顏色分類"], explain:"草藥依功效和毒性而異，強調辨識。" },
    { q: "神農嘗藥的故事主要出自何類文本？", opts: ["古代傳說與醫藥典籍","近代小說","科學論文","現代新聞"], explain:"該故事為古代傳說，常見於醫藥典籍的起源說法。" },
    { q: "神農嘗百草故事中常見的題材是：", opts: ["犧牲與創新","復仇與戰爭","浪漫愛情","商業競爭"], explain:"故事核心在於犧牲與創新精神。" },
    { q: "神農嘗藥時如何散佈知識？", opts: ["教導與分享發現","獨自收藏","銷售獲利","隱藏秘密"], explain:"神農會傳授與分享，造福眾人。" },
    { q: "神農嘗百草的精神對現代教育啟示是什麼？", opts: ["鼓勵實驗與觀察","停止嘗試","重視理論勝於實驗","反科學"], explain:"啟示為重視實驗、觀察與實務精神。" },
    { q: "神農嘗藥多半與哪一領域關聯？", opts: ["醫藥與農業","天文學","法律","音樂"], explain:"與醫藥和農業相關聯。" },
    { q: "故事中神農嘗藥常被描繪為哪種形象？", opts: ["耐心且堅毅的學者","輕率的冒險者","富有的商人","懶惰的人"], explain:"通常描繪成耐心、堅毅、有責任感的人物。" },
    { q: "神農嘗百草的故事想要傳達對人的什麼態度？", opts: ["對民眾負責與同情","輕視群眾","漠不關心","競爭優先"], explain:"強調對民眾的責任與關懷。" },
    { q: "在傳統文化中，神農的行為被後世怎麼看待？", opts: ["為典範，尊崇其貢獻","被遺忘","被批評為荒唐","視為富豪"], explain:"通常尊崇他對醫藥與農業的貢獻。" }
  ],
  expert: [
    { q: "從文本結構上看，《神農嘗百草》屬於哪種敘事方式？", opts: ["傳說性敘事，含功能說明與典故","心理寫實","哲學辯證","自然主義記述"], explain:"它以傳說敘事為主，兼具功能性說明。"},
    { q: "若以修辭學分析，神農嘗藥的描寫多用來呈現？", opts: ["美化英雄與典範作用","諷刺時弊","幽默效果","劇烈衝突"], explain:"修辭常用來塑造典範與英雄形象，使讀者產生敬重。"},
    { q: "如何從文本看出作者強調的倫理觀？", opts: ["以為民犧牲與責任為核心","競爭與個人成就","消費享樂","無政府主義"], explain:"文本突顯為民犧牲與社會責任的倫理。"},
    { q: "若將故事置入史觀，神農形象可能混合了哪些歷史角色？", opts: ["祭祀、農耕先民與醫術實踐者","君王、軍事將領","商人與工匠","詩人與畫家"], explain:"神農形象融合祭祀、農業與醫藥的先民形象。"},
    { q: "在文化解讀上，嘗百草的行為隱含對自然的哪種態度？", opts: ["主動探索並與自然建立互動","征服自然的冷漠","完全服從自然","忽略自然"], explain:"強調與自然互動、觀察與利用的主動態度。"},
    { q: "文本中若出現藥物毒性的描寫，這類描寫的意義可能是？", opts: ["提醒倫理與風險，強調辨識重要性","純粹製造恐懼","延伸為政治隱喻","無實際意義"], explain:"此類描寫提醒人們辨識與承擔風險的重要性。"},
    { q: "若改寫為現代文本，最能保留原意的寫法應為？", opts: ["以科學實驗與田野觀察的叙述重構","完全改為虛構奇幻","改為商業報導","改為愛情小說"], explain:"保留實驗與觀察精神，應以科學性重構。"},
    { q: "如何用文本提示設計一道考察「隱含主題」的高階題目？", opts: ["讓學生判斷行為動機並以證據支持","只要求背誦名稱","要求計算年代","要求翻譯外語"], explain:"高階題應要求文本證據與論證支持判斷。"},
    { q: "從語言風格看，古文或傳說體裁常使用哪些特徵來突顯可信度？", opts: ["列舉事蹟、因果與具體行為細節","大量主觀感受描寫","無序的插敘","純粹對話"], explain:"以具體事蹟與因果細節來建立可信性。"},
    { q: "若採跨領域教學，如何將本故事與現代科學方法連結？", opts: ["讓學生設計可重複的觀察/實驗並討論倫理","僅閱讀故事文本","只做美術延伸","以故事寫劇本"], explain:"可讓學生實作實驗設計並討論傳統與科學之異同。"},
    { q: "在教材設計上，若要考核「評價」層級，最適合的題型是？", opts: ["要求比較不同藥性處理方式並評價其可行性","只問事實細節","填空題","記憶選擇題"], explain:"評價應要求比較與判斷並給出理由。"},
    { q: "將此傳說作為文本中心討論「科學倫理」，最能提出哪個問題？", opts: ["在追求發現時如何平衡風險與利益？","誰是最強的戰士？","哪種藥價格最高？","應該去哪裡旅行？"], explain:"核心問題為發現過程中風險與公共利益的平衡。"},
    { q: "文本常以神話化人物來說教，這種做法在教育上可能的風險是？", opts: ["將歷史與事實模糊化，忽略多元來源","增強史實精確性","提高數據可信度","消除文化差異"], explain:"神話化可能模糊史實與抑制多元解讀。"},
    { q: "在語篇連貫性分析中，何者是支撐故事邏輯的重要線索？", opts: ["行為結果與因果關係的描述","不相關的插圖","外部譯注","無序列舉"], explain:"因果描述是維持敘事邏輯的核心。"},
    { q: "設計一個作業讓學生從文本衍生現代議題，哪個題目最合適？", opts: ["比較古代藥物試驗與現代臨床試驗的倫理差異","抄寫段落","背誦年代","畫角色肖像"], explain:"比較古今試驗倫理可促進批判性思考。"},
    { q: "若要進一步延伸，本故事最適合結合哪種實作活動？", opts: ["田野觀察、植物辨識與簡單實驗設計","純數學練習","絕對形式的考試","單純朗讀"], explain:"田野與實驗活動能實際連結文本主題。"}
  ]
};

/* FRAGMENTS and PHRASES for puzzle assembly */
const FRAGMENTS = ["神","農","嘗","百","草"];
const PHRASES = ["神農嘗百草"];

let state = {
  mode: 5,
  bank: [],
  order: [],
  currentIdx: 0,
  foundFragments: [],
  startTime: null,
  timerInterval: null
};

const el = {
  startBtn: document.getElementById('start-btn'),
  modeSelect: document.getElementById('mode-select'),
  gameArea: document.getElementById('game-area'),
  resultArea: document.getElementById('result-area'),
  qText: document.getElementById('q-text'),
  qTitle: document.getElementById('q-title'),
  options: document.getElementById('options'),
  current: document.getElementById('current'),
  total: document.getElementById('total'),
  time: document.getElementById('time'),
  fragList: document.getElementById('frag-list'),
  hintBtn: document.getElementById('hint-btn'),
  hintText: document.getElementById('hint-text'),
  retryBtn: document.getElementById('retry-btn'),
  resultSummary: document.getElementById('result-summary'),
  bgMusic: document.getElementById('bg-music'),
  awardSfx: document.getElementById('award-sfx')
};

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
}

function formatTime(seconds){
  const m = String(Math.floor(seconds/60)).padStart(2,'0');
  const s = String(seconds%60).padStart(2,'0');
  return `${m}:${s}`;
}

function startTimer(){
  state.startTime = Date.now();
  el.time.textContent = "00:00";
  state.timerInterval = setInterval(()=>{
    const sec = Math.floor((Date.now()-state.startTime)/1000);
    el.time.textContent = formatTime(sec);
  },500);
}

function stopTimer(){
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function pickBank(mode){
  // combine beginner & expert to make diverse set; prefer beginner earlier
  const merged = [...QDB.beginner, ...QDB.expert];
  shuffle(merged);
  return merged.slice(0, mode);
}

function startGame(){
  state.mode = parseInt(el.modeSelect.value,10);
  state.bank = pickBank(state.mode);
  state.currentIdx = 0;
  state.foundFragments = [];
  state.total = state.mode;
  el.total.textContent = state.mode;
  el.current.textContent = 1;
  el.fragList.textContent = "";
  el.gameArea.classList.remove('hidden');
  el.resultArea.classList.add('hidden');
  shuffle(state.bank);
  startTimer();
  el.bgMusic.play().catch(()=>{/* autoplay may be blocked */});
  renderQuestion();
}

function renderQuestion(){
  const item = state.bank[state.currentIdx];
  el.qTitle.textContent = `第 ${state.currentIdx+1} 題`;
  el.qText.textContent = item.q;
  el.options.innerHTML = "";
  const opts = [...item.opts];
  // ensure first element is correct by spec; shuffle display but keep value
  const mapped = opts.map((t, i)=>({text:t, correct: i===0}));
  shuffle(mapped);
  mapped.forEach((o, idx)=>{
    const li = document.createElement('li');
    li.textContent = o.text;
    li.tabIndex = 0;
    li.addEventListener('click',()=>answerSelected(o, li, item));
    el.options.appendChild(li);
  });
  el.hintText.classList.add('hidden');
  el.hintText.textContent = "";
}

function answerSelected(optObj, elLi, item){
  // mark correct/wrong, reveal explanation, collect fragment on correct
  const all = el.options.querySelectorAll('li');
  all.forEach(li=>li.onclick=null);
  if(optObj.correct){
    elLi.classList.add('correct');
    // award fragment
    const frag = FRAGMENTS[state.currentIdx % FRAGMENTS.length];
    if(!state.foundFragments.includes(frag)) state.foundFragments.push(frag);
    el.fragList.textContent = state.foundFragments.join('');
    el.awardSfx.play().catch(()=>{});
  } else {
    elLi.classList.add('wrong');
    // reveal the correct one
    all.forEach(li=>{
      if(li!==elLi && li.textContent===item.opts[0]) li.classList.add('correct');
    });
  }

  setTimeout(()=>{
    // next or finish
    state.currentIdx++;
    if(state.currentIdx<state.total){
      el.current.textContent = state.currentIdx+1;
      renderQuestion();
    } else {
      finishGame();
    }
  },900);
}

function finishGame(){
  stopTimer();
  el.gameArea.classList.add('hidden');
  el.resultArea.classList.remove('hidden');
  const timeUsed = Math.floor((Date.now()-state.startTime)/1000);
  const fragText = state.foundFragments.join('') || '(未收集)';
  el.resultSummary.textContent = `用時 ${formatTime(timeUsed)}，收集碎片：${fragText}。通關密語目標：${PHRASES[0]}`;
  // show certificate if all fragments collected
  if(state.foundFragments.join('')===FRAGMENTS.join('')){
    document.querySelector('#certificate').classList.remove('hidden');
    el.awardSfx.play().catch(()=>{});
  } else {
    document.querySelector('#certificate').classList.add('hidden');
  }
  el.bgMusic.pause();
  el.bgMusic.currentTime = 0;
}

el.startBtn.addEventListener('click', startGame);
el.hintBtn.addEventListener('click', ()=>{
  const cur = state.bank[state.currentIdx];
  if(!cur) return;
  el.hintText.textContent = cur.explain || "提示：請回到課文段落尋找關鍵句。";
  el.hintText.classList.remove('hidden');
});
el.retryBtn.addEventListener('click', ()=>{
  el.resultArea.classList.add('hidden');
  startGame();
});

/* Initialize UI values */
document.getElementById('total').textContent = el.modeSelect.value;
