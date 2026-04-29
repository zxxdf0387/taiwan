const appState = {
  liveQuotes: {},
  marketMood: {
    label: "影片偏多",
    summary: "4 月 29、28、27 日三支影片交叉後，核心重心集中在 AI 伺服器、連接線、PCB、網通與鴻海供應鏈輪動。",
    score: 84,
    openingPlan: "先看 3 日共通輪漲股",
  },
  headlines: [
    {
      tone: "positive",
      title: "最新影片：2026/04/29",
      summary: "4 月 29 日最新影片把盟立、直得列高出；華邦、聯電偏當沖；立隆電、矽格、艾訊、瑞儀、同欣電、啟碁、萬泰科、大中、鴻海列輪漲，貿聯-KY、智邦、奇鋐、緯穎、勤誠、台燿、國巨、廣達也在輪漲名單。",
    },
    {
      tone: "neutral",
      title: "前一支影片：2026/04/28",
      summary: "4 月 28 日影片延續旺宏、聯亞、穩懋、南電高出；智邦、奇鋐、勤誠、緯穎、貿聯-KY、致茂、台燿、國巨、廣達輪漲；華邦、聯電同樣列當沖，立隆電、矽格、光寶、力成、中美晶、同欣電、啟碁、萬泰科、大中、鴻海續列輪漲。",
    },
    {
      tone: "neutral",
      title: "再前一支影片：2026/04/27",
      summary: "4 月 27 日影片提到中美晶、大中、光寶、力成、鴻海、萬泰科、矽格、立隆電、同欣電、啟碁、尼克森輪漲；華邦、聯電當沖；全新、聯亞、穩懋高出；緯穎、智邦、勤誠、雙鴻、貿聯-KY、健鼎、台燿、國巨、廣達輪漲。",
    },
  ],
  stocks: [
    {
      code: "2317",
      name: "鴻海",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "鴻海連續三支影片都被列進輪漲名單，而且周線與月線布林都還沒過熱，是這輪最穩的首選觀察股。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "布林首選", type: "positive" },
      ],
    },
    {
      code: "8210",
      name: "勤誠",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "勤誠三支影片都在主軸裡，代表機殼伺服器主流沒有退潮；只是技術面已偏熱，較適合等拉回或強勢續抱。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "3665",
      name: "貿聯-KY",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "貿聯-KY 連續三支影片都還在輪漲核心名單裡，代表高價連接線主流持續，但短線熱度已高，不適合開盤追價。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "高檔節奏", type: "negative" },
      ],
    },
    {
      code: "6274",
      name: "台燿",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "台燿連續三支影片都出現，是 PCB 與高速傳輸的核心交集股；不過屬 OTC，這版同步按鈕不會即時更新收盤。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "OTC 觀察", type: "positive" },
      ],
    },
    {
      code: "2345",
      name: "智邦",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "智邦三支影片都在輪漲名單裡，代表網通主流仍有延續，但周月布林都已經貼近上軌，節奏上更適合看強不追高。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "高檔輪動", type: "negative" },
      ],
    },
    {
      code: "6669",
      name: "緯穎",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "緯穎是這三支影片裡最穩定的高價 AI 伺服器指標股之一，強勢明確，但技術面已偏熱，更像續抱觀察。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "續抱觀察", type: "positive" },
      ],
    },
    {
      code: "2327",
      name: "國巨",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "國巨三支影片都在，代表被動元件也還留在輪動範圍內；周線強、月線中性，屬於可留意但不是最優先切入。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "周強月中性", type: "positive" },
      ],
    },
    {
      code: "2382",
      name: "廣達",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "核心輪漲",
      note: "廣達也是最近三支影片的共通股，代表 AI 伺服器主流沒有缺席；但目前已接近熱區，盤前列觀察比直接追價更合理。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "接近熱區", type: "negative" },
      ],
    },
    {
      code: "2472",
      name: "立隆電",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "立隆電連續三支影片都還在輪漲區，屬於比伺服器主流更中段的補漲觀察股。",
      signals: [
        { text: "核心共通", type: "positive" },
        { text: "中段輪動", type: "positive" },
      ],
    },
    {
      code: "6257",
      name: "矽格",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "矽格三支影片都反覆出現，位置偏封測與中價位輪動，屬於輪漲觀察股，不是今天最強主攻。",
      signals: [
        { text: "封測輪動", type: "positive" },
        { text: "中價位觀察", type: "positive" },
      ],
    },
    {
      code: "6271",
      name: "同欣電",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "同欣電連續三支影片都在輪漲區，屬於相對次主流，但一致性不差，適合看是否補量接棒。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "補量接棒", type: "positive" },
      ],
    },
    {
      code: "6285",
      name: "啟碁",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "啟碁三支影片都在，代表網通與通訊模組方向還留在輪動範圍內。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "網通輪動", type: "positive" },
      ],
    },
    {
      code: "6190",
      name: "萬泰科",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "萬泰科也在最近三支影片裡連續出現，偏向線纜與次主流補漲角色。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "補漲觀察", type: "positive" },
      ],
    },
    {
      code: "6435",
      name: "大中",
      bias: "3日共通",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "第二輪輪漲",
      note: "大中是連續三支影片都留在輪漲區的中價位標的，屬於節奏股而不是第一排龍頭。",
      signals: [
        { text: "3日共通", type: "positive" },
        { text: "節奏股", type: "positive" },
      ],
    },
    {
      code: "3017",
      name: "奇鋐",
      bias: "2日連續",
      gap: "4/29、4/28",
      foreign: "2日交叉比對",
      volume: "主流延續",
      note: "奇鋐是最近兩支影片連續出現的主流核心股，但最新兩天都已在高位區，盤前不宜盲追。",
      signals: [
        { text: "主流延續", type: "positive" },
        { text: "偏熱不追", type: "negative" },
      ],
    },
    {
      code: "2303",
      name: "聯電",
      bias: "3日當沖",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "當沖觀察",
      note: "聯電連續三支影片都被明確放在當沖，不是中線輪漲名單，操作屬性和鴻海、勤誠完全不同。",
      signals: [
        { text: "3日當沖", type: "negative" },
        { text: "不算主多", type: "negative" },
      ],
    },
    {
      code: "2344",
      name: "華邦電",
      bias: "3日當沖",
      gap: "4/29、4/28、4/27",
      foreign: "3日交叉比對",
      volume: "當沖觀察",
      note: "華邦電和聯電一樣，這三支影片都是當沖定位，適合快節奏處理，不適合直接放進主多首選。",
      signals: [
        { text: "3日當沖", type: "negative" },
        { text: "快節奏", type: "negative" },
      ],
    },
    {
      code: "8046",
      name: "南電",
      bias: "2日高出",
      gap: "4/29、4/28",
      foreign: "2日交叉比對",
      volume: "高出提醒",
      note: "南電最近兩支影片都被列高出，這種語氣代表偏獲利調節，不適合當成今天新進場首選。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "2日連續", type: "positive" },
      ],
    },
    {
      code: "3105",
      name: "穩懋",
      bias: "2日高出",
      gap: "4/29、4/28",
      foreign: "2日交叉比對",
      volume: "高出提醒",
      note: "穩懋連續兩天都列高出，代表偏調節或短線賣點提醒，不在今天主攻名單裡。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "偏調節", type: "negative" },
      ],
    },
    {
      code: "3081",
      name: "聯亞",
      bias: "2日高出",
      gap: "4/29、4/28",
      foreign: "2日交叉比對",
      volume: "高出提醒",
      note: "聯亞最近兩支影片也是高出語氣，屬於已有漲幅後的調節提醒，和 3 日共通輪漲股不同。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "非主攻", type: "negative" },
      ],
    },
    {
      code: "2337",
      name: "旺宏",
      bias: "2日高出",
      gap: "4/29、4/28",
      foreign: "2日交叉比對",
      volume: "高出提醒",
      note: "旺宏在 4/29 和 4/28 都被列高出，所以更像短線調節提醒，不是今天要新增部位的名單。",
      signals: [
        { text: "高出提醒", type: "negative" },
        { text: "短線調節", type: "negative" },
      ],
    },
  ],
  checklist: [
    "先看 3 日共通輪漲股是否一起轉強：鴻海、勤誠、貿聯-KY、台燿、智邦、緯穎、國巨、廣達、立隆電、矽格、同欣電、啟碁、萬泰科、大中。",
    "把 3 日共通輪漲股和 3 日當沖股分開看；華邦電、聯電雖然連續出現，但定位一直都是當沖，不算主多首選。",
    "再看 2 日高出提醒：南電、穩懋、聯亞、旺宏；這些出現頻率高，但語氣是偏調節，不是新進場訊號。",
    "若鴻海、勤誠、貿聯-KY、智邦、廣達一開盤能同步帶量，代表這輪 3 日交集主流仍在延續。",
  ],
  risks: [
    {
      level: "high",
      title: "這次改以 YouTube /videos 頁面排序為主",
      detail: "目前基準是頻道影片列表最上方的 2026/04/29、2026/04/28、2026/04/27 三支影片，不再沿用外部索引站的落後日期。",
    },
    {
      level: "medium",
      title: "同一檔重複出現也要看語氣",
      detail: "像華邦電、聯電是連續三支影片都出現，但定位始終是當沖；南電、穩懋、聯亞、旺宏則是連兩天高出，不能和輪漲名單混在一起。",
    },
    {
      level: "medium",
      title: "OTC 同步仍會慢一步",
      detail: "這版同步按鈕可抓 TWSE 上市股最新收盤；像台燿、穩懋、聯亞等 OTC 股票，仍先沿用整理資料，不會隨按鈕即時更新。",
    },
  ],
  bollingerRankings: [
    {
      code: "2317",
      name: "鴻海",
      verdict: "今日首選",
      asOf: "截至 2026-04-29 收盤",
      summary: "用 TWSE 官方資料重算後，鴻海周線 %B 約 0.614、月線 %B 約 0.729，兩條週期都在中軌上方但還沒貼上軌，剛好也是最近 3 支影片共通輪漲股裡最舒服的切入型態。",
      signals: ["周線中軌上", "月線中軌上", "未貼上軌"],
    },
    {
      code: "8210",
      name: "勤誠",
      verdict: "強勢但偏熱",
      asOf: "截至 2026-04-29 收盤",
      summary: "周線 %B 約 1.009、月線 %B 約 0.948，已經很接近甚至略碰上軌，屬於強勢主流，但新部位不建議一開盤硬追。",
      signals: ["周線上軌外", "月線高檔", "不宜急追"],
    },
    {
      code: "2382",
      name: "廣達",
      verdict: "偏強接近熱區",
      asOf: "截至 2026-04-29 收盤",
      summary: "廣達周線 %B 約 0.951、月線 %B 約 1.020，型態還是強，但幾乎已經在上軌附近，操作上偏續抱與觀察，不是最甜的新進場點。",
      signals: ["周線近上軌", "月線偏熱", "不宜急追"],
    },
    {
      code: "6669",
      name: "緯穎",
      verdict: "強勢續抱觀察",
      asOf: "截至 2026-04-29 收盤",
      summary: "緯穎周線 %B 約 1.027、月線 %B 約 0.963，主升段趨勢很明確，但位置已高，較適合原本有持股的人續抱觀察。",
      signals: ["周線上軌外", "月線高檔", "偏續抱觀察"],
    },
    {
      code: "2327",
      name: "國巨",
      verdict: "周強月中性",
      asOf: "截至 2026-04-29 收盤",
      summary: "國巨周線 %B 約 0.990，短線很強；但月線 %B 約 0.374，代表中期位置還在修復，算是強中帶整理的觀察股。",
      signals: ["周線偏強", "月線修復", "可等量價確認"],
    },
    {
      code: "2303",
      name: "聯電",
      verdict: "當沖偏熱",
      asOf: "截至 2026-04-29 收盤",
      summary: "聯電周線 %B 約 0.965、月線 %B 約 1.219，技術面偏熱，而且影片定位又是 3 日當沖，所以比較像快節奏強股，不是今天主多首選。",
      signals: ["周線偏強", "月線過熱", "當沖看待"],
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
  searchInput: document.querySelector("#searchInput"),
  refreshButton: document.querySelector("#refreshButton"),
  navItems: [...document.querySelectorAll(".bottom-nav__item")],
  viewPanels: [...document.querySelectorAll(".view-panel")],
};

const listedCodes = new Set([
  "2317", "8210", "3665", "2345", "6669", "2327", "2382",
  "2472", "6257", "6271", "6285", "6190", "6435", "3017",
  "2303", "2344", "2337",
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
      summary: "3 日共通輪漲股若先表態，代表主流延續速度快",
      openingPlan: "強股等回測",
    },
    {
      label: "輪動加速",
      summary: "輪漲股與當沖股同時活躍，代表市場節奏偏快",
      openingPlan: "分批布局",
    },
    {
      label: "觀望偏多",
      summary: "若 3 日共通股沒量，先觀察不急追",
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
    elements.syncStatus.textContent = `已同步 ${successCount} 檔上市股最新收盤價 ｜ ${currentTaipeiTimestamp()} ｜ 影片基準 2026/04/29、2026/04/28、2026/04/27`;
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
  bindEvents();
  switchTab("overview");
  registerServiceWorker();
}

window.switchTab = switchTab;

init();
