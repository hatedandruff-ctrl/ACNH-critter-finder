/*************************************************
 * 0. DOM REFERENCES
 *************************************************/

const fishBtn = document.getElementById("fishBtn");
const bugsBtn = document.getElementById("bugsBtn");
const seaCreaturesBtn = document.getElementById("seaCreaturesBtn");
const critterpediaBtn = document.getElementById("critterpediaBtn");

const fishSection = document.getElementById("fishSection");
const bugsSection = document.getElementById("bugsSection");
const seaCreaturesSection = document.getElementById("seaCreaturesSection");
const critterpediaSection = document.getElementById("critterpediaSection");

const islandInputs = document.getElementById("islandInputs");


/*************************************************
 * 1. TAB SWITCHING
 *************************************************/

function clearActive() {
  fishSection.classList.remove("active");
  bugsSection.classList.remove("active");
  seaCreaturesSection.classList.remove("active");
  critterpediaSection.classList.remove("active");
}

fishBtn.addEventListener("click", () => {
  clearActive();
  islandInputs.style.display = "block";
  fishSection.classList.add("active");
});

bugsBtn.addEventListener("click", () => {
  clearActive();
  islandInputs.style.display = "block";
  bugsSection.classList.add("active");
});

seaCreaturesBtn.addEventListener("click", () => {
  clearActive();
  islandInputs.style.display = "block";
  seaCreaturesSection.classList.add("active");
});

critterpediaBtn.addEventListener("click", () => {
  clearActive();
  islandInputs.style.display = "none";
  critterpediaSection.classList.add("active");
  renderCritterpedia();
});


/*************************************************
 * 2. LOCAL STORAGE (CAUGHT STATE)
 *************************************************/

function getCaughtMap() {
  return JSON.parse(localStorage.getItem("caughtCreatures")) || {};
}

function setCaught(id, value) {
  const caught = getCaughtMap();
  caught[id] = value;
  localStorage.setItem("caughtCreatures", JSON.stringify(caught));
}


/*************************************************
 * 3. HELPERS
 *************************************************/

function normalizeWeather(weather) {
  if (weather === "any") return ["clear", "rain", "snow"];
  if (weather === "anyExceptRain") return ["clear", "snow"];
  if (Array.isArray(weather)) return weather;
  return [weather];
}

const MONTH_NAMES = [
  "", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function formatMonthRange(months) {
  const sorted = [...months].sort((a, b) => a - b);
  if (sorted.length === 12) return "all year";

  let ranges = [];
  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i <= sorted.length; i++) {
    if (sorted[i] !== prev + 1) {
      ranges.push([start, prev]);
      start = sorted[i];
    }
    prev = sorted[i];
  }

  return ranges
    .map(([s, e]) =>
      s === e ? MONTH_NAMES[s] : `${MONTH_NAMES[s]}–${MONTH_NAMES[e]}`
    )
    .join(", ");
}

function formatTimeRange(start, end) {
  if (start === 0 && end === 23) return "all day";

  const formatHour = (h) => {
    const suffix = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    return `${hour} ${suffix}`;
  };

  return `${formatHour(start)}–${formatHour(end)}`;
}

function buildDescription(creature) {
  const hemisphere = document.getElementById("hemisphereInput").value;

  return creature.spawnRules.map(rule => {
    const months =
      hemisphere === "north"
        ? rule.monthsNorth
        : rule.monthsSouth;

    const monthText = formatMonthRange(months);
    const timeText = formatTimeRange(rule.startHour, rule.endHour);

    let weatherText = "";
    if (rule.weather === "any") weatherText = "in any weather";
    else if (rule.weather === "anyExceptRain") weatherText = "except rain";
    else weatherText = `during ${rule.weather}`;

    return `Available ${monthText}, ${timeText}${weatherText ? `, ${weatherText}` : ""}.`;
  }).join(" ");
}


/*************************************************
 * 4. FILTERING LOGIC
 *************************************************/

function creatureMatchesFilters(creature, filters, ignoreWeather) {
  if (filters.totalCaught < creature.tcr) return false;

  return creature.spawnRules.some(rule => {
    const months =
      filters.hemisphere === "north"
        ? rule.monthsNorth
        : rule.monthsSouth;

    if (!months.includes(filters.month)) return false;

    const start = rule.startHour;
    const end = rule.endHour;

    const hourMatches =
      start <= end
        ? filters.hour >= start && filters.hour <= end
        : filters.hour >= start || filters.hour <= end;

    if (!hourMatches) return false;

    if (!ignoreWeather) {
      const allowed = normalizeWeather(rule.weather);
      if (!allowed.includes(filters.weather)) return false;
    }

    return true;
  });
}

function filterCreatures(list, filters, ignoreWeather) {
  return list.filter(c =>
    creatureMatchesFilters(c, filters, ignoreWeather)
  );
}


/*************************************************
 * 5. TABLE RENDERING
 *************************************************/

function renderTable(creatures, containerId, extraColumns, includeLocation = true) {
  const container = document.getElementById(containerId);
  const caughtMap = getCaughtMap();
  container.innerHTML = "";

  const table = document.createElement("table");

  // build header
  const header = document.createElement("tr");
  const baseColumns = ["Icon", "Name"];
  if (includeLocation) baseColumns.push("Location"); // only add if needed
  const allColumns = [...baseColumns, ...extraColumns, "Caught"];
  allColumns.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    header.appendChild(th);
  });
  table.appendChild(header);

  // build rows
  creatures.forEach(creature => {
    const row = document.createElement("tr");
    if (caughtMap[creature.id]) row.style.opacity = "0.5";

    const icon = document.createElement("td");
    const img = document.createElement("img");
    img.src = creature.iconUrl;
    img.width = 32;
    icon.appendChild(img);

    const name = document.createElement("td");
    name.textContent = creature.name;

    row.append(icon, name);

    if (includeLocation) {
      const location = document.createElement("td");
      location.textContent = creature.location;
      row.appendChild(location);
    }

    extraColumns.forEach(col => {
      const td = document.createElement("td");
      if (col === "Shadow Size") td.textContent = creature.shadowSize || "-";
      if (col === "Shadow Speed") td.textContent = creature.shadowSpeed || "-";
      row.appendChild(td);
    });

    const caughtTd = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!caughtMap[creature.id];

    checkbox.addEventListener("change", () => {
      setCaught(creature.id, checkbox.checked);
      row.style.opacity = checkbox.checked ? "0.5" : "1";
    });

    caughtTd.appendChild(checkbox);
    row.appendChild(caughtTd);

    table.appendChild(row);
  });

  container.appendChild(table);
}




/*************************************************
 * 6. RUN ASSISTANTS
 *************************************************/

function getCommonFilters(countId) {
  return {
    month: Number(document.getElementById("monthInput").value),
    hour: Number(document.getElementById("hourInput").value),
    hemisphere: document.getElementById("hemisphereInput").value,
    weather: document.getElementById("weatherInput").value,
    totalCaught: Number(document.getElementById(countId).value)
  };
}

applyFishFiltersBtn.addEventListener("click", () => {
  const filters = getCommonFilters("fishCountInput");
  const results = filterCreatures(creatures.fish, filters, false);
  renderTable(results, "fishResults", ["Shadow Size"]);
});

applyBugFiltersBtn.addEventListener("click", () => {
  const filters = getCommonFilters("bugCountInput");
  const results = filterCreatures(creatures.bugs, filters, false);
  renderTable(results, "bugResults", []);
});

applySeaCreatureFiltersBtn.addEventListener("click", () => {
  const filters = getCommonFilters("seaCreatureCountInput");
  const results = filterCreatures(creatures.seaCreatures, filters, true);
  renderTable(results, "seaCreatureResults", ["Shadow Size", "Shadow Speed"], false); // last "false" disables Location
});



/*************************************************
 * 7. CRITTERPEDIA
 *************************************************/

function renderCritterpedia() {
  
  const grid = document.getElementById("critterpediaGrid");
  const caughtMap = getCaughtMap();

  const allCreatures = [
    ...creatures.fish,
    ...creatures.bugs,
    ...creatures.seaCreatures
  ];

  grid.innerHTML = "";

  allCreatures.forEach(creature => {
    const wrapper = document.createElement("div");
    wrapper.className = "critter-icon";

    if (caughtMap[creature.id]) wrapper.classList.add("caught");

    const img = document.createElement("img");
    img.src = creature.iconUrl;

    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = `<strong>${creature.name}</strong><br>${buildDescription(creature)}`;

    wrapper.append(img, tooltip);
    grid.appendChild(wrapper);
  });
  
}

