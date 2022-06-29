const quizData = [
  {
    question: "What country has the longest coastline in the world?",
    a: "Russia",
    b: "Canada",
    c: "Mexico",
    d: "China",
    correct: "b"
  },
  {
    question: "What is the capital of Malta?",
    a: "Victoria",
    b: "Birgu",
    c: "Valleta",
    d: "Sliema",
    correct: "c"
  },
  {
    question:
      "What country is the newest in the world to be recognised by the UN?",
    a: "South Sudan",
    b: "South Africa",
    c: "Madagascar",
    d: "Jamaica",
    correct: "a"
  },
  {
    question: "In which UK city would you find the river Clyde?",
    a: "London",
    b: "Glasgow",
    c: "Liverpool",
    d: "Colchester",
    correct: "b"
  },
  {
    question:
      "If you travelled to the city of Volgograd, which country would be in?",
    a: "Uzbekistan",
    b: "Ukraine",
    c: "Poland",
    d: "Russia",
    correct: "d"
  },
  {
    question: "What is the capital of Canada?",
    a: "Toronto",
    b: "Montreal",
    c: "Vancouver",
    d: "Ottawa",
    correct: "d"
  },
  {
    question: "What is the largest desert in the world?",
    a: "Sahara Desert",
    b: "Antarctic Desert",
    c: "Great Australian",
    d: "Arctic Desert	",
    correct: "b"
  },
  {
    question: "How many boroughs are there in New York City?",
    a: "13",
    b: "9",
    c: "5",
    d: "3",
    correct: "c"
  },
  {
    question: "What is the capital of Peru?",
    a: "Lima",
    b: "Cusco",
    c: "Trujillo",
    d: "Piura",
    correct: "a"
  },
  {
    question: "How many countries still have the shilling as currency?",
    a: "6",
    b: "7",
    c: "10",
    d: "4",
    correct: "d"
  }
];
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const quiz = document.getElementById("quiz");

const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  nonSelectedAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_answer.innerText = currentQuizData.a;
  b_answer.innerText = currentQuizData.b;
  c_answer.innerText = currentQuizData.c;
  d_answer.innerText = currentQuizData.d;
}

function selectedAnswer() {
  let answer = undefined;

  answerElements.forEach(answerE => {
    if (answerE.checked) {
      answer = answerE.id;
    }
  });

  return answer;
}

function nonSelectedAnswers() {
  answerElements.forEach(answer => {
    answer.checked = false;
  });
}

submitButton.addEventListener("click", () => {
  const answer = selectedAnswer();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                    <h2>You finished the quiz with a score of: ${score}/${quizData.length}.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
    }
  }
});
