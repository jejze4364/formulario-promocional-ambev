const questions = [
  {
    question: "Qual é o tipo de ocasião em que você mais consome cerveja?",
    options: [
      { text: "Churrasco com familia/amigos", score: "brahma", points: 10 },
      { text: "Eventos noturnos", score: "spaten", points: 10,score: "brahma", points: 10 },
      { text: "Ao ar livre, conectando-se com a natureza", score: "corona", points: 12 },
      { text: "Festivais e eventos musicais", score: "budweiser", points: 13 },
      { text: "Eventos esportivos", score: "brahma", points: 5 },
      { text: "Jantares ou experiências gastronômicas", score: "stella", points: 5 },
    ],
  },
  {
    question: "Quanto você costuma gastar em uma cerveja?",
    options: [
      { text: "Até R$ 5", score: "brahma", points: 1 },
      { text: "De R$ 6 a R$ 9", score: "spaten", points: 2 },
      { text: "R$ 10 ou mais", score: "stella", points: 3 },
    ],
  },
  {
    question: "Qual o nível de amargor que você prefere na cerveja?",
    options: [
      { text: "Leve e suave", score: "brahma", points: 1 },
      { text: "Médio", score: "budweiser", points: 2 },
      { text: "Intenso e marcante", score: "spaten", points: 3, score: "spaten", points: 7  },
      {text: "Qualquer uma", score: "spaten", points: 3}

    ], 
  },
];

let currentQuestion = 0;
const scores = {
  brahma: 0,
  spaten: 0,
  corona: 0,
  budweiser: 0,
  stella: 0,
};

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";

  const question = questions[currentQuestion];

  const questionTitle = document.createElement("h2");
  questionTitle.innerText = question.question;
  questionContainer.appendChild(questionTitle);

  // Para a primeira pergunta, cria checkboxes
  if (currentQuestion === 0) {
    question.options.forEach((option) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = option.score;
      checkbox.dataset.points = option.points;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(option.text));
      questionContainer.appendChild(label);
      questionContainer.appendChild(document.createElement("br"));
    });

    const nextButton = document.createElement("button");
    nextButton.innerText = "Próxima";
    nextButton.className = "option-button";
    nextButton.addEventListener("click", handleCheckboxAnswers);
    questionContainer.appendChild(nextButton);
  } else {
    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.className = "option-button";
      button.addEventListener("click", () => handleAnswer(option.score, option.points));
      questionContainer.appendChild(button);
    });
  }
}

function handleCheckboxAnswers() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    const score = checkbox.value;
    const points = parseInt(checkbox.dataset.points, 10);
    scores[score] += points;
  });

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    calculateResult();
  }
}

function handleAnswer(score, points) {
  scores[score] += points;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    calculateResult();
  }
}

function calculateResult() {
  // Encontra a cerveja com a maior pontuação
  const maxScore = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

  // Redireciona para a página HTML correspondente
  const pages = {
    brahma: "brahma.html",
    spaten: "spaten.html",
    corona: "corona.html",
    budweiser: "budweiser.html",
    stella: "stella.html",
  };

  window.location.href = pages[maxScore];
}

// Carrega a primeira pergunta ao iniciar o script
loadQuestion();
