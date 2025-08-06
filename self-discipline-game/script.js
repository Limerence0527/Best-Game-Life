const todayKey = new Date().toISOString().slice(0, 10);
const logList = document.getElementById("logList");
const dateDiv = document.getElementById("date");
dateDiv.textContent = `今天是：${todayKey}`;

const logData = JSON.parse(localStorage.getItem("dailyLog") || "{}");
if (!logData[todayKey]) logData[todayKey] = [];
renderLog();

function markDone(activity) {
  if (!logData[todayKey].includes(activity)) {
    logData[todayKey].push(activity);
    localStorage.setItem("dailyLog", JSON.stringify(logData));
    renderLog();
  }
}

function renderLog() {
  logList.innerHTML = "";
  logData[todayKey].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    logList.appendChild(li);
  });
}
