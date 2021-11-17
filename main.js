// create an array of onjects with emoji questions

const emojiQuestionsArr = [
  { question: "⬛👁️🅿️🅿️",
    answer: "Black Eyed Peas"
  },
  { question: "🐑 ✌️",
    answer: "U2"
  },
  { question: "🐑 🐝 4️⃣ 0️⃣",
  answer: "UB40"
}
];


const displaySelected = document.querySelector("#emoji-display")

// const displayingQuestions = () => {
//   for (let i = 0; i < emojiQuestionsArr.length; i++) 
  
//   { 
//     const formattingQuestions = `<p>${emojiQuestionsArr[i].question}</p> `
// displaySelected.innerHTML += 
// formattingQuestions;
// }
// }
// displayingQuestions()
let counter = 0;
const displayingQuestions = () => {
  const formattingQuestions = `<p>${emojiQuestionsArr[counter].question}</p> `
  displaySelected.innerHTML = 
  formattingQuestions;
}
displayingQuestions()
// score display incrementing
const 

//Setting up enter button
const enterButton = document.querySelector("#enter")
const answerBox = document.getElementById("answerbox")
let answerInput = "";




enterButton.addEventListener("click", (event) =>{

  answerInput = answerBox.value

  

  if (answerInput === emojiQuestionsArr[counter].answer) {
    alert("Correct!");
    counter++;
    displayingQuestions()
  }
  else{
    
    alert("Try again!");
  }

})



