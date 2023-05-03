let contentBox = null;

let games = [];

function gamesList() {
  fetch("../steam.json")
    .then(async (response) => {
      await response.json().then(async (app) => {
      games = await app.applist.apps;
      createList();
      })
    })
}

async function init(){
  setInterval(async () => {
    if(contentBox != null)
    {
      clearInterval(this);
    }
    contentBox = await document.querySelector('.container-list');

  }, 10);

  gamesList();
}

async function createList(){

  const content = games.map((game) => {
    return(
      "<li className='item'>" + game.name +" <span> ID "+ game.appid +"</span>"+ "</li>"
    )
  });
  contentBox.innerHTML = `<ul className='contents'> ${content.join('')} </ul>`
}

export { createList, init }