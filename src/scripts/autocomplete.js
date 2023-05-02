console.log("autocomplete carregado");

let availableKeywords = [];
let games = [];

function gamesList() {
  fetch("../steam.json")
    .then((response) => {
      response.json().then((app) => {
        games = app.applist.apps;
      })
    })
}

gamesList();

let resultBox;
let gameImage;

let inputBox;

let sendInput;
let boxResult;

async function keyUp() {
  resultBox = await document.querySelector(".result-box");
  gameImage = await document.querySelector(".game-image");
  inputBox = await document.getElementById("input-box")

  sendInput = await document.querySelector(".search-button");
  boxResult = await document.querySelector(".container-result");

  inputBox.onkeyup = await gamesFounder;
}

function inputsVerify(){
  if (inputBox == null) {
    keyUp();
  }
}

setTimeout(inputsVerify, 100)

function gamesFounder(updateDisplay) {
  let result = [];
  let resultNames = [];

  let input = inputBox.value;

  resultBox.innerHTML = '';
  gameImage.classList.add("hide");
  sendInput.classList.remove("hide");

  let n = 0;
  if (input.length > 0) {
    result = games.map((game) => {
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

    if (input.length == 0 || result.length == 0) {
      sendInput.classList.add("hide");
      boxResult.classList.remove("painel-animation");
      return;
    }

    for (let i = 0; i <= result.length; i++) {
      if (resultNames.length == 0) {
        console.log(result[0]);
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
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = '';

  gamesFounder(false);
}

function display(result) {
  const content = result.map((list) => {
    // return "<li onclick=selectInput(this)>" + list + "</li>";
    return(
      `<li onClick={selectInput(this)}> ${list} </li>`
    )
  });
  console.log(content.join(''))
  resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
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

export { sendGame, selectInput}