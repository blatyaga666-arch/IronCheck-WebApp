const tg = window.Telegram?.WebApp;
const games = [
  {code: "cs2", name: "Counter-Strike 2"},
  {code: "dota2", name: "Dota 2"},
  {code: "gta5", name: "GTA V"},
  {code: "fortnite", name: "Fortnite"},
  {code: "witcher3", name: "The Witcher 3 Next-Gen"},
  {code: "forza5", name: "Forza Horizon 5"},
  {code: "rdr2", name: "Red Dead Redemption 2"},
  {code: "cyberpunk", name: "Cyberpunk 2077"},
  {code: "hogwarts", name: "Hogwarts Legacy"},
  {code: "starfield", name: "Starfield"},
  {code: "alanwake2", name: "Alan Wake 2"},
  {code: "wukong", name: "Black Myth: Wukong"},
  {code: "stalker2", name: "S.T.A.L.K.E.R. 2"},
  {code: "skyrim", name: "Skyrim"}
];

const container = document.getElementById("games");
const selection = document.getElementById("selection");
const sendButton = document.getElementById("send-button");
const notice = document.getElementById("notice");
let selected = null;

for (const game of games) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "game";
  button.setAttribute("aria-pressed", "false");
  const name = document.createElement("span");
  name.textContent = game.name;
  button.append(name);
  button.addEventListener("click", () => {
    selected = game.code;
    document.querySelectorAll(".game").forEach(b => b.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    selection.textContent = `Выбрана игра: ${game.name}`;
    sendButton.disabled = false;
    notice.textContent = "";
  });
  container.appendChild(button);
}

if (tg) {
  tg.ready();
  tg.expand();
}

sendButton.addEventListener("click", () => {
  if (!selected) return;
  if (!tg || !tg.initData) {
    notice.textContent = "Открой страницу кнопкой «Игры (мини-приложение)» в Telegram-боте.";
    return;
  }
  // sendData поддерживается при открытии с WebApp-кнопки обычной клавиатуры.
  tg.sendData(JSON.stringify({ action: "fps", game: selected }));
});
