console.log("autocomplete carregado");

let availableKeywords = [];
let games = [];

async function gamesList() {
  await fetch("../steam.json")
    .then(async (response) => {
      console.log(response.json());
      await response.json()
        .then(async (app) => {
          console.log(await app);
          games = await app.applist.apps;
        })
    })
}

gamesList();

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

const gameImage = document.querySelector(".game-image");

const sendInput = document.querySelector(".search-button");
const boxResult = document.querySelector(".container-result");

async function gamesFounder(updateDisplay) {
  let result = [];
  let resultNames = [];
  let input = inputBox.value;

  resultBox.innerHTML = '';
  gameImage.classList.add("hide");
  sendInput.classList.remove("hide");

  let n = 0;

  if (input.length > 0) {
    console.log(await games);

    result = await games.map((game) => {
      let gameInfos = `${game.name}=${game.appid}`;
      return gameInfos;
    }).filter((keyword) => {
      if (n > 30)
        return;


      const gameCheck = keyword.toLowerCase().includes(input.toLowerCase());

      if (gameCheck) {
        n++;
      }

      return gameCheck;
    })

    for (let i = 0; i <= result.length; i++) {
      if (resultNames.length == 0) {
        let id = result[i].substring(result[i].indexOf("=") + 1);

        gameImage.src = `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg?t=1507600`;

        gameImage.classList.remove("hide");
      }

      if (result[i] != null) {
        let name = result[i].substring(0, result[i].indexOf("="));

        resultNames.push(name);

        boxResult.classList.add("painel-animation");
      }
    }
    if (updateDisplay) {
      display(resultNames);
    }
  }
  if (input.length == 0) {
    sendInput.classList.add("hide");
    boxResult.classList.remove("painel-animation");
  }
}

async function keyUp() {
  inputBox.onkeyup = await gamesFounder;
}
keyUp();

function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = '';

  gamesFounder(false);
}

let gameName = "";
let gameId = 0;

function sendGame() {

  games.map((game) => {
    takeGame(game);
  });
}

async function takeGame(game) {
  if (game.name.toLowerCase() == inputBox.value.toLowerCase()) {
    gameName = await game.name;
    gameId = await game.appid;
    alert(`${gameName}.${gameId}`);

    return;
  }
}

export { sendGame }