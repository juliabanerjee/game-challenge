

// create an array of onjects with emoji questions
const emojiQuestionsArr = [
  { question: "β¬ποΈπΏοΈπΏοΈ",
    answer: "Black Eyed Peas"
  },
  { question: "π βοΈ",
    answer: "U2"
  },
  { question: "π π 4οΈβ£ 0οΈβ£",
  answer: "UB40"
  },
  { question: "π",
    answer: "Kiss"
  },
  { question: "π¦π¦",
    answer: "Gorillaz"
  },
  { question: "π«π« πΉπΉ",
    answer: "Guns N' Roses"
  },
  { question: "ποΈ π¦π¦π¦",
    answer: "The Beach Boys"
  },
  { question: "π π πΎ π΄π΄π΄",
    answer: "Catfish And The Bottlemen"
  },
  { question: "π¨ πππ",
    answer: "The Smashing Pumpkins"
  },
  { question: "2οΈβ£ π",
    answer: "2Pac"
  },
  { question: "π΄ π‘οΈ πΆοΈπΆοΈ",
    answer: "Red Hot Chili Peppers"
  },
  { question: "πΈπͺ π  π«",
    answer: "Swedish House Mafia"
  },
  { question: "π π¨ π₯",
    answer: "Earth, Wind & Fire"
  },
  { question: "π’ π",
    answer: "Green Day"
  },
  { question: "π¦π¦π¦π¦",
    answer: "Eagles"
  },
  { question: "βοΈ π―ββοΈ",
    answer: "Scissor Sisters"
  },
  { question: "πΆοΈ π§π§",
    answer: "Spice Girls"
  },
  { question: "π π§",
    answer: "Nirvana"
  },
  { question: "1οΈβ£βοΈ1οΈβ£=1οΈβ£   4οΈβ£1οΈβ£",
    answer: "Sum 41"
  },
  { question: "π» π£οΈ",
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


