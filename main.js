

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
    answer: "The Smashing Pumpkins"
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
  { question: "🌈 🧘",
    answer: "Nirvana"
  },
  { question: "1️⃣✖️1️⃣=1️⃣   4️⃣1️⃣",
    answer: "Sum 41"
  },
  { question: "📻 🗣️",
    answer: "Radiohead"
  }

];


const displaySelected = document.querySelector("#emoji-display")


let counter = 0;
const displayingQuestions = () => {
  const formattingQuestions = `<p class = "emojis">${emojiQuestionsArr[counter].question}</p> `
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
  let answerCapitaliseArr = answerInput.split(" ")
  for( i = 0; i < answerCapitaliseArr.length; i++) {
    answerCapitaliseArr[i]= answerCapitaliseArr[i].toUpperCase()
  }

  if (answerInput.toLowerCase() === emojiQuestionsArr[counter].answer.toLowerCase()) {
    alert("Correct!");
    counter++;
    score.innerHTML++;
    displayingQuestions()
    answerBox.value = ""
  }
  else {
  
    alert("Try again!");
  }

})

// win alert button when 20th Q has been answered


