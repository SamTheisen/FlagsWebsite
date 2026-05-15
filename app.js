// ============================================================
// CONFIGURATION
// Update these values before publishing.
// ============================================================

const CONFIG = {
  propertyName: "[Property Name]",
  address:      "[Address], San Francisco, CA",
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
  { name: "Italy",           code: "it",     justification: "[Replace with justification]" },
  { name: "Norway",          code: "no",     justification: "[Replace with justification]" },
  { name: "Sweden",          code: "se",     justification: "[Replace with justification]" },
  { name: "Finland",         code: "fi",     justification: "[Replace with justification]" },
  { name: "Ireland",         code: "ie",     justification: "[Replace with justification]" },
  { name: "Scotland",        code: "gb-sct", justification: "[Replace with justification]" },
  { name: "Romania",         code: "ro",     justification: "[Replace with justification]" },
  { name: "Hungary",         code: "hu",     justification: "[Replace with justification]" },
  { name: "Czech Republic",  code: "cz",     justification: "[Replace with justification]" },
  { name: "Slovakia",        code: "sk",     justification: "[Replace with justification]" },
  { name: "Bulgaria",        code: "bg",     justification: "[Replace with justification]" },
  { name: "Greece",          code: "gr",     justification: "[Replace with justification]" },
  { name: "Turkey",          code: "tr",     justification: "[Replace with justification]" },
  { name: "Russia",          code: "ru",     justification: "[Replace with justification]" },
  { name: "Ukraine",         code: "ua",     justification: "[Replace with justification]" },
  { name: "Egypt",           code: "eg",     justification: "[Replace with justification]" },
  { name: "Nigeria",         code: "ng",     justification: "[Replace with justification]" },
  { name: "Ivory Coast",     code: "ci",     justification: "[Replace with justification]" },
  { name: "Ghana",           code: "gh",     justification: "[Replace with justification]" },
  { name: "Algeria",         code: "dz",     justification: "[Replace with justification]" },
  { name: "Tunisia",         code: "tn",     justification: "[Replace with justification]" },
  { name: "Cameroon",        code: "cm",     justification: "[Replace with justification]" },
  { name: "South Africa",    code: "za",     justification: "[Replace with justification]" },
  { name: "Kenya",           code: "ke",     justification: "[Replace with justification]" },
  { name: "Chile",           code: "cl",     justification: "[Replace with justification]" },
  { name: "Bolivia",         code: "bo",     justification: "[Replace with justification]" },
  { name: "Peru",            code: "pe",     justification: "[Replace with justification]" },
  { name: "Colombia",        code: "co",     justification: "[Replace with justification]" },
  { name: "China",           code: "cn",     justification: "[Replace with justification]" },
  { name: "India",           code: "in",     justification: "[Replace with justification]" },
  { name: "Indonesia",       code: "id",     justification: "[Replace with justification]" },
  { name: "New Zealand",     code: "nz",     justification: "[Replace with justification]" },
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

document.getElementById("heroSub").textContent = CONFIG.description;
document.getElementById("footerText").textContent =
  `Flying above ${CONFIG.address} \u00b7 2026 FIFA World Cup`;

// ============================================================
// FLAGS GRID
// ============================================================

function renderFlags() {
  const grid = document.getElementById("flagsGrid");
  grid.innerHTML = "";

  TEAMS.forEach((team, i) => {
    const card = document.createElement("div");
    card.className = "flag-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${team.name} — tap for details`);
    card.innerHTML = `
      <div class="flag-img-wrap">
        <img src="${flagUrl(team.code)}" alt="Flag of ${team.name}" loading="lazy">
      </div>
      <div class="flag-card-name">${team.name}</div>
    `;
    card.addEventListener("click", () => openModal(i));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(i); }
    });
    grid.appendChild(card);
  });
}

renderFlags();

// ============================================================
// MODAL
// ============================================================

const overlay   = document.getElementById("modalOverlay");
const modalFlag = document.getElementById("modalFlag");
const modalName = document.getElementById("modalName");
const modalText = document.getElementById("modalJustification");

function openModal(index) {
  const team = TEAMS[index];
  modalFlag.src       = flagUrl(team.code);
  modalFlag.alt       = `Flag of ${team.name}`;
  modalName.textContent = team.name;
  modalText.textContent = team.justification;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

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
  const options  = buildOptions(team);
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
    <div class="quiz-options">
      ${options.map(o => `<button class="quiz-option" data-name="${o.name}">${o.name}</button>`).join("")}
    </div>
  `;

  container.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(btn, team.name));
  });
}

function handleAnswer(btn, correct) {
  const all = document.querySelectorAll(".quiz-option");
  all.forEach(b => b.disabled = true);

  if (btn.dataset.name === correct) {
    btn.classList.add("correct");
    quizScore++;
  } else {
    btn.classList.add("wrong");
    all.forEach(b => { if (b.dataset.name === correct) b.classList.add("correct"); });
  }

  setTimeout(() => {
    quizCursor++;
    if (quizCursor < TEAMS.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  }, 900);
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
// UTILITIES
// ============================================================

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildOptions(correct) {
  const wrong = shuffle(TEAMS.filter(t => t.name !== correct.name)).slice(0, 3);
  return shuffle([correct, ...wrong]);
}
