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

const displayingQuestions = () => {
  for (let i = 0; i < emojiQuestionsArr.length; i++) 
  
  { 
    const formattingQuestions = `<p>${emojiQuestionsArr[i].question}</p> `
displaySelected.innerHTML += 
formattingQuestions;
}
}
displayingQuestions()



// template string
//Setting up enter button
const enterButton = document.querySelector("#enter")

const answer = "";
