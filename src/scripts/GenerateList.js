let contentBox = null;
let titleBox = null;

let games = [];

function gamesList() {
  fetch("../steam.json").then(async (response) => {
    await response.json().then(async (app) => {
      games = await app.applist.apps;
      takeLimitedGames();
      titleBox.innerHTML = `Total de <span>${games.length}</span> jogos.`;
    });
  });
}

function init() {
  setInterval(async () => {
    if (contentBox != null) {
      clearInterval(this);
    }
    contentBox = await document.querySelector(".container-list");
    titleBox = await document.querySelector(".title-count");    

  }, 10);

  gamesList();
}
let gameIndex = 0;
let gamesLimited = [];

let limit = 100;

function takeLimitedGames() {
  if (gameIndex >= games.length) return;

  for (gameIndex; gameIndex <= limit; gameIndex++) {
    gamesLimited.push(games[gameIndex]);
  }

  createList();
  limit += 100;
}

async function createList() {
  const content = gamesLimited.map((game) => {
    return (
      "<li className='item'>" +
      game.name +
      " <span> ID " +
      game.appid +
      "</span>" +
      "</li>"
    );
  });
  contentBox.innerHTML = `<ul className='contents'> ${content.join("")} </ul>`;
}

export { createList, init, takeLimitedGames };
