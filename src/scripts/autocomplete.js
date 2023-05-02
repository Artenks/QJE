console.log("autocomplete carregado");

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

let bodyBox;

let resultBox;

let inputBox;

let sendInput;

async function keyUp() {
  bodyBox = await document.querySelector("body");
  resultBox = await document.querySelector(".result-box");
  inputBox = await document.getElementById("input-box")

  sendInput = await document.querySelector(".search-button");

  inputBox.onkeyup = await gamesFounder;
}

function inputsVerify(){
  if (inputBox == null) {
    keyUp();
  }
}

setTimeout(inputsVerify, 100)

let resultGames = [];
let resultNames = [];
let id;

function gamesFounder(updateDisplay) {
  resultGames = [];
  resultNames = [];

  let input = inputBox.value;

  resultBox.innerHTML = '';
  sendInput.classList.remove("hide");

  let n = 0;
  if (input.length > 0) {
    resultGames = games.map((game) => {
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

    for (let i = 0; i <= resultGames.length-1; i++) {
      if (resultNames.length == 0) {
        console.log(resultGames[0]);
        id = resultGames[i].substring(resultGames[i].indexOf("=") + 1);

        bodyBox.style.backgroundImage = `url(https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg?t=1507600)`;

      }

      if (resultGames[i] != null) {
        let name = resultGames[i].substring(0, resultGames[i].indexOf("="));

        resultNames.push(name);
      }
    }
    if (updateDisplay) {
      display(resultNames);
    }
  }
  if (input.length == 0 || resultGames.length == 0) {
    sendInput.classList.add("hide");
    return;
  }
}

function display(result) {
  const content = result.map((list) => {
    return(
      "<li>" + list + "</li>"
    )
  });
  resultBox.innerHTML = content.join('')
  for(let i = 0; i <= result.length-1; i++)
  {
    resultBox.children[i].addEventListener("click", function() {
      id = resultGames[i].substring(resultGames[i].indexOf("=") + 1);

      inputBox.value = result[i];
      resultBox.innerHTML = '';
    })

    resultBox.children[i].addEventListener("mouseover", function() {
      id = resultGames[i].substring(resultGames[i].indexOf("=") + 1);
      console.log(id);

      bodyBox.style.backgroundImage = `url(https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg?t=1507600)`;
    })
  }
}

let gameName = "";
let gameId = 0;

function sendGame() {
  games.map((game) => {
    takeGame(game);
  });
}

async function takeGame(game) {
  if (game.name.toLowerCase() == inputBox.value.toLowerCase() && game.appid == id) {
    gameName = await game.name;
    gameId = await game.appid;
    alert(`${gameName}.${gameId}`);

    return;
  }
}

export {sendGame}