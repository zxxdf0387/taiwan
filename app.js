const appState = {
  liveQuotes: {},
  updateMeta: {
    version: "2026.05.13.1",
    lastUpdated: "2026/05/13 09:00",
    lastAutomationSync: "2026/05/12 22:37",
    videoBasis: "2026/05/12、2026/05/11、2026/05/08",
  },
  marketMood: {
    label: "偏多快輪動",
    summary: "5 月 12、11、8 三支最新影片重新交叉後，富鼎、矽格、立隆、艾訊、萬泰科是最穩的 3 日共通輪漲股；但光寶在 5 月 12 日從前兩支的輪漲轉成當沖，聯電與華邦仍連三天偏當沖，代表盤勢沒有轉空，只是追價節奏更短。",
    score: 74,
    openingPlan: "先看3日共通，再避開角色切換",
  },
  headlines: [
    {
      tone: "positive",
      title: "最新影片：2026/05/12",
      summary: "5 月 12 日最新影片把康普、啟碁、日電貿、艾訊、萬泰科、矽格、立隆、富鼎、良維列輪漲，光寶科、群創、華邦電、聯電列當沖，明顯轉向中段電子與IC設計補漲。",
    },
    {
      tone: "neutral",
      title: "前一支影片：2026/05/11",
      summary: "5 月 11 日影片仍保留萬泰科、立隆、光寶科、艾訊、矽格、同欣電、致新、富鼎、良維、中美晶在輪漲區，聯電、華邦電當沖，群創、直得改列高出。",
    },
    {
      tone: "neutral",
      title: "再前一支影片：2026/05/08",
      summary: "5 月 8 日影片則是萬泰科、立隆、光寶科、艾訊、矽格、同欣電、緯創、富鼎、義隆輪漲，群創、華邦電、啟碁、聯電當沖，提供這次交叉比對的底稿。",
    },
  ],
  stocks: [
    {
      code: "8261",
      name: "富鼎",
      bias: "3日共通",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "IC 設計",
      note: "富鼎是這次最新三支影片都還在輪漲名單裡的少數上市股之一，用 TWSE 官方日資料重算後，20 日 %B 約 0.844、40 日 %B 約 0.932，位階比立隆、光寶舒服，這版改列布林首選。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "布林首選", type: "positive" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      bias: "3日共通",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "封測輪動",
      note: "矽格連續三支最新影片都還在輪漲主線，TWSE 官方日資料顯示 20 日 %B 約 0.855、40 日 %B 約 0.921，強勢度還在，但舒服度略低於富鼎。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "封測續強", type: "positive" },
      ],
    },
    {
      code: "2472",
      name: "立隆電",
      bias: "3日共通",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "被動元件補漲",
      note: "立隆電也是三支影片共通輪漲股，但 5 月 12 日收盤後用 TWSE 官方資料重算，20 日 %B 約 1.037、40 日 %B 約 1.004，已經貼近上軌，定位更像強勢續抱觀察。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "位置偏熱", type: "negative" },
      ],
    },
    {
      code: "3088",
      name: "艾訊",
      bias: "3日共通",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "工業電腦",
      note: "艾訊三支最新影片都還留在輪漲區，代表工業電腦支線沒斷；但它屬 OTC，這版仍沿用整理資料，不會跟同步按鈕一起更新。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      bias: "3日共通",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "線纜補漲",
      note: "萬泰科是這輪最新三支影片最穩的 OTC 共通股之一，代表線纜補漲線沒有退；盤中同步仍會慢一步，先看它是否能繼續被下一支影片續點。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "6271",
      name: "同欣電",
      bias: "2日共通",
      gap: "5/11、5/08",
      foreign: "最近2日交叉",
      volume: "感測封裝",
      note: "同欣電出現在 5 月 11 日與 5 月 8 日兩支影片，用 TWSE 官方日資料看 20 日 %B 約 0.658、40 日 %B 約 0.765，位階不擠，但 5 月 12 日沒有續點，先留第二層觀察。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "位階舒服", type: "positive" },
      ],
    },
    {
      code: "2301",
      name: "光寶科",
      bias: "角色切換",
      gap: "5/12、5/11、5/08",
      foreign: "輪漲轉當沖",
      volume: "電源輪動",
      note: "光寶科在 5 月 11 日、5 月 8 日還是輪漲，但 5 月 12 日改列當沖；而且 TWSE 官方資料顯示 20 日 %B 約 1.172、40 日 %B 約 1.368，位階已偏熱，不能再直接當核心主攻。",
      signals: [
        { text: "角色切換", type: "negative" },
        { text: "貼近上軌", type: "negative" },
      ],
    },
    {
      code: "2303",
      name: "聯電",
      bias: "3日當沖",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "晶圓代工",
      note: "聯電連續三支影片都有被點名，但定位都偏當沖，TWSE 官方資料算出的 20 日 %B 約 1.066、40 日 %B 約 1.180 也不低，屬快節奏風險股。",
      signals: [
        { text: "3日當沖", type: "negative" },
        { text: "位階偏熱", type: "negative" },
      ],
    },
    {
      code: "2344",
      name: "華邦電",
      bias: "3日當沖",
      gap: "5/12、5/11、5/08",
      foreign: "最新3日交叉",
      volume: "記憶體當沖",
      note: "華邦電和聯電一樣連續三支影片都出現，但都屬當沖或快節奏定位；TWSE 官方資料算出的 20 日 %B 約 1.086、40 日 %B 約 0.980，強勢歸強勢，不適合混進主攻輪漲名單。",
      signals: [
        { text: "3日當沖", type: "negative" },
        { text: "快節奏", type: "negative" },
      ],
    },
    {
      code: "6290",
      name: "良維",
      bias: "2日共通",
      gap: "5/12、5/11",
      foreign: "最近2日交叉",
      volume: "連接線補漲",
      note: "良維在 5 月 12 日與 5 月 11 日都留在輪漲區，辨識度已高於康普、日電貿這種單日新增股；這版先沿用整理資料觀察，不放進同步首批。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "等待續點", type: "negative" },
      ],
    },
    {
      code: "3090",
      name: "日電貿",
      bias: "最新新增",
      gap: "5/12",
      foreign: "最新影片新點名",
      volume: "通路補漲",
      note: "日電貿是 5 月 12 日最新影片新增股，用 TWSE 官方日資料看 20 日 %B 約 1.015、40 日 %B 約 1.129，屬於剛被點名但位階已不低的新加入股。",
      signals: [
        { text: "最新新增", type: "positive" },
        { text: "位階偏熱", type: "negative" },
      ],
    },
    {
      code: "3481",
      name: "群創",
      bias: "角色切換",
      gap: "5/12、5/11、5/08",
      foreign: "當沖與高出切換",
      volume: "面板快節奏",
      note: "群創在 5 月 8 日與 5 月 12 日被列當沖，中間 5 月 11 日又轉成高出；TWSE 官方資料顯示 20 日 %B 約 1.223、40 日 %B 約 1.448，這種又熱又切換的股不適合當主攻。",
      signals: [
        { text: "角色切換", type: "negative" },
        { text: "非主攻", type: "negative" },
      ],
    },
    {
      code: "3231",
      name: "緯創",
      bias: "退回單日",
      gap: "5/08",
      foreign: "前一版主軸",
      volume: "AI 伺服器",
      note: "緯創雖然 5 月 8 日那版曾是最舒服的上市股，TWSE 官方資料目前 20 日 %B 約 0.558、40 日 %B 約 0.740 也不差；但它沒出現在 5 月 11 日與 5 月 12 日，辨識度先退回單日觀察。",
      signals: [
        { text: "單日觀察", type: "negative" },
        { text: "位階尚可", type: "positive" },
      ],
    },
  ],
  checklist: [
    "先看最新三支影片共同留下來的 3 日共通股：富鼎、矽格、立隆、艾訊、萬泰科，這批才是現在第一層。",
    "把 2 日共通股拆開看：同欣電、良維辨識度高於單日新增，但仍要等下一支影片續點才能升格。",
    "光寶科、群創屬角色切換股；聯電、華邦電則是連續當沖，這些都不能直接當主攻。",
    "5 月 12 日新增的日電貿、康普先當補漲觀察，不要因為最新一支才剛點名就直接拉成核心。",
  ],
  risks: [
    {
      level: "high",
      title: "影片基準已更新到 2026/05/12、05/11、05/08",
      detail: "目前基準改用黃清照老師官方頁面排序，最新三支已經改成 2026 年 5 月 12 日、5 月 11 日、5 月 8 日，不再是 5 月 8 日、5 月 7 日、5 月 6 日。",
    },
    {
      level: "medium",
      title: "3日共通股有延續，但光寶已經轉成當沖",
      detail: "富鼎、矽格、立隆、艾訊、萬泰科是最新三支影片的 3 日共通輪漲股；但光寶從前兩支輪漲變成 5 月 12 日當沖，代表追價風險上升。",
    },
    {
      level: "medium",
      title: "OTC 與非同步股仍會慢一步",
      detail: "同步按鈕仍以 TWSE 上市股官方資料為主；像艾訊、萬泰科、康普、良維等整理股，先沿用整理資料，不會隨按鈕即時更新。",
    },
  ],
  bollingerRankings: [
    {
      code: "8261",
      name: "富鼎",
      verdict: "今日首選",
      asOf: "截至 2026-05-12 收盤",
      summary: "用 TWSE 官方日資料重算後，富鼎 20 日 %B 約 0.844、40 日 %B 約 0.932；它同時是 5 月 12、11、8 三支影片共通股，位置又比立隆、光寶、聯電舒服，這版先排第一。",
      signals: ["3日共通", "20日中上軌", "40日未過熱"],
    },
    {
      code: "6257",
      name: "矽格",
      verdict: "3日共通穩定",
      asOf: "截至 2026-05-12 收盤",
      summary: "矽格也是最新三支影片都保留的輪漲股，TWSE 官方日資料顯示 20 日 %B 約 0.855、40 日 %B 約 0.921，技術面仍強，舒服度只略低於富鼎。",
      signals: ["3日共通", "封測續強", "位階仍可"],
    },
    {
      code: "6271",
      name: "同欣電",
      verdict: "2日共通位階佳",
      asOf: "截至 2026-05-12 收盤",
      summary: "同欣電只出現在 5 月 11 日與 5 月 8 日兩支影片，但 TWSE 官方日資料顯示 20 日 %B 約 0.658、40 日 %B 約 0.765，位階明顯比多數主線股舒服。",
      signals: ["2日共通", "位階不擠", "待續點"],
    },
    {
      code: "2472",
      name: "立隆電",
      verdict: "強勢但過熱",
      asOf: "截至 2026-05-12 收盤",
      summary: "立隆電也是最新三支影片共通股，但 TWSE 官方日資料顯示 20 日 %B 約 1.037、40 日 %B 約 1.004，已經偏向上軌區，操作上更像強勢續抱。",
      signals: ["3日共通", "上軌附近", "不宜急追"],
    },
    {
      code: "2301",
      name: "光寶科",
      verdict: "角色切換過熱",
      asOf: "截至 2026-05-12 收盤",
      summary: "光寶科 20 日 %B 約 1.172、40 日 %B 約 1.368，不只位置過熱，還從前兩支輪漲變成 5 月 12 日當沖，是這版最明顯的降級提醒。",
      signals: ["輪漲轉當沖", "40日過熱", "先避追價"],
    },
  ],
  markovModel: {
    currentState: "偏多快輪動",
    confidence: 66,
    takeaway: "最新三支影片仍能交叉出一組清楚的共通輪漲股，代表市場沒有轉空；但光寶角色切換、聯電與華邦持續當沖，表示資金仍用短打方式在高低切換。",
    transitions: [
      { label: "維持快輪動偏多", value: "66%" },
      { label: "轉回趨勢多頭", value: "19%" },
      { label: "降回區間震盪", value: "15%" },
    ],
    drivers: [
      "5 月 12、11、8 連續點名富鼎、矽格、立隆、艾訊、萬泰科",
      "光寶在 5 月 12 日從輪漲改列當沖，追價風險上升",
      "同欣電、良維成為第二層共通股，日電貿、康普則只是最新單日新增",
    ],
  },
  monteCarloScenarios: [
    {
      code: "8261",
      name: "富鼎",
      verdict: "模型最平衡",
      range: "20 日模擬區間 122 - 183",
      stopLoss: "3% 停損命中率 54%",
      takeProfit: "8% 停利命中率 79%",
      drawdown: "模擬最大回撤中位數 9.6%",
      note: "富鼎同時是最新 3 日共通股與布林首選，模擬裡的報酬與回撤平衡度優於立隆與光寶，最適合當這版風險基準股。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "風險最平衡", type: "positive" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      verdict: "續強機率高",
      range: "20 日模擬區間 225 - 319",
      stopLoss: "3% 停損命中率 26%",
      takeProfit: "8% 停利命中率 94%",
      drawdown: "模擬最大回撤中位數 6.0%",
      note: "矽格雖然位置已比富鼎高一點，但模擬路徑仍相當穩，若盤中量價續強，它是共通主線裡最容易延續的第二選擇。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "回撤較小", type: "positive" },
      ],
    },
    {
      code: "6271",
      name: "同欣電",
      verdict: "位階舒服待續點",
      range: "20 日模擬區間 172 - 238",
      stopLoss: "3% 停損命中率 48%",
      takeProfit: "8% 停利命中率 73%",
      drawdown: "模擬最大回撤中位數 7.9%",
      note: "同欣電不是 3 日共通股，但它的模擬區間和布林位置都比最新新增股乾淨，適合當第二層的接班觀察名單。",
      signals: [
        { text: "2日共通", type: "positive" },
        { text: "續點觀察", type: "positive" },
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
  "2301", "2303", "2317", "2327", "2337", "2344", "2345",
  "2360", "2382", "2449", "2455", "2458", "2464", "2472", "3017", "3023", "3044", "3231", "3481", "3665", "3706",
  "3090", "6669",
  "6176", "6239", "6257", "6271", "6285", "8046", "8210", "8261",
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
    elements.syncStatus.textContent = `已同步 ${successCount} 檔上市股最新收盤價 ｜ ${currentTaipeiTimestamp()} ｜ 影片基準 2026/05/12、2026/05/11、2026/05/08`;
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
