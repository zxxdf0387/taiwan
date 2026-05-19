import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const appPath = path.join(projectRoot, "app.js");
const sourceUrl = "https://www.youtube.com/@%E5%8F%B0%E8%82%A1%E6%88%B0%E7%A5%9E%E9%BB%83%E6%B8%85%E7%85%A7/videos";

const stockCatalog = {
  "上銀": { code: "2049", sector: "工具機 / 機器人", market: "TWSE" },
  "大立光": { code: "3008", sector: "光學權值", market: "TWSE" },
  "大銀微": { code: "4576", sector: "機器人 / 工具機", market: "TPEx" },
  "中美晶": { code: "5483", sector: "半導體材料", market: "TPEx" },
  "日電貿": { code: "3090", sector: "被動元件通路", market: "TWSE" },
  "友達": { code: "2409", sector: "面板", market: "TWSE" },
  "台燿": { code: "6274", sector: "CCL / PCB", market: "TPEx" },
  "立隆": { code: "2472", sector: "被動元件", market: "TWSE" },
  "全新": { code: "2455", sector: "光通訊", market: "TWSE" },
  "光寶科": { code: "2301", sector: "電源 / 電子權值", market: "TWSE" },
  "光寶": { code: "2301", sector: "電源 / 電子權值", market: "TWSE" },
  "艾訊": { code: "3088", sector: "工業電腦", market: "TPEx" },
  "尖點": { code: "8021", sector: "PCB / 鑽針", market: "TWSE" },
  "矽格": { code: "6257", sector: "封測", market: "TWSE" },
  "良維": { code: "6290", sector: "線材 / AI 電源", market: "TPEx" },
  "京元電": { code: "2449", sector: "封測", market: "TWSE" },
  "旺宏": { code: "2337", sector: "記憶體", market: "TWSE" },
  "南亞科": { code: "2408", sector: "DRAM", market: "TWSE" },
  "南電": { code: "8046", sector: "ABF", market: "TWSE" },
  "哈默": { code: "2236", sector: "汽車零組件", market: "TWSE" },
  "啟碁": { code: "6285", sector: "網通", market: "TWSE" },
  "國巨": { code: "2327", sector: "被動元件", market: "TWSE" },
  "景碩": { code: "3189", sector: "ABF / IC 載板", market: "TWSE" },
  "健鼎": { code: "3044", sector: "PCB", market: "TWSE" },
  "致茂": { code: "2360", sector: "測試設備", market: "TWSE" },
  "富鼎": { code: "8261", sector: "MOSFET", market: "TWSE" },
  "敬鵬": { code: "2355", sector: "PCB / 車用", market: "TWSE" },
  "康普": { code: "4739", sector: "電池材料", market: "TPEx" },
  "技嘉": { code: "2376", sector: "AI 伺服器 / 顯卡", market: "TWSE" },
  "旺玖": { code: "6233", sector: "IC 設計", market: "TPEx" },
  "朋億": { code: "6613", sector: "廠務工程", market: "TWSE" },
  "東元": { code: "1504", sector: "機電 / 重電", market: "TWSE" },
  "神達": { code: "3706", sector: "伺服器 / 車電", market: "TWSE" },
  "致新": { code: "8081", sector: "IC 設計", market: "TWSE" },
  "華通": { code: "2313", sector: "PCB / 衛星", market: "TWSE" },
  "華邦": { code: "2344", sector: "記憶體", market: "TWSE" },
  "頎邦": { code: "6147", sector: "驅動 IC 封測", market: "TWSE" },
  "超豐": { code: "2441", sector: "封測", market: "TWSE" },
  "萬泰科": { code: "6190", sector: "線纜補漲", market: "TPEx" },
  "盟立": { code: "2464", sector: "自動化 / 機器人", market: "TWSE" },
  "所羅門": { code: "2359", sector: "機器人 / 視覺", market: "TWSE" },
  "穩懋": { code: "3105", sector: "砷化鎵 / 通訊", market: "TPEx" },
  "廣達": { code: "2382", sector: "AI 伺服器", market: "TWSE" },
  "聯亞": { code: "3081", sector: "光通訊 / CPO", market: "TPEx" },
  "金像電": { code: "2368", sector: "PCB", market: "TWSE" },
  "聯均": { code: "3450", sector: "光通訊", market: "TWSE" },
  "聯鈞": { code: "3450", sector: "光通訊", market: "TWSE" },
  "聯電": { code: "2303", sector: "晶圓代工", market: "TWSE" },
  "勤誠": { code: "8210", sector: "AI 機殼", market: "TWSE" },
  "奇鋐": { code: "3017", sector: "AI 散熱 / 伺服器", market: "TWSE" },
  "群創": { code: "3481", sector: "面板", market: "TWSE" },
  "貿聯": { code: "3665", sector: "高速連接 / AI 線束", market: "TWSE" },
  "萬海": { code: "2615", sector: "航運", market: "TWSE" },
  "萬潤": { code: "6187", sector: "半導體設備", market: "TPEx" },
  "義隆": { code: "2458", sector: "IC 設計", market: "TWSE" },
  "誠美材": { code: "4960", sector: "光學材料", market: "TWSE" },
  "豪勉": { code: "6218", sector: "通訊設備", market: "TPEx" },
  "智邦": { code: "2345", sector: "網通 / 交換器", market: "TWSE" },
  "新漢": { code: "8234", sector: "工業電腦", market: "TPEx" },
  "新盛力": { code: "4931", sector: "電池模組", market: "TWSE" },
  "新日興": { code: "3376", sector: "軸承 / 鉸鏈", market: "TWSE" },
  "鼎炫-KY": { code: "8499", sector: "電子材料", market: "TWSE" },
  "勤凱": { code: "4760", sector: "材料", market: "TPEx" },
  "尼克森": { code: "3317", sector: "被動元件", market: "TPEx" },
  "力成": { code: "6239", sector: "封測", market: "TWSE" },
  "同欣電": { code: "6271", sector: "感測 / 封測", market: "TWSE" },
  "信昌電": { code: "6173", sector: "被動元件", market: "TPEx" },
  "信邦": { code: "3023", sector: "連接線組", market: "TWSE" },
  "直得": { code: "1597", sector: "自動化 / 線性滑軌", market: "TPEx" },
  "鈊象": { code: "3293", sector: "遊戲", market: "TPEx" },
  "鴻海": { code: "2317", sector: "電子權值 / AI 伺服器", market: "TWSE" },
  "麗臺": { code: "2465", sector: "顯卡 / AI", market: "TWSE" },
  "緯創": { code: "3231", sector: "AI PC / 伺服器", market: "TWSE" },
};

function formatDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}/${map.month}/${map.day}`;
}

function formatDateTime(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}/${map.month}/${map.day} ${map.hour}:${map.minute}`;
}

function versionStamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}.${map.month}.${map.day}.${map.hour}${map.minute}`;
}

function unique(values) {
  return [...new Set(values)];
}

function normalizeDate(raw) {
  const match = raw.trim().match(/^(\d{3,4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!match) {
    return raw.trim();
  }
  let [, year, month, day] = match;
  if (year.length === 3) {
    year = String(Number(year) + 1911);
  }
  return `${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
}

function parseStockNames(text) {
  return text
    .split("、")
    .map((name) => name.trim().replace(/^[【〖].*?[】〗]/, ""))
    .filter(Boolean)
    .map((name) => name.replace(/[　\s]/g, ""))
    .filter(Boolean);
}

function parseVideoLine(line) {
  const normalizedLine = line.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
  const dateMatch = normalizedLine.match(/^(\d{3,4}\/\d{1,2}\/\d{1,2})\s*(.+)$/);
  if (!dateMatch) {
    return null;
  }

  const date = normalizeDate(dateMatch[1]);
  const rawBody = dateMatch[2].replace(/^[〖【].*?[〗】]/, "").trim();
  const cleanedBody = rawBody.replace(/。/g, "，").replace(/\s+/g, "");
  const segments = cleanedBody.split("，").map((segment) => segment.trim()).filter(Boolean);
  const categories = { high: [], dayTrade: [], wheel: [] };

  for (const segment of segments) {
    if (segment.endsWith("高出")) {
      categories.high.push(...parseStockNames(segment.slice(0, -2)));
    } else if (segment.endsWith("高賣")) {
      categories.high.push(...parseStockNames(segment.slice(0, -2)));
    } else if (segment.endsWith("出")) {
      categories.high.push(...parseStockNames(segment.slice(0, -1)));
    } else if (segment.endsWith("當沖")) {
      categories.dayTrade.push(...parseStockNames(segment.slice(0, -2)));
    } else if (segment.endsWith("輪漲")) {
      categories.wheel.push(...parseStockNames(segment.slice(0, -2)));
    } else if (segment.endsWith("低估輪漲")) {
      categories.wheel.push(...parseStockNames(segment.slice(0, -4)));
    } else if (segment.endsWith("良性輪漲")) {
      categories.wheel.push(...parseStockNames(segment.slice(0, -4)));
    }
  }

  return {
    date,
    raw: rawBody,
    categories: {
      high: unique(categories.high),
      dayTrade: unique(categories.dayTrade),
      wheel: unique(categories.wheel),
    },
  };
}

async function fetchTeacherVideos() {
  const response = await fetch(sourceUrl, {
    headers: {
      "user-agent": "Mozilla/5.0 MorningRadar/1.0",
      "cache-control": "no-cache",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch teacher page: HTTP ${response.status}`);
  }

  const html = await response.text();
  const regex = /watchEndpoint\":\{\"videoId\":\"([A-Za-z0-9_-]{11})\"[\s\S]{0,2600}?lockupMetadataViewModel\":\{\"title\":\{\"content\":\"([^\"]+)\"\}/g;
  const seen = new Set();
  const videos = [];

  for (const match of html.matchAll(regex)) {
    const [, videoId, title] = match;
    if (seen.has(videoId)) continue;
    seen.add(videoId);

    const parsed = parseVideoLine(title);
    if (!parsed) continue;
    videos.push({
      ...parsed,
      videoId,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });

    if (videos.length >= 3) break;
  }

  return videos;
}

function buildStats(videos) {
  const stats = new Map();

  for (const video of videos) {
    for (const [category, names] of Object.entries(video.categories)) {
      for (const name of names) {
        if (!stats.has(name)) {
          stats.set(name, {
            name,
            dates: [],
            wheelDates: [],
            highDates: [],
            dayDates: [],
          });
        }
        const entry = stats.get(name);
        entry.dates.push(video.date);
        if (category === "wheel") entry.wheelDates.push(video.date);
        if (category === "high") entry.highDates.push(video.date);
        if (category === "dayTrade") entry.dayDates.push(video.date);
      }
    }
  }

  return stats;
}

function previousMonthSeed(offset) {
  const now = new Date();
  const taipei = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Taipei" }));
  taipei.setDate(1);
  taipei.setMonth(taipei.getMonth() - offset);
  const year = taipei.getFullYear();
  const month = String(taipei.getMonth() + 1).padStart(2, "0");
  return `${year}${month}01`;
}

async function fetchTwseCloses(code) {
  const closes = [];
  for (let offset = 0; offset < 4; offset += 1) {
    const monthSeed = previousMonthSeed(offset);
    const url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${monthSeed}&stockNo=${code}`;
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 MorningRadar/1.0",
        "cache-control": "no-cache",
      },
    });
    if (!response.ok) {
      continue;
    }
    const json = await response.json();
    if (json.stat !== "OK" || !Array.isArray(json.data)) {
      continue;
    }
    for (const row of json.data) {
      const close = Number(String(row[6]).replace(/,/g, ""));
      if (Number.isFinite(close)) {
        closes.push({
          date: row[0],
          close,
        });
      }
    }
  }
  return closes;
}

function computeBollinger(closes, windowSize) {
  if (!Array.isArray(closes) || closes.length < windowSize) {
    return null;
  }
  const recent = closes.slice(-windowSize).map((item) => item.close);
  const mean = recent.reduce((sum, value) => sum + value, 0) / windowSize;
  const variance = recent.reduce((sum, value) => sum + ((value - mean) ** 2), 0) / windowSize;
  const stdDev = Math.sqrt(variance);
  const upper = mean + (2 * stdDev);
  const lower = mean - (2 * stdDev);
  const lastClose = recent.at(-1);
  const percentB = upper === lower ? 0.5 : (lastClose - lower) / (upper - lower);
  return {
    close: lastClose,
    mean,
    upper,
    lower,
    percentB,
  };
}

function monteCarloSummary(closes) {
  if (!Array.isArray(closes) || closes.length < 25) {
    return null;
  }

  const dailyReturns = [];
  for (let index = 1; index < closes.length; index += 1) {
    dailyReturns.push(Math.log(closes[index].close / closes[index - 1].close));
  }

  const sample = dailyReturns.slice(-60);
  const mean = sample.reduce((sum, value) => sum + value, 0) / sample.length;
  const variance = sample.reduce((sum, value) => sum + ((value - mean) ** 2), 0) / sample.length;
  const sigma = Math.sqrt(variance);
  const lastClose = closes.at(-1).close;
  const horizon = 20;
  const paths = 300;
  const ends = [];
  let stopLossHits = 0;
  let takeProfitHits = 0;
  const drawdowns = [];

  for (let pathIndex = 0; pathIndex < paths; pathIndex += 1) {
    let price = lastClose;
    let peak = price;
    let maxDrawdown = 0;
    let stopHit = false;
    let takeHit = false;

    for (let day = 0; day < horizon; day += 1) {
      const shock = Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random());
      price *= Math.exp(mean + (sigma * shock));
      if (price > peak) peak = price;
      const drawdown = (peak - price) / peak;
      if (drawdown > maxDrawdown) maxDrawdown = drawdown;
      if (price <= lastClose * 0.97) stopHit = true;
      if (price >= lastClose * 1.08) takeHit = true;
    }

    if (stopHit) stopLossHits += 1;
    if (takeHit) takeProfitHits += 1;
    drawdowns.push(maxDrawdown);
    ends.push(price);
  }

  ends.sort((left, right) => left - right);
  drawdowns.sort((left, right) => left - right);
  const low = ends[Math.floor(paths * 0.2)];
  const high = ends[Math.floor(paths * 0.8)];
  const medianDrawdown = drawdowns[Math.floor(paths * 0.5)];

  return {
    range: `20 日模擬區間 ${Math.round(low)} - ${Math.round(high)}`,
    stopLoss: `3% 停損命中率 ${Math.round((stopLossHits / paths) * 100)}%`,
    takeProfit: `8% 停利命中率 ${Math.round((takeProfitHits / paths) * 100)}%`,
    drawdown: `模擬最大回撤中位數 ${(medianDrawdown * 100).toFixed(1)}%`,
  };
}

function scoreBollinger(metric20, metric40, repeatWeight) {
  if (!metric20 || !metric40) {
    return -999;
  }
  let score = 100 + repeatWeight;
  score -= Math.abs(metric20.percentB - 0.55) * 55;
  score -= Math.abs(metric40.percentB - 0.68) * 35;
  if (metric20.percentB > 1) score -= 18;
  if (metric40.percentB > 1.08) score -= 12;
  if (metric20.percentB < 0) score -= 6;
  return score;
}

function sentimentTone(video, index) {
  if (index === 0) {
    return "positive";
  }
  return video.categories.wheel.length >= video.categories.dayTrade.length ? "neutral" : "warning";
}

function describeVideo(video, index) {
  const wheelText = video.categories.wheel.length ? `${video.categories.wheel.join("、")}列輪漲` : "";
  const highText = video.categories.high.length ? `${video.categories.high.join("、")}列高出` : "";
  const dayText = video.categories.dayTrade.length ? `${video.categories.dayTrade.join("、")}列當沖` : "";
  const pieces = [wheelText, highText, dayText].filter(Boolean).join("，");
  const prefix = index === 0 ? "最新影片" : index === 1 ? "前一支影片" : "再前一支影片";
  return {
    tone: sentimentTone(video, index),
    title: `${prefix}：${video.date}`,
    summary: `${video.date} 這支影片把 ${pieces || video.raw}。`,
  };
}

function topNames(names, fallbackText) {
  return names.length ? names.join("、") : fallbackText;
}

function roleLabel(entry, latestDate) {
  if (entry.wheelDates.length >= 2) return `${entry.wheelDates.length}日共通`;
  if (entry.highDates.length >= 2) return "高出重複";
  if (entry.dayDates.length >= 2) return "重複當沖";
  if (entry.wheelDates.includes(latestDate)) return "最新輪漲";
  if (entry.highDates.includes(latestDate)) return "最新高出";
  if (entry.dayDates.includes(latestDate)) return "最新當沖";
  return "觀察";
}

function buildSignals(entry, metric20, metric40, latestDate) {
  const signals = [];
  if (entry.wheelDates.length >= 2) signals.push({ text: `${entry.wheelDates.length}日共通`, type: "positive" });
  if (entry.highDates.length >= 2) signals.push({ text: "高出重複", type: "negative" });
  if (entry.dayDates.length >= 2) signals.push({ text: "重複當沖", type: "negative" });
  if (!signals.length && entry.wheelDates.includes(latestDate)) signals.push({ text: "最新主線", type: "positive" });
  if (!signals.length && entry.highDates.includes(latestDate)) signals.push({ text: "最新高出", type: "negative" });
  if (!signals.length && entry.dayDates.includes(latestDate)) signals.push({ text: "最新當沖", type: "negative" });
  if (metric20 && metric20.percentB <= 0.65) signals.push({ text: "位階較乾淨", type: "positive" });
  if (metric20 && metric20.percentB > 1) signals.push({ text: "貼近上軌", type: "negative" });
  if (metric40 && metric40.percentB > 1.1) signals.push({ text: "40日偏熱", type: "negative" });
  return signals.slice(0, 3);
}

function buildStockNote(name, entry, metrics, latestDate) {
  const meta = stockCatalog[name] || { code: "--", sector: "待補產業", market: "N/A" };
  const datesText = topNames(entry.wheelDates.length ? entry.wheelDates : entry.highDates.length ? entry.highDates : entry.dayDates, latestDate);
  const role = entry.wheelDates.length >= 2
    ? "輪漲股"
    : entry.highDates.length >= 2
      ? "高出股"
      : entry.dayDates.length >= 2
        ? "當沖股"
        : entry.wheelDates.includes(latestDate)
          ? "最新輪漲股"
          : entry.highDates.includes(latestDate)
            ? "最新高出股"
            : "觀察股";

  if (metrics?.boll20 && metrics?.boll40) {
    return `${name} 在 ${datesText} 都被列為${role}，${meta.market} 官方日資料重算後，20 日 %B 約 ${metrics.boll20.percentB.toFixed(3)}、40 日 %B 約 ${metrics.boll40.percentB.toFixed(3)}；這檔在目前交叉後的角色辨識度仍然夠高。`;
  }

  return `${name} 在 ${datesText} 這組影片裡被列為${role}，目前先依 ${meta.market === "TPEx" ? "TPEx" : "官方"} 整理資料列入觀察，等後續影片是否續點再決定排序。`;
}

function buildState(videos, quoteMetrics, syncTime) {
  const latest = videos[0];
  const previous = videos[1];
  const third = videos[2];
  const stats = buildStats(videos);
  const latestDate = latest.date;
  const videoBasis = videos.map((video) => video.date).join("、");

  const latestPrevCommon = latest.categories.wheel.filter((name) => previous.categories.wheel.includes(name));
  const latestThirdCommon = latest.categories.wheel.filter((name) => third.categories.wheel.includes(name));
  const threeDayCommon = latest.categories.wheel.filter((name) => previous.categories.wheel.includes(name) && third.categories.wheel.includes(name));
  const repeatedHigh = latest.categories.high.filter((name) => previous.categories.high.includes(name) || third.categories.high.includes(name));
  const repeatedDay = latest.categories.dayTrade.filter((name) => previous.categories.dayTrade.includes(name) || third.categories.dayTrade.includes(name));

  const marketMoodLabel = threeDayCommon.length >= 3
    ? "主線延續偏多"
    : latestThirdCommon.length >= 3
      ? "主線重接偏多"
      : latestPrevCommon.length >= 3
        ? "補漲延續偏多"
        : "快速輪動偏多";

  const marketMoodScore = Math.min(82, 66 + (threeDayCommon.length * 4) + (latestThirdCommon.length * 2) + latestPrevCommon.length);
  const marketMoodSummary = threeDayCommon.length
    ? `${latest.date} 到 ${third.date} 三支影片交叉後，${topNames(threeDayCommon, "暫無 3 日共通股")} 是目前最穩的 3 日共通輪漲股；${topNames(repeatedHigh, "高出股沒有連續重複")} 則偏向高檔辨識。`
    : `${latest.date} 最新影片和前兩支交叉後，${topNames(latestThirdCommon, "較少重複輪漲股")} 比和前一支的重複更清楚，代表主線有重接但輪動仍快。`;

  const marketMood = {
    label: marketMoodLabel,
    summary: marketMoodSummary,
    score: marketMoodScore,
    openingPlan: latestThirdCommon.length >= latestPrevCommon.length
      ? `先看 ${topNames(latestThirdCommon.slice(0, 3), "最新重複股")} 是否續量`
      : `先看 ${topNames(latestPrevCommon.slice(0, 3), "最新延續股")} 是否續強`,
  };

  const wheelCandidates = [...stats.values()]
    .filter((entry) => entry.wheelDates.length || entry.highDates.length || entry.dayDates.length)
    .map((entry) => {
      const meta = stockCatalog[entry.name] || { code: "--", sector: "待補產業", market: "N/A" };
      const metrics = quoteMetrics[entry.name] || null;
      const repeatWeight = (entry.wheelDates.length * 20) + (entry.wheelDates.includes(latestDate) ? 10 : 0);
      const score = scoreBollinger(metrics?.boll20, metrics?.boll40, repeatWeight);
      return { entry, meta, metrics, score };
    });

  const rankedBollinger = wheelCandidates
    .filter((item) => item.entry.wheelDates.length && item.metrics?.boll20 && item.metrics?.boll40)
    .sort((left, right) => right.score - left.score)
    .slice(0, 5);

  const stockPriority = [
    ...[...stats.values()].filter((entry) => entry.wheelDates.length >= 2),
    ...[...stats.values()].filter((entry) => entry.highDates.length >= 2),
    ...latest.categories.wheel.filter((name) => (stats.get(name)?.wheelDates.length || 0) < 2).map((name) => stats.get(name)),
    ...[...stats.values()].filter((entry) => entry.dayDates.length >= 2),
  ];

  const seenStocks = new Set();
  const stocks = [];
  for (const entry of stockPriority) {
    if (!entry || seenStocks.has(entry.name)) continue;
    seenStocks.add(entry.name);
    const meta = stockCatalog[entry.name] || { code: "--", sector: "待補產業", market: "N/A" };
    const metrics = quoteMetrics[entry.name] || null;
    stocks.push({
      code: meta.code,
      name: entry.name,
      bias: roleLabel(entry, latestDate),
      gap: topNames(entry.dates, latestDate),
      foreign: entry.wheelDates.length >= 2
        ? "交叉輪漲"
        : entry.highDates.length >= 2
          ? "交叉高出"
          : entry.dayDates.length >= 2
            ? "交叉當沖"
            : latest.categories.wheel.includes(entry.name)
              ? "最新影片主軸"
              : "待確認",
      volume: meta.sector,
      note: buildStockNote(entry.name, entry, metrics, latestDate),
      signals: buildSignals(entry, metrics?.boll20, metrics?.boll40, latestDate),
    });
    if (stocks.length >= 14) break;
  }

  const bollingerRankings = rankedBollinger.map((item, index) => ({
    code: item.meta.code,
    name: item.entry.name,
    verdict: index === 0 ? "今日首選" : item.entry.wheelDates.length >= 2 ? "交叉延續股" : "最新補強股",
    asOf: `截至 ${latest.date} 收盤`,
    summary: `${item.entry.name} 用 ${item.meta.market} 官方日資料重算後，20 日 %B 約 ${item.metrics.boll20.percentB.toFixed(3)}、40 日 %B 約 ${item.metrics.boll40.percentB.toFixed(3)}；${item.entry.wheelDates.length >= 2 ? "又是最近三支影片交叉後的重複輪漲股" : "雖然只出現在最新影片，但位階仍算乾淨"}。`,
    signals: [
      item.entry.wheelDates.length >= 2 ? `${item.entry.wheelDates.length}日共通` : "最新主線",
      `20日 %B ${item.metrics.boll20.percentB.toFixed(3)}`,
      item.metrics.boll40.percentB > 1 ? "40日偏熱" : "40日不過熱",
    ],
  }));

  const monteCarloScenarios = rankedBollinger.slice(0, 3).map((item, index) => {
    const simulation = item.metrics?.simulation;
    return {
      code: item.meta.code,
      name: item.entry.name,
      verdict: index === 0 ? "模型最平衡" : index === 1 ? "延續機率高" : "第二梯隊觀察",
      range: simulation?.range || "20 日模擬區間待補",
      stopLoss: simulation?.stopLoss || "3% 停損命中率待補",
      takeProfit: simulation?.takeProfit || "8% 停利命中率待補",
      drawdown: simulation?.drawdown || "模擬最大回撤待補",
      note: `${item.entry.name} ${index === 0 ? "是這版布林與重複輪漲交集最漂亮的一檔" : "屬於可以當第二層風險觀察的延續股"}。`,
      signals: [
        { text: item.entry.wheelDates.length >= 2 ? `${item.entry.wheelDates.length}日共通` : "最新主線", type: "positive" },
        { text: index === 0 ? "風險最平衡" : "延續觀察", type: "positive" },
      ],
    };
  });

  const markovModel = {
    currentState: marketMoodLabel,
    confidence: marketMoodScore,
    takeaway: marketMoodSummary,
    transitions: [
      { label: `維持${marketMoodLabel.replace("偏多", "")}`, value: `${Math.max(54, marketMoodScore)}%` },
      { label: "再切換到別的補漲線", value: `${Math.max(12, 90 - marketMoodScore)}%` },
      { label: "降回區間震盪", value: `${Math.max(8, 100 - Math.max(54, marketMoodScore) - Math.max(12, 90 - marketMoodScore))}%` },
    ],
    drivers: [
      `${latest.date} 輪漲股是 ${topNames(latest.categories.wheel.slice(0, 8), "暫無輪漲資料")}`,
      `${previous.date} 對照下，可直接交叉出 ${topNames(latestPrevCommon, "較少重複輪漲股")}`,
      `${third.date} 對照下，可直接交叉出 ${topNames(latestThirdCommon, "較少重接輪漲股")}`,
    ],
  };

  const checklist = [
    `先看 ${latest.date} 與前兩支影片的交叉輪漲股：${topNames(threeDayCommon.length ? threeDayCommon : latestThirdCommon.length ? latestThirdCommon : latestPrevCommon, "暫時沒有明顯交叉股")}。`,
    repeatedHigh.length
      ? `高出股 ${topNames(repeatedHigh, "無")} 要和輪漲股分開，不要混成主攻名單。`
      : "若高出股沒有重複，就優先看輪漲股延續。",
    repeatedDay.length
      ? `當沖股 ${topNames(repeatedDay, "無")} 屬快節奏，不適合直接列成首選。`
      : "若當沖股沒有重複，代表主線還是以輪漲為主。",
    `今天盤前先看 ${topNames(bollingerRankings.slice(0, 3).map((item) => item.name), "布林首選待補")} 是否續量。`,
  ];

  const risks = [
    {
      level: "high",
      title: `影片基準已更新到 ${videoBasis}`,
      detail: `目前基準改用黃清照 YouTube 頻道 /videos 頁面排序，最新三支就是 ${videoBasis}。`,
    },
    {
      level: "medium",
      title: threeDayCommon.length ? "有出現三日共通輪漲股" : "這輪沒有明顯三日共通輪漲股",
      detail: threeDayCommon.length
        ? `${topNames(threeDayCommon, "暫無")} 是目前最穩的 3 日共通輪漲股。`
        : `${latest.date} 和前兩支影片的輪漲重疊有限，表示主線仍有快速切換風險。`,
    },
    {
      level: "medium",
      title: "高出股與當沖股要拆開處理",
      detail: `${topNames(repeatedHigh, "高出股暫無重複")} 偏高檔辨識；${topNames(repeatedDay, "當沖股暫無重複")} 偏快節奏，和輪漲股不是同一層級。`,
    },
  ];

  return {
    liveQuotes: {},
    updateMeta: {
      version: versionStamp(),
      lastUpdated: syncTime,
      lastAutomationSync: syncTime,
      videoBasis,
    },
    marketMood,
    headlines: videos.map(describeVideo),
    stocks,
    checklist,
    risks,
    bollingerRankings,
    markovModel,
    monteCarloScenarios,
  };
}

async function buildQuoteMetrics(videos) {
  const names = unique(videos.flatMap((video) => [
    ...video.categories.wheel,
    ...video.categories.high,
    ...video.categories.dayTrade,
  ]));

  const metrics = {};

  for (const name of names) {
    const meta = stockCatalog[name];
    if (!meta || meta.market !== "TWSE") {
      continue;
    }
    try {
      const closes = await fetchTwseCloses(meta.code);
      const boll20 = computeBollinger(closes, 20);
      const boll40 = computeBollinger(closes, 40);
      metrics[name] = {
        closes,
        boll20,
        boll40,
        simulation: monteCarloSummary(closes),
      };
    } catch (_) {
      // Ignore quote failures for individual names.
    }
  }

  return metrics;
}

async function updateAppFile(state) {
  const current = await fs.readFile(appPath, "utf8");
  const replacement = `const appState = ${JSON.stringify(state, null, 2)};\n\nconst elements = {`;
  const next = current.replace(/const appState = \{[\s\S]*?\n\};\n\nconst elements = \{/m, replacement);

  if (next === current) {
    throw new Error("Failed to replace appState block in app.js");
  }

  await fs.writeFile(appPath, next, "utf8");
}

async function main() {
  const videos = await fetchTeacherVideos();
  if (videos.length < 3) {
    throw new Error("Teacher page did not provide three videos.");
  }

  const syncTime = formatDateTime();
  const quoteMetrics = await buildQuoteMetrics(videos);
  const state = buildState(videos, quoteMetrics, syncTime);
  await updateAppFile(state);

  process.stdout.write(`Updated app.js with basis ${state.updateMeta.videoBasis}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
