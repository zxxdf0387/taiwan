const appState = {
  liveQuotes: {},
  marketMood: {
    label: "影片偏多",
    summary: "4 月 30、29、28 日三支影片比對後，最新兩天焦點收斂到鴻海、立隆電、矽格、啟碁、萬泰科、艾訊，4 月 28 那批網通與 AI 伺服器主流則退到前一輪觀察。",
    score: 78,
    openingPlan: "先分 2 日延續與前一輪主流",
  },
  headlines: [
    {
      tone: "positive",
      title: "最新影片：2026/04/30",
      summary: "4 月 30 日標題明確點出艾訊、信邦、矽格、光寶、立隆、啟碁、萬泰科、鴻海輪漲；盟立、直得續高出，華邦、聯電當沖，主軸比前一天更收斂。",
    },
    {
      tone: "neutral",
      title: "前一支影片：2026/04/29",
      summary: "4 月 29 日標題是立、直得高出，華邦、聯電當沖，立隆、矽格、艾訊、瑞儀、同欣電、啟碁、萬泰科、大中、鴻海輪漲，和 4 月 30 日有明顯交集。",
    },
    {
      tone: "neutral",
      title: "再前一支影片：2026/04/28",
      summary: "4 月 28 日標題則偏向前一輪主流，旺宏、聯亞、穩懋、南電高出，智邦、奇鋐、勤誠、緯穎、貿聯、致茂、台燿、國巨、廣達輪漲，和後兩天的交集大幅下降。",
    },
  ],
  stocks: [
    {
      code: "2317",
      name: "鴻海",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "鴻海是 4/30、4/29 連續輪漲的少數大型股，用 TWSE 4/30 官方收盤重算後周線與月線布林都還沒過熱，仍是這輪最穩的首選觀察股。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "布林首選", type: "positive" },
      ],
    },
    {
      code: "2472",
      name: "立隆電",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "立隆電在 4/30、4/29 標題都留在輪漲名單，代表被動元件與電源支線還在延續；只是布林位置已偏高，操作上更像看續強而不是追價。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "矽格在 4/30、4/29 連續被點名，屬於封測與中價位輪動延續股；以 TWSE 4/30 計算屬強勢但偏熱，更像輪漲觀察股。",
      signals: [
        { text: "封測輪動", type: "positive" },
        { text: "偏熱觀察", type: "negative" },
      ],
    },
    {
      code: "6285",
      name: "啟碁",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "啟碁在 4/30、4/29 都被列進輪漲，代表網通與通訊模組方向還留在輪動範圍內；只是布林已在高檔，操作上偏看強不追。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "網通輪動", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "萬泰科連兩天都留在輪漲名單裡，偏向線纜與次主流補漲角色；屬 OTC，盤中同步仍先沿用整理資料。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "3088",
      name: "艾訊",
      bias: "2日連續",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "延續主軸",
      note: "艾訊在 4/30、4/29 連續被點名，代表工業電腦支線有延續；但因為不是 4/28 那批主流，優先度放在第二層。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "支線輪動", type: "positive" },
      ],
    },
    {
      code: "2345",
      name: "智邦",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "網通主軸",
      note: "智邦只出現在 4/28 這一輪標題主流，代表網通強股上一輪已先表態；以 TWSE 4/30 計算周月布林都偏高，節奏上更適合看強不追。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "高檔輪動", type: "negative" },
      ],
    },
    {
      code: "3017",
      name: "奇鋐",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "散熱主軸",
      note: "奇鋐是 4/28 標題主流之一，散熱主流沒有完全轉弱；只是 TWSE 4/30 的周月布林都已過熱，比較偏續抱觀察而不是新追價。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "過熱不追", type: "negative" },
      ],
    },
    {
      code: "8210",
      name: "勤誠",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "AI 伺服器",
      note: "勤誠出現在 4/28 這支主流標題裡，代表機殼伺服器主軸當時仍強；只是用 TWSE 4/30 重算後周線與月線 %B 都偏高，較適合等拉回或強勢續抱。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "6669",
      name: "緯穎",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "AI 伺服器",
      note: "緯穎出現在 4/28 主流標題，但 4/29、4/30 沒再留在前排，盤前先當成強勢續抱觀察。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "高價觀察", type: "positive" },
      ],
    },
    {
      code: "3665",
      name: "貿聯-KY",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "線材主軸",
      note: "貿聯-KY 出現在 4/28 主流標題，但最新兩支改由萬泰科、信邦等名單接手，所以先視為前一輪強勢觀察。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "節奏切換", type: "negative" },
      ],
    },
    {
      code: "2360",
      name: "致茂",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "設備觀察",
      note: "致茂只在 4/28 這輪標題裡被拉進主流，代表設備檢測方向當天有輪動，但連續性還要再觀察。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "續航待確認", type: "negative" },
      ],
    },
    {
      code: "6274",
      name: "台燿",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "PCB 主軸",
      note: "台燿是 4/28 標題主流之一，不過屬 OTC，這版同步按鈕不會即時更新收盤；定位先列前一輪主流觀察。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "2327",
      name: "國巨",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "被動元件",
      note: "國巨出現在 4/28 主流輪漲標題裡；周線強、月線仍在修復，算是可觀察但不是最優先切入。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "周強月中性", type: "positive" },
      ],
    },
    {
      code: "2382",
      name: "廣達",
      bias: "4/28主流",
      gap: "4/28",
      foreign: "前一輪主流",
      volume: "AI 伺服器",
      note: "廣達只在 4/28 這輪標題主流裡明確出現，代表 AI 伺服器這一段已先走過一輪；目前已接近熱區，盤前列觀察比直接追價更合理。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "接近熱區", type: "negative" },
      ],
    },
    {
      code: "2303",
      name: "聯電",
      bias: "2日當沖",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "當沖觀察",
      note: "聯電在 4/30、4/29 都被明確放在當沖，不是中線輪漲名單；而且用 TWSE 4/30 重算後月線 %B 已經偏熱，操作屬性和鴻海完全不同。",
      signals: [
        { text: "2日當沖", type: "negative" },
        { text: "不算主多", type: "negative" },
      ],
    },
    {
      code: "2344",
      name: "華邦電",
      bias: "2日當沖",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "當沖觀察",
      note: "華邦電和聯電一樣，在 4/30、4/29 都是當沖定位，適合快節奏處理；雖然布林沒有聯電那麼熱，但分類上仍不適合放進主多首選。",
      signals: [
        { text: "2日當沖", type: "negative" },
        { text: "快節奏", type: "negative" },
      ],
    },
    {
      code: "2464",
      name: "盟立",
      bias: "2日高出",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "高出提醒",
      note: "盟立在 4/30 是續高出，4/29 標題頁也延續同一組高出語氣，這類型偏獲利調節，不適合當成今天新進場首選。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "2日連續", type: "negative" },
      ],
    },
    {
      code: "1597",
      name: "直得",
      bias: "2日高出",
      gap: "4/30、4/29",
      foreign: "最新2日交叉",
      volume: "高出提醒",
      note: "直得在 4/30、4/29 都是高出或續高出，語氣明確偏調節，不在今天主攻名單裡。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "偏調節", type: "negative" },
      ],
    },
    {
      code: "8046",
      name: "南電",
      bias: "4/28高出",
      gap: "4/28",
      foreign: "前一輪高出",
      volume: "高出提醒",
      note: "南電是在 4/28 那一輪標題裡被列高出，這種語氣代表偏獲利調節，不適合當成今天新進場首選。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "前一輪高出", type: "negative" },
      ],
    },
    {
      code: "3105",
      name: "穩懋",
      bias: "4/28高出",
      gap: "4/28",
      foreign: "前一輪高出",
      volume: "高出提醒",
      note: "穩懋是在 4/28 這支標題裡被列高出，代表偏調節或短線賣點提醒，不在今天主攻名單裡。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "偏調節", type: "negative" },
      ],
    },
    {
      code: "3081",
      name: "聯亞",
      bias: "4/28高出",
      gap: "4/28",
      foreign: "前一輪高出",
      volume: "高出提醒",
      note: "聯亞是在 4/28 標題中被列高出，屬於已有漲幅後的調節提醒，和最新兩天的延續輪漲股不同。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "非主攻", type: "negative" },
      ],
    },
    {
      code: "2337",
      name: "旺宏",
      bias: "4/28高出",
      gap: "4/28",
      foreign: "前一輪高出",
      volume: "高出提醒",
      note: "旺宏是在 4/28 這支標題裡被列高出，所以更像短線調節提醒，不是今天要新增部位的名單。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "短線調節", type: "negative" },
      ],
    },
  ],
  checklist: [
    "先看最新 2 日連續輪漲股是否一起轉強：鴻海、立隆電、矽格、啟碁、萬泰科、艾訊。",
    "把 2 日連續輪漲股和 2 日當沖股分開看；華邦電、聯電雖然連兩天出現，但定位始終是當沖，不算主多首選。",
    "再看前一輪主流：智邦、奇鋐、勤誠、緯穎、貿聯-KY、致茂、台燿、國巨、廣達；若這些回頭接棒，代表題材沒退潮。",
    "高出股要獨立看：盟立、直得是最新兩天高出，旺宏、聯亞、穩懋、南電則是 4/28 高出，只適合當調節訊號。",
  ],
  risks: [
    {
      level: "high",
      title: "影片基準已更新到 2026/04/30、04/29、04/28",
      detail: "目前基準改用黃清照官方 /videos 頁最上方三支影片順序，4/27 已經被最新 4/30 取代。",
    },
    {
      level: "medium",
      title: "這次沒有 3 日完全共通股",
      detail: "官方標題可見 4/30、4/29 的延續名單，到了 4/28 已切回另一輪網通與 AI 主流，所以這版重點改成 2 日延續與前一輪主流分流觀察。",
    },
    {
      level: "medium",
      title: "OTC 同步仍會慢一步",
      detail: "這版同步按鈕可抓 TWSE 上市股最新收盤；像台燿、萬泰科、艾訊、盟立、聯亞、穩懋等 OTC 股票，仍先沿用整理資料，不會隨按鈕即時更新。",
    },
  ],
  bollingerRankings: [
    {
      code: "2317",
      name: "鴻海",
      verdict: "今日首選",
      asOf: "截至 2026-04-30 收盤",
      summary: "用 TWSE 官方資料重算後，鴻海周線 %B 約 0.511、月線 %B 約 0.689；兩條週期都在中軌上方但還沒貼上軌，而且它還是 4/30、4/29 連續輪漲股裡最穩的大型股。",
      signals: ["周線中軌上", "月線中軌上", "未貼上軌"],
    },
    {
      code: "2382",
      name: "廣達",
      verdict: "偏強接近熱區",
      asOf: "截至 2026-04-30 收盤",
      summary: "廣達周線 %B 約 0.837、月線 %B 約 0.935，型態還是強，但它屬於 4/28 那一輪主流股，已經很靠近上軌，操作上偏續抱與觀察。",
      signals: ["周線近上軌", "月線高檔", "不宜急追"],
    },
    {
      code: "6285",
      name: "啟碁",
      verdict: "強勢但偏熱",
      asOf: "截至 2026-04-30 收盤",
      summary: "啟碁周線 %B 約 0.779、月線 %B 約 1.167，周線還能接受，但月線已經明顯偏熱；不過它仍是 4/30、4/29 連續輪漲股，所以續強辨識度高。",
      signals: ["周線偏強", "月線過熱", "看強不追"],
    },
    {
      code: "8210",
      name: "勤誠",
      verdict: "強勢但偏熱",
      asOf: "截至 2026-04-30 收盤",
      summary: "勤誠周線 %B 約 1.031、月線 %B 約 0.954，已經很接近甚至略碰上軌；它是 4/28 那一輪主流的強勢代表，但不是最新兩天延續股。",
      signals: ["周線上軌外", "月線高檔", "不宜急追"],
    },
    {
      code: "2327",
      name: "國巨",
      verdict: "周強月中性",
      asOf: "截至 2026-04-30 收盤",
      summary: "國巨周線 %B 約 0.955，短線很強；但月線 %B 約 0.367，代表中期位置還在修復，算是 4/28 主流股裡強中帶整理的觀察股。",
      signals: ["周線偏強", "月線修復", "可等量價確認"],
    },
    {
      code: "6257",
      name: "矽格",
      verdict: "輪漲偏熱",
      asOf: "截至 2026-04-30 收盤",
      summary: "矽格周線 %B 約 0.922、月線 %B 約 1.161，技術面還強，但位置也已經偏高，適合當輪漲股觀察，不是今天最舒服的新切入點。",
      signals: ["周線偏強", "月線過熱", "輪漲觀察"],
    },
  ],
  markovModel: {
    currentState: "多頭輪動",
    confidence: 63,
    takeaway: "最新 3 支影片沒有整體轉空，但輪動結構明顯切成兩段：4/30、4/29 是延續補漲股，4/28 則是前一輪網通與 AI 主流，操作上要分開看。",
    transitions: [
      { label: "維持多頭輪動", value: "63%" },
      { label: "轉回趨勢多頭", value: "14%" },
      { label: "降回區間震盪", value: "23%" },
    ],
    drivers: [
      "最新只剩 6 檔 2 日連續輪漲股",
      "4/28 的網通與 AI 主流已退到前一輪觀察",
      "高出股與當沖股都能獨立切開來看",
    ],
  },
  monteCarloScenarios: [
    {
      code: "2317",
      name: "鴻海",
      verdict: "模型最平衡",
      range: "20 日模擬區間 198 - 253",
      stopLoss: "3% 停損命中率 59%",
      takeProfit: "8% 停利命中率 45%",
      drawdown: "模擬最大回撤中位數 7.6%",
      note: "鴻海同時是最新 2 日連續輪漲股與布林首選，若把蒙地卡羅放進盤前決策，它最適合拿來當風險基準股。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "風險最平衡", type: "positive" },
      ],
    },
    {
      code: "2382",
      name: "廣達",
      verdict: "強勢但回撤快",
      range: "20 日模擬區間 282 - 350",
      stopLoss: "3% 停損命中率 60%",
      takeProfit: "8% 停利命中率 34%",
      drawdown: "模擬最大回撤中位數 7.1%",
      note: "廣達的模擬路徑仍偏強，但因為目前已貼近上軌，盤前若再開高，模型會提醒回撤風險同步放大。",
      signals: [
        { text: "AI主流", type: "positive" },
        { text: "接近熱區", type: "negative" },
      ],
    },
    {
      code: "8210",
      name: "勤誠",
      verdict: "報酬高但波動大",
      range: "20 日模擬區間 996 - 1470",
      stopLoss: "3% 停損命中率 62%",
      takeProfit: "8% 停利命中率 68%",
      drawdown: "模擬最大回撤中位數 10.6%",
      note: "勤誠的上行空間仍大，但它屬於 4/28 那一輪主流，模擬顯示波動與回撤都明顯高於鴻海，所以更像強勢股續抱，而不是最穩的新進場點。",
      signals: [
        { text: "前一輪主流", type: "positive" },
        { text: "波動較大", type: "negative" },
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
  "2301", "2303", "2317", "2327", "2337", "2344", "2345",
  "2360", "2382", "2464", "2472", "3017", "3023", "3665",
  "6669",
  "6176", "6257", "6271", "6285", "8046", "8210",
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
    elements.syncStatus.textContent = `已同步 ${successCount} 檔上市股最新收盤價 ｜ ${currentTaipeiTimestamp()} ｜ 影片基準 2026/04/30、2026/04/29、2026/04/28`;
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
