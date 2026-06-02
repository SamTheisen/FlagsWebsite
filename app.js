// ============================================================
// CONFIGURATION
// Update these values before publishing.
// ============================================================

const CONFIG = {
  propertyName: "[Property Name]",
  address:      "542 Laguna St., San Francisco, CA",
  // Hero sub-heading shown below the title
  description:  "[Short description — e.g. 'Every year, this building flies the flags of the teams that didn't make it to the World Cup. These are the 32 flying in 2026.']",
};

// ============================================================
// TEAMS
// Replace all 32 entries with the actual teams.
//
// Fields:
//   name          — Country name displayed on the site
//   code          — ISO 3166-1 alpha-2 flag code (lowercase)
//                   Look up codes at: https://flagcdn.com
//                   UK nations: "gb-eng", "gb-sct", "gb-wls", "gb-nir"
//   justification — Your friend's reason for including this team
// ============================================================

const TEAMS = [
  { joeRank: 49, name: "Italy",                 code: "it",     rank: 12,  justification: "Four-Time World Champion; Lost UEFA Playoff Final" },
  { joeRank: 50, name: "United States",         code: "us",     rank: 16,  justification: "I had one extra slot — gotta put in the USA!" },
  { joeRank: 51, name: "Denmark",               code: "dk",     rank: 20,  justification: "Euro 1992 Champion; Lost UEFA Playoff Final" },
  { joeRank: 52, name: "Nigeria",               code: "ng",     rank: 26,  justification: "Six-Time World Cup Participant; Finished 2nd in CAF Qualifying Group" },
  { joeRank: 53, name: "Ukraine",               code: "ua",     rank: 32,  justification: "2006 World Cup Quarterfinalist; Lost UEFA Playoff Final" },
  { joeRank: 54, name: "Poland",                code: "pl",     rank: 35,  justification: "Two-Time World Cup Third-Place Finisher; Lost UEFA Playoff Final" },
  { joeRank: 55, name: "Wales",                 code: "gb-wls", rank: 37,  justification: "2022 World Cup Participant; Lost UEFA Playoff Semifinal" },
  { joeRank: 56, name: "Serbia",                code: "rs",     rank: 39,  justification: "World Cup Regular; Last team eliminated before UEFA Playoffs" },
  { joeRank: 57, name: "Cameroon",              code: "cm",     rank: 45,  justification: "Eight-Time World Cup Participant; CAF Qualification Near Miss" },
  { joeRank: 58, name: "Greece",                code: "gr",     rank: 47,  justification: "Three-Time World Cup Participant; UEFA Playoff Contender. Plus my Wife's Ancestral Homeland!" },
  { joeRank: 59, name: "Slovakia",              code: "sk",     rank: 48,  justification: "2010 World Cup Round-of-16 Participant; Lost UEFA Playoff Semifinal" },
  { joeRank: 60, name: "Venezuela",             code: "ve",     rank: 49,  justification: "Never Qualified for a World Cup, but Missed Qualification by One Place" },
  { joeRank: 61, name: "Romania",               code: "ro",     rank: 56,  justification: "Seven-Time World Cup Participant; UEFA Group Runner-Up" },
  { joeRank: 62, name: "Slovenia",              code: "si",     rank: 58,  justification: "Two-Time World Cup Participant; UEFA Group Runner-Up" },
  { joeRank: 63, name: "Ireland",               code: "ie",     rank: 59,  justification: "Three-Time World Cup Participant; Finished 3rd in UEFA Qualifying Group" },
  { joeRank: 64, name: "Burkina Faso",          code: "bf",     rank: 62,  justification: "Africa Cup Runner-Up (2013) and Finished 2nd in CAF Qualifying Group. Plus cool name!" },
  { joeRank: 65, name: "Albania",               code: "al",     rank: 64,  justification: "Euro 2016 & 2024 Participant; UEFA Qualification Contender" },
  { joeRank: 66, name: "North Macedonia",       code: "mk",     rank: 67,  justification: "Eliminated Italy from 2022 Qualifying; Finished 2nd in UEFA Qualifying Group" },
  { joeRank: 67, name: "United Arab Emirates",  code: "ae",     rank: 68,  justification: "1990 World Cup Participant; Lost AFC Qualification Playoff" },
  { joeRank: 68, name: "Northern Ireland",      code: "gb-nir", rank: 70,  justification: "Three-Time World Cup Participant; Finished 3rd in UEFA Qualifying Group" },
  { joeRank: 69, name: "Jamaica",               code: "jm",     rank: 71,  justification: "1998 World Cup Participant; Eliminated in CONCACAF Final Round. Plus they have a bobsled team!" },
  { joeRank: 70, name: "Georgia",               code: "ge",     rank: 72,  justification: "Euro 2024 Participant; UEFA Playoff Contender" },
  { joeRank: 71, name: "Finland",               code: "fi",     rank: 73,  justification: "Euro 2020 Participant; Finished 3rd in UEFA Qualifying Group" },
  { joeRank: 72, name: "Iceland",               code: "is",     rank: 75,  justification: "2018 World Cup Participant; Finished 3rd in UEFA Qualifying Group" },
  { joeRank: 73, name: "Bolivia",               code: "bo",     rank: 76,  justification: "Three-Time World Cup Participant; Missed CONMEBOL Qualification" },
  { joeRank: 74, name: "Montenegro",            code: "me",     rank: 81,  justification: "Never Qualified for a World Cup, but Reached UEFA Qualification Contention" },
  { joeRank: 75, name: "Gabon",                 code: "ga",     rank: 87,  justification: "Never Qualified for a World Cup, but Finished Behind CAF Group Winner" },
  { joeRank: 76, name: "Thailand",              code: "th",     rank: 93,  justification: "Never Qualified for a World Cup, but Home of Fantastic Food" },
  { joeRank: 77, name: "Guatemala",             code: "gt",     rank: 96,  justification: "Never Qualified for a World Cup, but Came Closer Than Ever in 2026 Qualifying. Plus many friends are Tecos!" },
  { joeRank: 78, name: "Luxembourg",            code: "lu",     rank: 98,  justification: "Never Qualified for a World Cup, but My Ancestral Homeland" },
  { joeRank: 79, name: "Mozambique",            code: "mz",     rank: 101, justification: "Never Qualified for a World Cup, but Immortalized in Bob Dylan song." },
  { joeRank: 80, name: "Suriname",              code: "sr",     rank: 125, justification: "Never Qualified for a World Cup, but smallest country to almost qualify for 2026" },
  { joeRank: 81, name: "San Marino",            code: "sm",     rank: 211, justification: "Lowest FIFA ranked team in the World! Now that's cool!" },
];

// ============================================================
// ALL COUNTRIES — used for quiz autocomplete so the dropdown
// doesn't hint at which of the 32 teams the flag belongs to
// ============================================================

const ALL_COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda",
  "Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
  "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso",
  "Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba",
  "Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini",
  "Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
  "Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
  "Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives",
  "Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia",
  "Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
  "North Macedonia","Northern Ireland","Norway","Oman","Pakistan","Palau","Palestine","Panama",
  "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
  "Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
  "Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe",
  "Saudi Arabia","Scotland","Senegal","Serbia","Seychelles","Sierra Leone","Singapore",
  "Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea",
  "South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","USA","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam","Wales","Yemen","Zambia","Zimbabwe"
];

// ============================================================
// FLAG IMAGE URL HELPER
// ============================================================

function flagUrl(code) {
  return `https://flagcdn.com/w160/${code}.png`;
}

// ============================================================
// INIT — populate text placeholders
// ============================================================

const heroSub = document.getElementById("heroSub");
if (heroSub) heroSub.textContent = CONFIG.description;
document.getElementById("footerText").textContent =
  `Flying above ${CONFIG.address} \u00b7 2026 FIFA World Cup`;
document.getElementById("quizSub").textContent = `See if you can name all ${TEAMS.length}.`;

// ============================================================
// FLAGS GRID
// ============================================================

function renderFlags() {
  const grid = document.getElementById("flagsGrid");
  grid.innerHTML = "";

  TEAMS.forEach((team) => {
    const card = document.createElement("div");
    card.className = "flag-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${team.name} — tap to reveal`);
    card.innerHTML = `
      <div class="flag-card-inner">
        <div class="flag-card-front">
          <div class="flag-img-wrap">
            <img src="${flagUrl(team.code)}" alt="Mystery flag" loading="lazy">
          </div>
        </div>
        <div class="flag-card-back">
          <div class="flag-back-rank">Joe's Rank: ${team.joeRank}</div>
          <div class="flag-back-name">${team.name}</div>
          <div class="flag-back-divider"></div>
          <div class="flag-back-reason">${team.justification}</div>
          <div class="flag-back-fifa">FIFA #${team.rank}</div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.classList.toggle("flipped"); }
    });
    grid.appendChild(card);
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".flag-card")) {
    document.querySelectorAll(".flag-card.flipped").forEach(c => c.classList.remove("flipped"));
  }
});

renderFlags();


// ============================================================
// QUIZ
// ============================================================

let quizQueue  = [];
let quizScore  = 0;
let quizCursor = 0;

document.getElementById("quizStartBtn").addEventListener("click", startQuiz);

function startQuiz() {
  quizQueue  = shuffle([...TEAMS]);
  quizScore  = 0;
  quizCursor = 0;
  renderQuestion();
}

function renderQuestion() {
  const team     = quizQueue[quizCursor];
  const progress = (quizCursor / TEAMS.length) * 100;
  const container = document.getElementById("quizContainer");

  container.innerHTML = `
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-bar" style="width:${progress}%"></div>
    </div>
    <p class="quiz-count">${quizCursor + 1} of ${TEAMS.length}</p>
    <div class="quiz-flag-wrap">
      <img src="${flagUrl(team.code)}" alt="Mystery flag">
    </div>
    <div class="quiz-input-wrap">
      <input
        id="quizInput"
        class="quiz-input"
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="Type a country name..."
      >
      <ul class="quiz-suggestions" id="quizSuggestions"></ul>
    </div>
    <button class="btn-primary quiz-submit" id="quizSubmit" disabled>Submit</button>
    <div class="quiz-feedback" id="quizFeedback"></div>
  `;

  const input       = document.getElementById("quizInput");
  const suggestions = document.getElementById("quizSuggestions");
  const submitBtn   = document.getElementById("quizSubmit");

  input.focus();

  input.addEventListener("input", () => {
    const val = input.value.trim();
    submitBtn.disabled = val.length === 0;
    renderSuggestions(val, suggestions, input, submitBtn);
  });

  // Keyboard: arrow keys to navigate suggestions, Enter to submit
  input.addEventListener("keydown", (e) => {
    const items = suggestions.querySelectorAll("li");
    const active = suggestions.querySelector("li.active");
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = active ? active.nextElementSibling : items[0];
      if (next) { active?.classList.remove("active"); next.classList.add("active"); input.value = next.textContent; submitBtn.disabled = false; }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = active?.previousElementSibling;
      if (prev) { active.classList.remove("active"); prev.classList.add("active"); input.value = prev.textContent; }
    } else if (e.key === "Enter" && !submitBtn.disabled) {
      suggestions.innerHTML = "";
      handleAnswer(input.value.trim(), team.name);
    } else if (e.key === "Escape") {
      suggestions.innerHTML = "";
    }
  });

  submitBtn.addEventListener("click", () => {
    suggestions.innerHTML = "";
    handleAnswer(input.value.trim(), team.name);
  });

  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".quiz-input-wrap")) suggestions.innerHTML = "";
  }, { once: false, capture: false });
}

function renderSuggestions(val, listEl, input, submitBtn) {
  listEl.innerHTML = "";
  if (!val) return;
  const matches = ALL_COUNTRIES
    .filter(name => name.toLowerCase().includes(val.toLowerCase()))
    .slice(0, 6);
  matches.forEach(name => {
    const li = document.createElement("li");
    // Bold the matching portion
    const idx = name.toLowerCase().indexOf(val.toLowerCase());
    li.innerHTML = name.slice(0, idx) +
      `<strong>${name.slice(idx, idx + val.length)}</strong>` +
      name.slice(idx + val.length);
    li.addEventListener("mousedown", (e) => {
      e.preventDefault(); // prevent input blur
      input.value = name;
      submitBtn.disabled = false;
      listEl.innerHTML = "";
      input.focus();
    });
    listEl.appendChild(li);
  });
}

function handleAnswer(guess, correct) {
  const input     = document.getElementById("quizInput");
  const submitBtn = document.getElementById("quizSubmit");
  const feedback  = document.getElementById("quizFeedback");

  if (input) input.disabled = true;
  if (submitBtn) submitBtn.disabled = true;

  const isCorrect = guess.toLowerCase() === correct.toLowerCase();
  if (isCorrect) {
    quizScore++;
    feedback.innerHTML = `<span class="feedback-correct">Correct!</span>`;
  } else {
    feedback.innerHTML = `<span class="feedback-wrong">It was <strong>${correct}</strong></span>`;
  }

  setTimeout(() => {
    quizCursor++;
    if (quizCursor < TEAMS.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  }, 1100);
}

function renderResult() {
  const pct = quizScore / TEAMS.length;
  const message =
    pct === 1    ? "Perfect. You really know your flags." :
    pct >= 0.75  ? "Nice — you'd fit right in at the building." :
    pct >= 0.5   ? "Halfway there. Not bad." :
    pct >= 0.25  ? "There's room to improve." :
                   "Time to brush up on your geography.";

  document.getElementById("quizContainer").innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-score">${quizScore}</div>
      <p class="quiz-result-denom">out of ${TEAMS.length}</p>
      <p class="quiz-result-message">${message}</p>
      <button class="btn-primary" id="quizRestartBtn">Try Again</button>
    </div>
  `;
  document.getElementById("quizRestartBtn").addEventListener("click", startQuiz);
}

// ============================================================
// QR CODE
// ============================================================

QRCode.toCanvas(document.getElementById("qrCanvas"), window.location.href, {
  width: 120,
  margin: 2,
  color: { dark: "#eef2ff", light: "#090d18" },
});

// ============================================================
// UTILITIES
// ============================================================

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

