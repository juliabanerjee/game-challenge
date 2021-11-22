# game-challenge

The Concept

The idea of this game is an emoji quiz where the user guesses the band displayed by the combination of emojis used. There are 20 questions in this game. In order to move onto the question you have to get the previous question right.

The Design

The game has a clear and simple design which allows the user to easily navigate the page. It also has a lot of space around elements so as not to crowd the page or distract from the main elements such as the emoji questions that appear on the display or the text box and enter button where users input their answer.

The Code

- In the JavaScript, I created an array of objects to store the individual questions with question and answer elements in each object. As emojis are widely supported, I was able to simply copy and paste emojis into my JS document without any problems. When styling them later on, I simply had to use font-size to increase their size.

- In order to display the emojis, I used a <p></p> tag which I styled to look like a type of pictionary canvas. To display the questions, I used document.querySelector. I originally used a for loop get my questions to display. This worked well, however as I later discovered, I needed to be able to stop and start the loop depending on whether the user answered correctly or not. I ended up changing the for loop to an arrow function before which I created my own counter that would still looop through the questions. It also allowed me to make it so the same question displayed until the user guessed correctly, after which the next question would display. 

- I also added an eventListener on the enter button so that when it was clicked the user's answer was saved and compared with the .answer in the specific object. If it matched an alert would appear on the screen informing the user of whether they were correct or not. Within this function, I used a for loop and an if/else statment in which I added the alerts. Under the if statement responsible for correct answers, I also used counter++ to trigger the next question displaying when correct. I also linked this to my score display and using score.innerHTML++, I was able to increment the score.

- In order to make the quiz slightly-more user friendly, I used .toLowerCase() on the .answer in the object and the inputs so that the inputted answers and the answers in each object would be converted to lower case and compared against each other afterwards. This got rid of the case-sensitivity in the quiz 


Extra Features To Add

- Confetti either after each correct answer or after all 20 questions have been answered correctly

- Turning the alerts into banners that pop up on the screen and disappear when the next question displays.

- A timer so that the user is time-pressured and so they can move to the next question without having to correctly answer. An alternative to this would be a skip button that allows the user to move on to the next question if they are stuck

- A reset or start again button that displays at the end of the quiz that will refresh the page and take it back to the start.

- A hint button that will give users up to 3 letters that can either be used in one question or across many questions.

