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
  },
  { question: "💋",
    answer: "Kiss"
  },
  { question: "🦍🦍",
    answer: "Gorillaz"
  },
  { question: "🔫🔫 🌹🌹",
    answer: "Guns N' Roses"
  },
  { question: "🏖️ 👦👦👦",
    answer: "The Beach Boys"
  },
  { question: "🐈 🐟 🍾 👴👴👴",
    answer: "Catfish And The Bottlemen"
  },
  { question: "🔨 🎃🎃🎃",
    answer: " The Smashing Pumpkins"
  },
  { question: "2️⃣ 🎒",
    answer: "2Pac"
  },
  { question: "🔴 🌡️ 🌶️🌶️",
    answer: "Red Hot Chili Peppers"
  },
  { question: "🇸🇪 🏠 🔫",
    answer: "Swedish House Mafia"
  },
  { question: "🌎 💨 🔥",
    answer: "Earth, Wind & Fire"
  },
  { question: "🟢 📆",
    answer: "Green Day"
  },
  { question: "🦅🦅🦅🦅",
    answer: "Eagles"
  },
  { question: "✂️ 👯‍♀️",
    answer: "Scissor Sisters"
  },
  { question: "🌶️ 👧👧",
    answer: "Spice Girls"
  },
  { question: "",
    answer: ""
  },
  { question: "",
    answer: ""
  },
  { question: "",
    answer: ""
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


//Setting up enter button
const enterButton = document.querySelector("#enter")
const answerBox = document.getElementById("answerbox")
let answerInput = "";


// score display incrementing
const score = document.querySelector("#score-total")

enterButton.addEventListener("click", (event) =>{

  answerInput = answerBox.value

  

  if (answerInput === emojiQuestionsArr[counter].answer) {
    alert("Correct!");
    counter++;
    score.innerHTML++;
    displayingQuestions()
  }
  else{
    
    alert("Try again!");
  }

})


//Black Eyed Peas
