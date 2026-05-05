const appState = {
  liveQuotes: {},
  marketMood: {
    label: "影片偏多",
    summary: "5 月 4、4 月 30、4 月 29 三支影片交叉後，3 日共通股重新出現，焦點集中在鴻海、立隆電、矽格、艾訊、萬泰科，以及台燿、國巨、奇鋐、勤誠、廣達這批延續輪漲股。",
    score: 82,
    openingPlan: "先看 3 日共通股",
  },
  headlines: [
    {
      tone: "positive",
      title: "最新影片：2026/05/04",
      summary: "5 月 4 日最新影片把群創、華邦電列當沖，大銀微、盟立列高出；聯電、矽格、立隆電、光寶科、同欣電、萬泰科、艾訊、力成、鴻海輪漲，台燿、國巨、奇鋐、勤誠、廣達、健鼎、京元電也在輪漲名單裡。",
    },
    {
      tone: "neutral",
      title: "前一支影片：2026/04/30",
      summary: "4 月 30 日影片把艾訊、信邦、矽格、光寶科、立隆電、啟碁、萬泰科、鴻海列輪漲；盟立、直得續高出；華邦電、聯電當沖，同時保留台燿、奇鋐、勤誠、國巨、廣達、京元電這批輪漲股。",
    },
    {
      tone: "neutral",
      title: "再前一支影片：2026/04/29",
      summary: "4 月 29 日影片則是盟立、直得高出，華邦電、聯電當沖，立隆電、矽格、艾訊、瑞儀、同欣電、啟碁、萬泰科、大中、鴻海輪漲，另把南電、穩懋、聯亞、旺宏列高出。",
    },
  ],
  stocks: [
    {
      code: "2317",
      name: "鴻海",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "核心輪漲",
      note: "鴻海在最近 3 支影片都留在輪漲名單裡，而且仍是大型權值裡最穩的一檔，這輪主欄目首選還是以它為主。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "布林首選", type: "positive" },
      ],
    },
    {
      code: "2472",
      name: "立隆電",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "中段補漲",
      note: "立隆電最近 3 支影片都還在輪漲區，代表電源與被動元件支線有延續；但它屬中段補漲，節奏比鴻海快。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "封測輪動",
      note: "矽格是最近 3 支影片都還留在名單裡的封測股，輪動延續性明確，但位置已高，較適合看量價延續。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "封測輪動", type: "positive" },
        { text: "偏熱觀察", type: "negative" },
      ],
    },
    {
      code: "3088",
      name: "艾訊",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "工業電腦",
      note: "艾訊最近 3 支影片都被留下來，表示工業電腦方向已經從新題材變成有延續性的輪動支線。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "工業電腦", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "線纜補漲",
      note: "萬泰科三支影片都在，代表線纜補漲這條線還沒退；因為屬 OTC，盤中同步仍會慢一步。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "6274",
      name: "台燿",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "PCB 輪漲",
      note: "台燿在最近 3 支影片都還有位置，代表高速傳輸與 PCB 並沒有退出，只是從第一排主流變成跟著輪漲節奏走。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "3017",
      name: "奇鋐",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "散熱主流",
      note: "奇鋐重新回到最近 3 支影片共通名單，代表散熱主流還在，只是位置偏高，操作上更像續強觀察。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "位置偏高", type: "negative" },
      ],
    },
    {
      code: "8210",
      name: "勤誠",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "機殼主流",
      note: "勤誠也重新進到最近 3 支影片共通名單，表示 AI 機殼與伺服器主流仍有續航，不過技術面偏熱，先看量價。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "2327",
      name: "國巨",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "被動元件",
      note: "國巨最近 3 支影片都在輪漲名單裡，代表被動元件還有位置；屬於可留意但不是最前排切入點的延續股。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "周強月中性", type: "positive" },
      ],
    },
    {
      code: "2382",
      name: "廣達",
      bias: "3日共通",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "AI 伺服器",
      note: "廣達也回到最近 3 支影片共通名單，代表大型 AI 伺服器股沒有完全退潮，但位置已經接近熱區。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "接近熱區", type: "negative" },
      ],
    },
    {
      code: "2344",
      name: "華邦電",
      bias: "3日當沖",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "當沖觀察",
      note: "華邦電最近 3 支影片都有出現，但定位幾乎都偏當沖或快節奏，不適合放進主多首選。",
      signals: [
        { text: "3日當沖", type: "negative" },
        { text: "快節奏", type: "negative" },
      ],
    },
    {
      code: "2303",
      name: "聯電",
      bias: "角色切換",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "多空分歧",
      note: "聯電最近 3 支影片都有出現，但 4/29、4/30 是當沖，5/4 則改列輪漲，屬於語氣切換股，盤前要特別看量價再決定。",
      signals: [
        { text: "角色切換", type: "negative" },
        { text: "先看量價", type: "positive" },
      ],
    },
    {
      code: "2464",
      name: "盟立",
      bias: "3日高出",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "高出提醒",
      note: "盟立最近 3 支影片都在高出名單裡，這是典型的獲利調節訊號，不是盤前新切入首選。",
      signals: [
        { text: "3日高出", type: "negative" },
        { text: "非主攻", type: "negative" },
      ],
    },
    {
      code: "8046",
      name: "南電",
      bias: "3日續高出",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "高出提醒",
      note: "南電最近 3 支影片都維持高出或續高出語氣，這種股票比較適合當調節提醒，不是今天新進場優先股。",
      signals: [
        { text: "3日續高出", type: "negative" },
        { text: "調節提醒", type: "negative" },
      ],
    },
    {
      code: "3081",
      name: "聯亞",
      bias: "3日續高出",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "高出提醒",
      note: "聯亞最近 3 支影片都留在高出區，屬於已有漲幅後的調節提醒，和 3 日共通輪漲股完全不同。",
      signals: [
        { text: "3日續高出", type: "negative" },
        { text: "非主攻", type: "negative" },
      ],
    },
    {
      code: "3105",
      name: "穩懋",
      bias: "3日續高出",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "高出提醒",
      note: "穩懋在最近 3 支影片都偏高出或續高出，代表短線調節訊號連續存在，不列主攻名單。",
      signals: [
        { text: "3日續高出", type: "negative" },
        { text: "偏調節", type: "negative" },
      ],
    },
    {
      code: "2337",
      name: "旺宏",
      bias: "3日續高出",
      gap: "5/04、4/30、4/29",
      foreign: "最新3日交叉",
      volume: "高出提醒",
      note: "旺宏最近 3 支影片也都偏高出語氣，屬於舊題材的調節提醒，不是新一輪主攻股。",
      signals: [
        { text: "3日續高出", type: "negative" },
        { text: "舊題材調節", type: "negative" },
      ],
    },
    {
      code: "2301",
      name: "光寶科",
      bias: "2日連續",
      gap: "5/04、4/30",
      foreign: "最近2日交叉",
      volume: "電源輪動",
      note: "光寶科出現在 5/4 與 4/30 兩支影片，代表電源與零組件方向有兩日延續，但還不到 3 日共通層級。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "待續航確認", type: "negative" },
      ],
    },
    {
      code: "3023",
      name: "信邦",
      bias: "2日連續",
      gap: "5/04、4/30",
      foreign: "最近2日交叉",
      volume: "連接線觀察",
      note: "信邦在 5/4、4/30 兩支影片都出現，代表高階連接線仍有補漲想像，但還缺 4/29 的連續驗證。",
      signals: [
        { text: "2日連續", type: "positive" },
        { text: "待連續驗證", type: "negative" },
      ],
    },
  ],
  checklist: [
    "先看 3 日共通輪漲股是否一起轉強：鴻海、立隆電、矽格、艾訊、萬泰科、台燿、奇鋐、勤誠、國巨、廣達。",
    "把 3 日共通輪漲、3 日當沖、3 日高出拆開看；華邦電是 3 日當沖，盟立、南電、聯亞、穩懋、旺宏則是 3 日高出。",
    "聯電要獨立看待：它最近 3 支影片都有出現，但語氣從當沖切到輪漲，開盤要先確認量價，不要直接套用舊分類。",
    "2 日連續股像光寶科、信邦可以列第二層觀察，等下一支影片是否續點，再決定要不要升格成核心。",
  ],
  risks: [
    {
      level: "high",
      title: "影片基準已更新到 2026/05/04、04/30、04/29",
      detail: "目前基準改用黃清照官方 /videos 頁最上方三支影片順序，最新影片已經是 2026 年 5 月 4 日，不再停在 4 月 30 日。",
    },
    {
      level: "medium",
      title: "這次又出現 3 日共通股，但角色更複雜",
      detail: "像鴻海、立隆電、矽格、艾訊、萬泰科、奇鋐、勤誠、國巨、廣達都能在最近 3 支影片找到；但聯電、華邦電這種雖然也重複出現，操作定位卻不同。",
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
    confidence: 67,
    takeaway: "最新 3 支影片重新出現一批 3 日共通輪漲股，代表市場不是單日亂轉，而是資金在同一群股票上反覆聚焦；但當沖股與高出股也同時偏多，盤勢節奏仍偏快。",
    transitions: [
      { label: "維持多頭輪動", value: "67%" },
      { label: "轉回趨勢多頭", value: "18%" },
      { label: "降回區間震盪", value: "15%" },
    ],
    drivers: [
      "最近 3 支影片重新出現多檔 3 日共通輪漲股",
      "高出股與當沖股都能獨立切開來看",
      "鴻海仍同時留在影片交集與布林首選裡",
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
    elements.syncStatus.textContent = `已同步 ${successCount} 檔上市股最新收盤價 ｜ ${currentTaipeiTimestamp()} ｜ 影片基準 2026/05/04、2026/04/30、2026/04/29`;
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
