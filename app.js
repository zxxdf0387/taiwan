const appState = {
  liveQuotes: {},
  updateMeta: {
    version: "2026.05.15.0911",
    lastUpdated: "2026/05/14 17:00",
    lastAutomationSync: "2026/05/15 09:11",
    videoBasis: "2026/05/14、2026/05/13、2026/05/12",
  },
  marketMood: {
    label: "舊補漲線回流偏多",
    summary: "2026 年 5 月 14 日最新影片重新點回日電貿、良維、矽格、富鼎、萬泰科與光寶科，和 2026 年 5 月 12 日形成清楚的 2 日交叉；但和 2026 年 5 月 13 日的健鼎、國巨、勤誠、奇鋐、台燿、智邦、廣達、大立光組幾乎完全斷線，代表資金不是翻空，而是從大型 AI 權值快速回流到被動元件、封測、線材與中段補漲。",
    score: 72,
    openingPlan: "先看 5/14 回流股能否續強",
  },
  headlines: [
    {
      tone: "positive",
      title: "最新影片：2026/05/14",
      summary: "5 月 14 日最新影片把日電貿、尼克森、良維、矽格、超豐、富鼎、萬泰科、光寶科列輪漲，聯電、群創、華邦電、南亞科列當沖，主軸明顯回到被動元件、封測、線材與中段電子。",
    },
    {
      tone: "neutral",
      title: "前一支影片：2026/05/13",
      summary: "5 月 13 日影片則是健鼎、國巨、勤誠、奇鋐、台燿、智邦、廣達、大立光輪漲，南電、穩懋、華通、聯亞高出，主軸偏 AI 伺服器、PCB 與大型電子。",
    },
    {
      tone: "neutral",
      title: "再前一支影片：2026/05/12",
      summary: "5 月 12 日影片仍是康普、啟碁、日電貿、艾訊、萬泰科、矽格、立隆、富鼎、良維輪漲，光寶科、群創、華邦電、聯電當沖，提供這次 5 月 14 日回流線的底稿。",
    },
  ],
  stocks: [
    {
      code: "6290",
      name: "良維",
      bias: "布林首選",
      gap: "5/14、5/12",
      foreign: "最近2日交叉",
      volume: "線材 / AI 電源",
      note: "良維同時出現在 5 月 14 與 5 月 12 的輪漲名單，用 TPEx 官方日資料重算後，20 日 %B 約 0.499、40 日 %B 約 0.722；它是最新回流主線裡少數既有辨識度、又沒有貼上軌的個股，這版改列布林首選。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "布林首選", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      bias: "2日共通",
      gap: "5/14、5/12",
      foreign: "最近2日交叉",
      volume: "線纜補漲",
      note: "萬泰科在 5 月 14 與 5 月 12 都還留在輪漲區，TPEx 官方日資料顯示 20 日 %B 約 0.765、40 日 %B 約 0.871，位置雖比良維高，但仍是這批回流股裡第二層最穩的延續股。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "2301",
      name: "光寶科",
      bias: "角色升級",
      gap: "5/14、5/12",
      foreign: "當沖轉輪漲",
      volume: "電源 / 電子權值",
      note: "光寶科在 5 月 12 還只是當沖股，5 月 14 直接升回輪漲主軸；用 TWSE 官方日資料看 20 日 %B 約 0.774、40 日 %B 約 0.940，雖然 40 日位階不算低，但角色升級比聯電、華邦、群創更有辨識度。",
      signals: [
        { text: "角色升級", type: "positive" },
        { text: "當沖轉輪漲", type: "positive" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      bias: "2日共通",
      gap: "5/14、5/12",
      foreign: "最近2日交叉",
      volume: "封測輪動",
      note: "矽格是這次最新三支影片裡最清楚的 2 日共通股之一，TWSE 官方日資料顯示 20 日 %B 約 0.822、40 日 %B 約 0.867，續強機率還在，但舒服度略低於良維與萬泰科。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "封測續強", type: "positive" },
      ],
    },
    {
      code: "8261",
      name: "富鼎",
      bias: "2日共通",
      gap: "5/14、5/12",
      foreign: "最近2日交叉",
      volume: "MOSFET",
      note: "富鼎在 5 月 14 與 5 月 12 連續被點到，TWSE 官方日資料算出的 20 日 %B 約 0.973、40 日 %B 約 0.986；辨識度足夠，但位階已接近上軌，這版保留成延續觀察，不升主攻首選。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "位階偏熱", type: "negative" },
      ],
    },
    {
      code: "3090",
      name: "日電貿",
      bias: "2日共通",
      gap: "5/14、5/12",
      foreign: "最近2日交叉",
      volume: "通路 / 被動元件",
      note: "日電貿是 5 月 14 與 5 月 12 都有出現的輪漲股，但 TWSE 官方日資料顯示 20 日 %B 約 1.080、40 日 %B 約 1.220，屬於辨識度高但追價風險偏大的股。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "貼近上軌", type: "negative" },
      ],
    },
    {
      code: "3317",
      name: "尼克森",
      bias: "最新輪漲",
      gap: "5/14",
      foreign: "最新影片主軸",
      volume: "被動元件",
      note: "尼克森是 5 月 14 最新影片新增的輪漲股，用 TPEx 官方日資料看 20 日 %B 約 1.053、40 日 %B 約 1.178，雖然題材對味，但位階已經偏熱，只能放在追蹤清單後段。",
      signals: [
        { text: "最新主線", type: "positive" },
        { text: "位階偏熱", type: "negative" },
      ],
    },
    {
      code: "2441",
      name: "超豐",
      bias: "最新輪漲",
      gap: "5/14",
      foreign: "最新影片主軸",
      volume: "封測",
      note: "超豐是 5 月 14 新增輪漲股之一，但 TWSE 官方日資料顯示 20 日 %B 約 1.084、40 日 %B 約 1.114，屬於主線正確、位置不便宜的類型，這版先不升核心。",
      signals: [
        { text: "最新主線", type: "positive" },
        { text: "過熱追價", type: "negative" },
      ],
    },
    {
      code: "3017",
      name: "奇鋐",
      bias: "AI 備選",
      gap: "5/13",
      foreign: "單日 AI 主線",
      volume: "AI 散熱 / 伺服器",
      note: "奇鋐雖然只出現在 5 月 13 那支 AI 權值主線裡，但用 TWSE 官方日資料看 20 日 %B 約 0.390、40 日 %B 約 0.653，是那一組裡位階最乾淨的一檔；若後續影片再切回 AI，它比健鼎、國巨、智邦更值得優先觀察。",
      signals: [
        { text: "AI 備選", type: "positive" },
        { text: "位階乾淨", type: "positive" },
      ],
    },
    {
      code: "8046",
      name: "南電",
      bias: "高出低位",
      gap: "5/13",
      foreign: "單日高出",
      volume: "ABF",
      note: "南電在 5 月 13 被列高出不是輪漲，但 TWSE 官方日資料顯示 20 日 %B 約 0.411、40 日 %B 約 0.680，位置甚至比奇鋐還低；這版保留成低位觀察股，不直接誤判成主攻。",
      signals: [
        { text: "高出觀察", type: "negative" },
        { text: "位階低", type: "positive" },
      ],
    },
    {
      code: "3044",
      name: "健鼎",
      bias: "AI 備選",
      gap: "5/13",
      foreign: "單日 AI 主線",
      volume: "PCB",
      note: "健鼎是 5 月 13 最明顯的主線股之一，但 TWSE 官方日資料顯示 20 日 %B 約 0.855、40 日 %B 約 0.919，雖然還能看，舒服度已不如奇鋐與南電。",
      signals: [
        { text: "AI 主線", type: "positive" },
        { text: "位置略高", type: "negative" },
      ],
    },
    {
      code: "2345",
      name: "智邦",
      bias: "AI 備選",
      gap: "5/13",
      foreign: "單日 AI 主線",
      volume: "網通 / 交換器",
      note: "智邦只留在 5 月 13 那組大型股輪漲名單裡，TWSE 官方日資料算出的 20 日 %B 約 0.947、40 日 %B 約 0.967，強勢沒變，但位階已比奇鋐擁擠不少。",
      signals: [
        { text: "AI 主線", type: "positive" },
        { text: "位階偏高", type: "negative" },
      ],
    },
    {
      code: "2303",
      name: "聯電",
      bias: "2日當沖",
      gap: "5/14、5/12",
      foreign: "重複當沖",
      volume: "晶圓代工",
      note: "聯電在 5 月 14 與 5 月 12 都被列當沖，不是輪漲；TWSE 官方日資料顯示 20 日 %B 約 1.033、40 日 %B 約 1.119，角色與位置都不支持把它放進主攻名單。",
      signals: [
        { text: "2日當沖", type: "negative" },
        { text: "非核心", type: "negative" },
      ],
    },
    {
      code: "2344",
      name: "華邦電",
      bias: "2日當沖",
      gap: "5/14、5/12",
      foreign: "重複當沖",
      volume: "記憶體",
      note: "華邦電和聯電一樣連續兩支影片都只屬當沖定位，TWSE 官方日資料顯示 20 日 %B 約 1.101、40 日 %B 約 1.159，屬又熱又快節奏的風險股。",
      signals: [
        { text: "2日當沖", type: "negative" },
        { text: "快節奏", type: "negative" },
      ],
    },
    {
      code: "3481",
      name: "群創",
      bias: "2日當沖",
      gap: "5/14、5/12",
      foreign: "重複當沖",
      volume: "面板快節奏",
      note: "群創在 5 月 14 與 5 月 12 都是當沖，不是輪漲；TWSE 官方日資料顯示 20 日 %B 約 0.958、40 日 %B 約 1.166，角色沒有升級，反而還保留快節奏風險。",
      signals: [
        { text: "2日當沖", type: "negative" },
        { text: "角色未升級", type: "negative" },
      ],
    },
    {
      code: "2408",
      name: "南亞科",
      bias: "當沖新增",
      gap: "5/14",
      foreign: "最新影片當沖",
      volume: "DRAM",
      note: "南亞科是 5 月 14 新增的當沖股，用 TWSE 官方日資料看 20 日 %B 約 1.026、40 日 %B 約 1.214；它是題材股，不是這版主攻股。",
      signals: [
        { text: "當沖新增", type: "negative" },
        { text: "不列主攻", type: "negative" },
      ],
    },
  ],
  checklist: [
    "先接受這輪沒有 3 日共通股，因為 2026 年 5 月 14 日和 2026 年 5 月 13 日的輪漲組合幾乎完全沒有交集。",
    "第一層先看 5 月 14 與 5 月 12 的 2 日共通股，且布林位置最乾淨的良維、萬泰科、矽格；光寶科屬角色升級股，放第二順。",
    "5 月 13 的 AI / PCB 權值組不要直接忽略，其中奇鋐與南電位階仍乾淨，但要等影片重新續點，否則先當備選不是現主攻。",
    "聯電、華邦電、群創、南亞科都屬當沖或快節奏股，不能混進輪漲主線名單。",
  ],
  risks: [
    {
      level: "high",
      title: "影片基準已更新到 2026/05/14、05/13、05/12",
      detail: "目前基準改用黃清照老師萬寶週刊官方頁面排序，最新三支已改成 2026 年 5 月 14 日、5 月 13 日、5 月 12 日，不再是 5 月 13 日、5 月 12 日、5 月 11 日。",
    },
    {
      level: "medium",
      title: "這輪沒有 3 日共通股，屬高檔換手後回流舊補漲線",
      detail: "5 月 14 的輪漲組合和 5 月 13 的 AI 權值組沒有交集，但和 5 月 12 可交叉出日電貿、良維、矽格、富鼎、萬泰科，代表資金回流舊補漲線，不是直接翻空。",
    },
    {
      level: "medium",
      title: "2 日共通與當沖股要分開看",
      detail: "良維、萬泰科、矽格、富鼎、日電貿屬 2 日共通輪漲；聯電、華邦電、群創是重複當沖，光寶科則是當沖升輪漲，角色必須拆開處理。",
    },
  ],
  bollingerRankings: [
    {
      code: "6290",
      name: "良維",
      verdict: "今日首選",
      asOf: "截至 2026-05-14 收盤",
      summary: "用 TPEx 官方日資料重算後，良維 20 日 %B 約 0.499、40 日 %B 約 0.722；它同時是 5 月 14 與 5 月 12 的共通輪漲股，這版先排第一。",
      signals: ["2日共通", "20日位階佳", "40日未過熱"],
    },
    {
      code: "6190",
      name: "萬泰科",
      verdict: "2日共通第二選",
      asOf: "截至 2026-05-14 收盤",
      summary: "萬泰科 20 日 %B 約 0.765、40 日 %B 約 0.871，雖然位置比良維高，但它仍是最新回流主線裡最穩的第二順位。",
      signals: ["2日共通", "線纜續強", "位階仍可"],
    },
    {
      code: "2301",
      name: "光寶科",
      verdict: "當沖轉輪漲",
      asOf: "截至 2026-05-14 收盤",
      summary: "光寶科 20 日 %B 約 0.774、40 日 %B 約 0.940，最關鍵的是它從 5 月 12 的當沖股升回 5 月 14 的輪漲股，辨識度高於聯電、華邦與群創。",
      signals: ["角色升級", "20日仍可", "40日略高"],
    },
    {
      code: "3017",
      name: "奇鋐",
      verdict: "AI 低位備選",
      asOf: "截至 2026-05-14 收盤",
      summary: "奇鋐 20 日 %B 約 0.390、40 日 %B 約 0.653，是 5 月 13 那組 AI 權值股裡位階最乾淨的一檔；雖然最新影片沒續點，但若資金再切回 AI，它最值得先看。",
      signals: ["AI 備選", "位階最低", "等重新續點"],
    },
    {
      code: "8046",
      name: "南電",
      verdict: "高出但位階低",
      asOf: "截至 2026-05-14 收盤",
      summary: "南電 20 日 %B 約 0.411、40 日 %B 約 0.680，位階非常乾淨；但 5 月 13 的角色是高出不是輪漲，因此這版只保留成低位觀察股。",
      signals: ["高出觀察", "位階低", "不可誤判主攻"],
    },
  ],
  markovModel: {
    currentState: "舊補漲線回流偏多",
    confidence: 68,
    takeaway: "2026 年 5 月 14 日最新影片沒有延續 5 月 13 的 AI 權值組，而是把 5 月 12 的日電貿、良維、矽格、富鼎、萬泰科、光寶科重新拉回來；只要這批 2 日共通股沒有失真，盤勢更像高檔換手後回流，不是直接翻空。",
    transitions: [
      { label: "維持舊補漲線回流", value: "68%" },
      { label: "再切回 AI 權值", value: "20%" },
      { label: "降回區間震盪", value: "12%" },
    ],
    drivers: [
      "5 月 14 日新輪漲組合改成日電貿、尼克森、良維、矽格、超豐、富鼎、萬泰科、光寶科",
      "5 月 14 與 5 月 12 交叉出日電貿、良維、矽格、富鼎、萬泰科，外加光寶科從當沖升回輪漲",
      "5 月 13 的健鼎、國巨、勤誠、奇鋐、台燿、智邦、廣達、大立光整組沒被最新影片續點",
    ],
  },
  monteCarloScenarios: [
    {
      code: "6290",
      name: "良維",
      verdict: "模型最平衡",
      range: "20 日模擬區間 249 - 313",
      stopLoss: "3% 停損命中率 35%",
      takeProfit: "8% 停利命中率 79%",
      drawdown: "模擬最大回撤中位數 7.2%",
      note: "良維同時是 5 月 14 與 5 月 12 的 2 日共通股，也是目前布林位置最乾淨的一檔，最適合當這版風險基準股。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "風險最平衡", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      verdict: "延續機率高",
      range: "20 日模擬區間 71 - 88",
      stopLoss: "3% 停損命中率 37%",
      takeProfit: "8% 停利命中率 73%",
      drawdown: "模擬最大回撤中位數 8.0%",
      note: "萬泰科雖然位置比良維高一點，但它和最新回流線的黏著度夠高，若 5 月 14 的舊補漲線繼續發酵，它是最容易接棒的第二順位。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "主線延續", type: "positive" },
      ],
    },
    {
      code: "2301",
      name: "光寶科",
      verdict: "角色升級觀察",
      range: "20 日模擬區間 190 - 228",
      stopLoss: "3% 停損命中率 34%",
      takeProfit: "8% 停利命中率 71%",
      drawdown: "模擬最大回撤中位數 7.4%",
      note: "光寶科不是這版最舒服的一檔，但它從當沖升回輪漲的角色變化最明顯，適合列為主線擴散時的第三順位觀察股。",
      signals: [
        { text: "角色升級", type: "positive" },
        { text: "接棒觀察", type: "positive" },
      ],
    },
  ],
};

const elements = {
  todayLabel: document.querySelector("#todayLabel"),
  marketMood: document.querySelector("#marketMood"),
  marketSummary: document.querySelector("#marketSummary"),
  premarketScore: document.querySelector("#premarketScore"),
  openingPlan: document.querySelector("#openingPlan"),
  activeTabLabel: document.querySelector("#activeTabLabel"),
  syncStatus: document.querySelector("#syncStatus"),
  updateMeta: document.querySelector("#updateMeta"),
  headlineList: document.querySelector("#headlineList"),
  stockList: document.querySelector("#stockList"),
  checklist: document.querySelector("#checklist"),
  riskList: document.querySelector("#riskList"),
  topPickCard: document.querySelector("#topPickCard"),
  bollingerPreview: document.querySelector("#bollingerPreview"),
  bollingerList: document.querySelector("#bollingerList"),
  markovCard: document.querySelector("#markovCard"),
  monteCarloList: document.querySelector("#monteCarloList"),
  searchInput: document.querySelector("#searchInput"),
  refreshButton: document.querySelector("#refreshButton"),
  navItems: [...document.querySelectorAll(".bottom-nav__item")],
  viewPanels: [...document.querySelectorAll(".view-panel")],
};

const listedCodes = new Set([
  "2301", "2303", "2313", "2327", "2344", "2345", "2382", "2408",
  "2441", "2472", "3008", "3017", "3044", "3090", "3481", "6257",
  "6271", "6285", "8046", "8210", "8261",
]);

function formatTaipeiDate() {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(new Date());
}

function currentTwseMonth() {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}01`;
}

function currentTaipeiTimestamp() {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function buildLiveQuoteText(code) {
  const quote = appState.liveQuotes[code];
  if (quote) {
    return `最新收盤 ${quote.close} ｜ 資料日 ${quote.date} ｜ ${quote.source}`;
  }
  if (listedCodes.has(code)) {
    return "尚未同步上市股最新收盤價";
  }
  return "OTC 目前沿用整理資料";
}

function renderHeader() {
  elements.todayLabel.textContent = formatTaipeiDate();
  elements.marketMood.textContent = appState.marketMood.label;
  elements.marketSummary.textContent = appState.marketMood.summary;
  elements.premarketScore.textContent = appState.marketMood.score;
  elements.openingPlan.textContent = appState.marketMood.openingPlan;
  elements.syncStatus.textContent = `目前交叉比對的最近 3 支影片日期：${appState.updateMeta.videoBasis}。`;
  elements.updateMeta.innerHTML = `
    <div class="hero-meta-card">
      <div class="hero-meta-card__label">版本時間</div>
      <div class="hero-meta-card__value">${appState.updateMeta.version}</div>
    </div>
    <div class="hero-meta-card">
      <div class="hero-meta-card__label">排程最後成功同步</div>
      <div class="hero-meta-card__value">${appState.updateMeta.lastAutomationSync}</div>
    </div>
    <div class="hero-meta-card">
      <div class="hero-meta-card__label">最後更新</div>
      <div class="hero-meta-card__value">${appState.updateMeta.lastUpdated}</div>
    </div>
    <div class="hero-meta-card hero-meta-card--wide">
      <div class="hero-meta-card__label">影片基準</div>
      <div class="hero-meta-card__value">${appState.updateMeta.videoBasis}</div>
    </div>
  `;
}

function renderHeadlines() {
  const template = document.querySelector("#headlineTemplate");
  elements.headlineList.replaceChildren();

  appState.headlines.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const badge = clone.querySelector(".headline__badge");
    const title = clone.querySelector("h3");
    const summary = clone.querySelector("p");

    if (item.tone === "warning") {
      badge.style.background = "#b53d29";
      badge.style.boxShadow = "0 0 0 8px rgba(181, 61, 41, 0.12)";
    } else if (item.tone === "neutral") {
      badge.style.background = "#ef9b28";
      badge.style.boxShadow = "0 0 0 8px rgba(239, 155, 40, 0.15)";
    }

    title.textContent = item.title;
    summary.textContent = item.summary;
    elements.headlineList.append(clone);
  });
}

function buildMetric(label, value) {
  const wrapper = document.createElement("div");
  wrapper.className = "metric";
  wrapper.innerHTML = `
    <div class="metric__label">${label}</div>
    <div class="metric__value">${value}</div>
  `;
  return wrapper;
}

function renderStocks(keyword = "") {
  const template = document.querySelector("#stockTemplate");
  elements.stockList.replaceChildren();

  const normalized = keyword.trim();
  const filtered = appState.stocks.filter((stock) => {
    return `${stock.code}${stock.name}`.includes(normalized);
  });

  filtered.forEach((stock) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".stock-card__code").textContent = stock.code;
    clone.querySelector(".stock-card__name").textContent = stock.name;
    clone.querySelector(".pill").textContent = stock.bias;
    clone.querySelector(".stock-card__note").textContent = stock.note;

    const metrics = clone.querySelector(".stock-card__metrics");
    const metricGrid = document.createElement("div");
    metricGrid.className = "metric-grid";
    metricGrid.append(
      buildMetric("交叉日期", stock.gap),
      buildMetric("整理方式", stock.foreign),
      buildMetric("角色定位", stock.volume),
    );
    metrics.append(metricGrid);

    const signals = clone.querySelector(".stock-card__signals");
    stock.signals
      .filter((signal) => !/最新影片|前一支影片|重複點名/.test(signal.text))
      .forEach((signal) => {
      const chip = document.createElement("div");
      chip.className = `signal signal--${signal.type}`;
      chip.textContent = signal.text;
      signals.append(chip);
      });

    const liveQuote = document.createElement("div");
    liveQuote.className = "stock-card__live";
    liveQuote.textContent = buildLiveQuoteText(stock.code);
    clone.querySelector(".stock-card__note").after(liveQuote);

    elements.stockList.append(clone);
  });

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "stock-card";
    empty.textContent = "找不到符合的個股，試試輸入代號如 2330 或名稱如 台積電。";
    elements.stockList.append(empty);
  }
}

function renderChecklist() {
  const template = document.querySelector("#checklistTemplate");
  elements.checklist.replaceChildren();

  appState.checklist.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    const checkbox = clone.querySelector("input");
    const text = clone.querySelector("span");

    checkbox.id = `task-${index}`;
    text.textContent = item;
    elements.checklist.append(clone);
  });
}

function renderRisks() {
  const template = document.querySelector("#riskTemplate");
  elements.riskList.replaceChildren();

  appState.risks.forEach((risk) => {
    const clone = template.content.cloneNode(true);
    const level = clone.querySelector(".risk-item__level");
    const title = clone.querySelector("h3");
    const detail = clone.querySelector("p");

    level.classList.add(`risk-item__level--${risk.level}`);
    title.textContent = risk.title;
    detail.textContent = risk.detail;
    elements.riskList.append(clone);
  });
}

function renderBollingerSection() {
  const topPick = appState.bollingerRankings[0];
  elements.topPickCard.innerHTML = `
    <div class="top-pick__eyebrow">Bollinger Top Pick</div>
    <h3>${topPick.code} ${topPick.name}</h3>
    <div class="pill">${topPick.verdict}</div>
    <p class="top-pick__summary">${topPick.summary}</p>
    <p class="stock-card__live">${buildLiveQuoteText(topPick.code)}</p>
    <p class="bollinger-card__meta">${topPick.asOf} ｜ 上市資料採 TWSE、OTC 資料採 TPEx</p>
  `;

  const previewItems = appState.bollingerRankings.slice(0, 3)
    .map((item) => `<span class="pill">${item.code} ${item.name}｜${item.verdict}</span>`)
    .join("");
  elements.bollingerPreview.innerHTML = `
    <div class="bollinger-preview__hint">這裡就是布林軌道整理。完整排行在下方的「清單」頁，但總覽先顯示前三名給你快速看。</div>
    <div class="bollinger-preview__chips">${previewItems}</div>
  `;

  const template = document.querySelector("#bollingerTemplate");
  elements.bollingerList.replaceChildren();

  appState.bollingerRankings.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".stock-card__code").textContent = item.code;
    clone.querySelector(".stock-card__name").textContent = item.name;
    clone.querySelector(".pill").textContent = item.verdict;
    clone.querySelector(".bollinger-card__meta").textContent = item.asOf;
    clone.querySelector(".stock-card__note").textContent = item.summary;

    const liveQuote = document.createElement("div");
    liveQuote.className = "stock-card__live";
    liveQuote.textContent = buildLiveQuoteText(item.code);
    clone.querySelector(".stock-card__note").after(liveQuote);

    const signals = clone.querySelector(".stock-card__signals");
    item.signals.forEach((signalText, index) => {
      const chip = document.createElement("div");
      chip.className = `signal ${index === item.signals.length - 1 && /保守|急追|回測/.test(signalText) ? "signal--negative" : "signal--positive"}`;
      chip.textContent = signalText;
      signals.append(chip);
    });

    elements.bollingerList.append(clone);
  });
}

function renderMarkovCard() {
  const model = appState.markovModel;
  const metrics = model.transitions.map((item) => `
    <div class="metric">
      <div class="metric__label">${item.label}</div>
      <div class="metric__value">${item.value}</div>
    </div>
  `).join("");

  const drivers = model.drivers.map((item) => `<li>${item}</li>`).join("");

  elements.markovCard.innerHTML = `
    <div class="model-card__top">
      <div>
        <div class="top-pick__eyebrow">Regime State</div>
        <h3>${model.currentState}</h3>
      </div>
      <div class="model-card__score">${model.confidence}%</div>
    </div>
    <p class="top-pick__summary">${model.takeaway}</p>
    <div class="metric-grid">${metrics}</div>
    <div class="model-card__note">這裡是把馬可夫鍊簡化成盤勢狀態切換卡，重點不是預言，而是幫你判斷今天更像追強輪動、還是該保守。</div>
    <ul class="model-card__drivers">${drivers}</ul>
  `;
}

function renderMonteCarlo() {
  const template = document.querySelector("#scenarioTemplate");
  elements.monteCarloList.replaceChildren();

  appState.monteCarloScenarios.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".stock-card__code").textContent = item.code;
    clone.querySelector(".stock-card__name").textContent = item.name;
    clone.querySelector(".pill").textContent = item.verdict;
    clone.querySelector(".stock-card__note").textContent = item.note;

    const metrics = clone.querySelector(".stock-card__metrics");
    const metricGrid = document.createElement("div");
    metricGrid.className = "metric-grid";
    metricGrid.append(
      buildMetric("模擬區間", item.range),
      buildMetric("停損風險", item.stopLoss),
      buildMetric("停利機率", item.takeProfit),
    );
    metrics.append(metricGrid);

    const drawdown = document.createElement("div");
    drawdown.className = "stock-card__live";
    drawdown.textContent = item.drawdown;
    clone.querySelector(".stock-card__note").after(drawdown);

    const signals = clone.querySelector(".stock-card__signals");
    item.signals.forEach((signal) => {
      const chip = document.createElement("div");
      chip.className = `signal signal--${signal.type}`;
      chip.textContent = signal.text;
      signals.append(chip);
    });

    elements.monteCarloList.append(clone);
  });
}

function switchTab(tab) {
  const tabNames = {
    overview: "總覽",
    list: "清單",
    alerts: "提醒",
  };

  elements.navItems.forEach((item) => {
    item.classList.toggle("bottom-nav__item--active", item.dataset.tab === tab);
  });

  elements.viewPanels.forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.view !== tab);
  });

  elements.activeTabLabel.textContent = `目前分頁：${tabNames[tab] || "總覽"}`;
}

function rotateMarketMood() {
  const nextScore = 70 + Math.floor(Math.random() * 18);
  const variants = [
    {
      label: "影片偏多",
      summary: "若最新 2 日連續輪漲股先表態，代表主流延續速度快",
      openingPlan: "延續股優先",
    },
    {
      label: "輪動加速",
      summary: "輪漲股與當沖股同時活躍，代表市場節奏偏快",
      openingPlan: "分批布局",
    },
    {
      label: "觀望偏多",
      summary: "若最新 2 日延續股沒量，先觀察不急追",
      openingPlan: "先控風險",
    },
  ];

  const nextMood = variants[Math.floor(Math.random() * variants.length)];
  appState.marketMood = { ...nextMood, score: nextScore };
  renderHeader();
}

async function fetchLatestTwseQuote(code) {
  const url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${currentTwseMonth()}&stockNo=${code}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TWSE ${code} HTTP ${response.status}`);
  }

  const json = await response.json();
  if (json.stat !== "OK" || !Array.isArray(json.data) || json.data.length === 0) {
    throw new Error(`TWSE ${code} no data`);
  }

  const last = json.data.at(-1);
  return {
    code,
    close: last[6],
    date: last[0],
    source: "TWSE",
  };
}

async function refreshLiveData() {
  const listedInView = [...new Set([
    ...appState.stocks.map((item) => item.code),
    ...appState.bollingerRankings.map((item) => item.code),
  ])].filter((code) => listedCodes.has(code));

  elements.refreshButton.disabled = true;
  elements.refreshButton.textContent = "同步中";
  elements.syncStatus.textContent = "同步中：正在更新上市股最新收盤價...";

  let successCount = 0;

  try {
    for (const code of listedInView) {
      try {
        const quote = await fetchLatestTwseQuote(code);
        appState.liveQuotes[code] = quote;
        successCount += 1;
      } catch (_) {
        // Keep existing quote state for failed codes.
      }
    }

    renderStocks(elements.searchInput.value);
    renderBollingerSection();
    elements.syncStatus.textContent = `已同步 ${successCount} 檔上市股最新收盤價 ｜ ${currentTaipeiTimestamp()} ｜ 影片基準 ${appState.updateMeta.videoBasis}`;
  } catch (_) {
    elements.syncStatus.textContent = "同步失敗：目前環境無法直接抓取最新資料，請稍後再試。";
  } finally {
    elements.refreshButton.disabled = false;
    elements.refreshButton.textContent = "同步";
  }
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    renderStocks(event.target.value);
  });

  elements.refreshButton.addEventListener("click", refreshLiveData);

  elements.navItems.forEach((item) => {
    item.addEventListener("click", () => {
      switchTab(item.dataset.tab);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        // Ignore registration failures for local preview.
      });
    });
  }
}

function init() {
  renderHeader();
  renderHeadlines();
  renderStocks();
  renderChecklist();
  renderRisks();
  renderBollingerSection();
  renderMarkovCard();
  renderMonteCarlo();
  bindEvents();
  switchTab("overview");
  registerServiceWorker();
}

window.switchTab = switchTab;

init();
