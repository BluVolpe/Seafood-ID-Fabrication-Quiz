let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;

// Grabbing elements from the DOM
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const questionTracker = document.getElementById("question-tally");
const questionCounter = document.getElementById("question-counter");

// Adding event listener to the restart button to restart the quiz
restartButton.addEventListener("click", restartQuiz);

// Function to shuffle the array of choices for randomness
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the current question
function displayQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  if (currentQuestion.image) {
    const img = document.createElement("img");
    img.src = currentQuestion.image;
    img.alt = "Question image";
    questionElement.appendChild(img);
  }
  shuffleArray(currentQuestion.choice);
  currentQuestion.choice.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () =>
      selectAnswer(button, currentQuestion.answer)
    );
    choicesElement.appendChild(button);
  });
}

// Function to reset the state before displaying a new question
function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  const img = questionElement.querySelector("img");
  if (img) {
    questionElement.removeChild(img);
  }
}

// Function to handle the selection of an answer
function selectAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    highlightCorrectAnswer(correctAnswer);
  }
  Array.from(choicesElement.children).forEach((btn) => {
    btn.disabled = true;
  });
  updateTracker(button.classList.contains("correct"));
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

// Function to highlight the correct answer
function highlightCorrectAnswer(correctAnswer) {
  Array.from(choicesElement.children).forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });
}

// Function to update the question tracker
function updateTracker(isCorrect) {
  const span = document.createElement("span");
  span.classList.add(isCorrect ? "correct" : "wrong");
  questionTracker.appendChild(span);
  questionsAnswered++;
  questionCounter.textContent = `${questionsAnswered}/20`;
}

// Function to end the quiz
function endQuiz() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  const percentageScore = (score / 20) * 100;
  scoreElement.textContent = `${percentageScore}%`;
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionsAnswered = 0;
  questionTracker.innerHTML = "";
  questionCounter.textContent = `${questionsAnswered}/20`;
  quizContainer.style.display = "block";
  scoreContainer.style.display = "none";
  shuffleArray(questions);
  displayQuestion();
}

// Event listener to start the quiz when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  shuffleArray(questions);
  displayQuestion();
});
