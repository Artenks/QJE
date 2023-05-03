let questions = [];
let pass = [];
let question = "";

let title;

async function ChoiceQuestion(url){
  fetch(url)
  .then((response) => {
    response.json()
    .then(async (questions) => {
      pass = questions.pass;
      questions = questions.questions;

      while(question == "")
      {
        let randomIndex = parseInt(Math.random() * questions.length)
        // console.log(pass.length);
        // if(pass.length > 0)
        // {
        //   for(var i = 0; i <= pass.length-1; i++)
        //   {
        //     if(pass[i].question == questions[randomIndex].question)
        //     {
        //       console.log(`${randomIndex}: não foi permitido`)
        //       randomIndex = parseInt(Math.random() * questions.length)
        //       i = -1;
        //     }
        //   }
        // }
          console.log(questions[randomIndex]);
          question = questions[randomIndex].question;
          title.innerHTML = question;
      }
    });

  })
  
}

function foundTitle(classname){
    setTimeout(() => {
      title = document.querySelector(classname)
  
      clearInterval(this);
    }, 10);
}

export {ChoiceQuestion, foundTitle}