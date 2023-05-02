let questions = [];

async function ChoiceQuestion(url){
  fetch(url)
  .then((response) => {
    response.json()
    .then(async (questions) => {
      questions = questions.questions;
      console.log(questions);

    });
  })
}

export {ChoiceQuestion}