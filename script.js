const sumScores = (scores) => {
  // Return the scores object directly since we want to maintain the structure
  return scores;
};

// Questions and options remain the same
const questions = [
  {
    question: "Qual a sua faixa etária?",
    options: [
      { 
        text: "De 18 a 27 anos", 
        scores: sumScores({ 
        }) 
      },
      { 
        text: "De 28 a 37 anos", 
        scores: sumScores({ 
        }) 
      },
      { 
        text: "De 38 a 45 anos", 
        scores: sumScores({ 
        }) 
      },
      { 
        text: "Mais de 45 anos", 
        scores: sumScores({ 
        }) 
      },
    ],
  },
  {
    question: "Quanto você costuma gastar em uma cerveja? (unidade)",
    options: [
      { 
        text: "Até R$ 5", 
        scores: sumScores({ 
          brahma: 25, spaten: 10, corona: 10, bud: 20, stella: 10, 
          budzero: 15, coronacero: 5, becks: 5, antarctica: 25, michelob: 5, brahmazero: 25, 
          skol: 25, bohemia: 25, original: 15, patagonia: 5, colorado: 5,
        }) 
      },
      { 
        text: "Entre R$ 6 e R$ 7", 
        scores: sumScores({ 
          brahma: 20, spaten: 20, corona: 20, bud: 25, stella: 20, 
          budzero: 25, coronacero: 15, becks: 10, antarctica: 10, michelob: 15, brahmazero: 15,
          skol: 20, bohemia: 20, original: 25, patagonia: 10, colorado: 10,
        }) 
      },
      { 
        text: "Entre R$ 8 e R$ 9", 
        scores: sumScores({ 
          brahma: 10, spaten: 25, corona: 25, bud: 20, stella: 15, 
          budzero: 10, coronacero: 20, becks: 20, antarctica: 5, michelob: 20, brahmazero: 5,
          skol: 5, bohemia: 5, original: 20, patagonia: 15, colorado: 15,
        }) 
      },
      { 
        text: "Mais de R$ 10", 
        scores: sumScores({ 
          brahma: 5, spaten: 20, corona: 25, bud: 5, stella: 15, 
          budzero: 5, coronacero: 25, becks: 45, antarctica: 5, michelob: 45, brahmazero: 5,
          skol: 5, bohemia: 5, original: 5, patagonia: 45, colorado: 45,
        }) 
      },
    ],
  },  
  {
    question: "Selecione 3 tipos de ocasiões em que você mais consome cerveja?",
    options: [
      { 
        text: "Churrasco com família ou amigos", 
        scores: sumScores({ 
          brahma: 25, spaten: 15, corona: 15, bud: 20, stella: 20, 
          budzero: 10, coronacero: 10, becks: 10, antarctica: 20, michelob: 5, brahmazero: 10,
          skol: 20, bohemia: 15, original: 20, patagonia: 5, colorado: 5,
        }) 
      },
      { 
        text: "Eventos de trabalho", 
        scores: sumScores({ 
          brahma: 5, spaten: 10, corona: 15, bud: 10, stella: 10, 
          budzero: 20, coronacero: 20, becks: 10, antarctica: 5, michelob: 20, brahmazero: 15,
          skol: 5, bohemia: 5, original: 5, patagonia: 25, colorado: 25,
          
        }) 
      },
      { 
        text: "Eventos noturnos ou festas", 
        scores: sumScores({ 
          brahma: 15, spaten: 20, corona: 5, bud: 20, stella: 5, 
          budzero: 5, coronacero: 5, becks: 25, antarctica: 5, michelob: 5, brahmazero: 10,
          skol: 5, bohemia: 5, original: 5, patagonia: 10, colorado: 5,
        }) 
      },
      { 
        text: "Momentos ao ar livre, como trilhas ou piqueniques", 
        scores: sumScores({ 
          brahma: 5, spaten: 5, corona: 25, bud: 5, stella: 15, 
          budzero: 5, coronacero: 25, becks: 5, antarctica: 5, michelob: 15, brahmazero: 5,
          skol: 5, bohemia: 5, original: 5, patagonia: 20, colorado: 5, 
        }) 
      },
      { 
        text: "Festivais e eventos musicais", 
        scores: sumScores({ 
          brahma: 5, spaten: 5, corona: 20, bud: 25, stella: 5, 
          budzero: 15, coronacero: 15, becks: 25, antarctica: 5, michelob: 5, brahmazero: 5,
          skol: 5, bohemia: 5, original: 5, patagonia: 5, colorado: 5,  
        }) 
      },
      { 
        text: "Jantares ou experiências gastronômicas", 
        scores: sumScores({ 
          brahma: 5, spaten: 5, corona: 15, bud: 5, stella: 25, 
          budzero: 5, coronacero: 15, becks: 10, antarctica: 5, michelob: 20, brahmazero: 5,
          skol: 5, bohemia: 5, original: 5, patagonia: 20, colorado: 25,   
        }) 
      },
      { 
        text: "Acompanhando jogos de futebol", 
        scores: sumScores({ 
          brahma: 25, spaten: 5, corona: 5, bud: 20, stella: 5, 
          budzero: 5, coronacero: 5, becks: 5, antarctica: 20, michelob: 5, brahmazero: 20,
          skol: 20, bohemia: 15, original: 15, patagonia: 5, colorado: 5,
        }) 
      },
      { 
        text: "Acompanhando lutas", 
        scores: sumScores({ 
          brahma: 5, spaten: 25, corona: 5, bud: 5, stella: 5, 
          budzero: 5, coronacero: 5, becks: 5, antarctica: 5, michelob: 5, brahmazero: 5,
          skol: 5, bohemia: 5, original: 5, patagonia: 5, colorado: 5, 
        }) 
      },
      { 
        text: "Acompanhando atividades físicas diversas", 
        scores: sumScores({ 
          brahma: 15, spaten: 15, corona: 25, bud: 5, stella: 5, 
          budzero: 15, coronacero: 15, becks: 5, antarctica: 5, michelob: 20, brahmazero: 15,
          skol: 5, bohemia: 5, original: 5, patagonia: 5, colorado: 5,  
        }) 
      },
      { 
        text: "Após (ou até durante) aquela corrida", 
        scores: sumScores({ 
          brahma: 5, spaten: 5, corona: 20, bud: 5, stella: 15, 
          budzero: 20, coronacero: 20, becks: 5, antarctica: 5, michelob: 25, brahmazero: 15,
          skol: 5, bohemia: 5, original: 5, patagonia: 5, colorado: 5,  
        }) 
      },
      { 
        text: "Assistindo eventos esportivos", 
        scores: sumScores({ 
          brahma: 25, spaten: 20, corona: 5, bud: 10, stella: 5, 
          budzero: 5, coronacero: 5, becks: 5, antarctica: 20, michelob: 5, brahmazero: 20,
          skol: 5, bohemia: 5, original: 5, patagonia: 5, colorado: 5,  
        }) 
      },
    ],
  },
  {
    question: "Qual o perfil de sabor que você prefere?",
    options: [
      { 
        text: "Leve e refrescante", 
        scores: sumScores({ 
          brahma: 25, spaten: 15, corona: 25, bud: 25, stella: 20, 
          budzero: 25, coronacero: 20, becks: 15, antarctica: 25, michelob: 20, brahmazero: 20,
          skol: 25, bohemia: 20, original: 25, patagonia: 15, colorado: 5,
        }) 
      },
      { 
        text: "Moderado e equilibrado", 
        scores: sumScores({ 
          brahma: 20, spaten: 25, corona: 25, bud: 20, stella: 15, 
          budzero: 20, coronacero: 15, becks: 25, antarctica: 20, michelob: 20, brahmazero: 15,
          skol: 15, bohemia: 20, original: 20, patagonia: 20, colorado: 25,
        }) 
      },
      { 
        text: "Marcante e encorpado", 
        scores: sumScores({ 
          brahma: 15, spaten: 25, corona: 5, bud: 10, stella: 5, 
          budzero: 10, coronacero: 10, becks: 25, antarctica: 10, michelob: 15, brahmazero: 10,
          skol: 10, bohemia: 10, original: 25, patagonia: 25, colorado: 25,
        }) 
      },
      { 
        text: "Flexível, depende da ocasião", 
        scores: sumScores({ 
          brahma: 25, spaten: 5, corona: 15, bud: 20, stella: 25, 
          budzero: 15, coronacero: 20, becks: 25, antarctica: 10, michelob: 25, brahmazero: 15,
          skol: 25, bohemia: 25, original: 15, patagonia: 25, colorado: 25,  
        }) 
      },
    ],
  },
  {
    question: "Você quer uma cerveja zero álcool?",
    options: [
      { 
        text: "Sim", 
        scores: sumScores({ 
          budzero: 25, coronacero: 25, michelob: 20, brahmazero: 25,
        }) 
      },
      { 
        text: "Não", 
        scores: sumScores({ 
          brahma: 25, spaten: 25, corona: 25, bud: 25, stella: 25, becks: 25, antarctica: 25, michelob: 25,
          skol: 25, bohemia: 25, original: 25, patagonia: 25, colorado: 25,
        }) 
      },
      { 
        text: "Nunca provei", 
        scores: sumScores({ 
          budzero: 5, coronacero: 10, michelob: 10, brahmazero: 5,

        }) 
      },
    ],
  },
    
  {
    question: "Qual sua embalagem preferida para a cerveja?",
    options: [
      { text: "Lata 350 ml", scores: sumScores({ lt350: 1 }) },
      { text: "Long Neck", scores: sumScores({ ln: 100 }) },
      { text: "Lata 473 ml (Latão)", scores: sumScores({ lt473: 1 }) },
      { text: "Lata 279 ml (Latinha)", scores: sumScores({ lt279: 1 }) },
      { 
        text: "Outro", 
        scores: sumScores({ lt350: 0 }), 
        isOther: true // Marca essa opção como 'outro'
      }
    ],
    multipleChoice: false,
  }
  
];

const pages = {
  brahma: "brahma.html",
  spaten: "spaten.html",
  corona: "corona.html",
  bud: "budweiser.html",
  stella: "stella.html",
  budzero: "budzero.html",
  coronacero: "coronacero.html",
  becks: "becks.html",
  antarctica: "antarctica.html",
  michelob: "michelob.html",
  brahmazero: "brahmazero.html",
  skol: "skol.html",          // Adicionando Skol
  bohemia: "bohemia.html",    // Adicionando Bohemia
  original: "original.html",  // Adicionando Original
  patagonia: "patagonia.html",// Adicionando Patagonia
  colorado: "colorado.html"   // Adicionando Colorado
};


  const friendlyNames = {
    skol: "Skol", bohemia: "Bohemia", original: "Original", patagonia: "Patagonia", colorado: "Colorado",
    brahma: "Brahma", spaten: "Spaten", corona: "Corona", bud: "Budweiser", stella: "Stella Artois", budzero: "Bud Zero",
    coronacero: "Corona Cero", becks: "Beck's", antarctica: "Antarctica", lt350: "Lata 350ml",
    ln: "Long Neck", lt473: "Lata 473ml (Latão)", lt279: "Lata 279ml (Latinha)", michelob: "Michelob Ultra", brahmazero: "Brahma Zero",
  };
  

// Initial state
let currentQuestion = 0;
let preferredPackaging = '';
const scores = {
  skol: 0, bohemia: 0, original: 0, patagonia: 0, colorado: 0,
  brahma: 0, spaten: 0, corona: 0, bud: 0, stella: 0, budzero: 0, coronacero: 0,
  becks: 0, antarctica: 0, lt350: 0, ln: 0, lt473: 0, lt279: 0, michelob: 0, brahmazero: 0,
};

let questionHistory = [];

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  if (!questionContainer) return; // Guard clause for missing container
  
  questionContainer.innerHTML = "";
  const question = questions[currentQuestion];
  const questionTitle = document.createElement("h2");
  questionTitle.innerText = question.question;
  questionContainer.appendChild(questionTitle);

  if (question.multipleChoice) {
    renderMultipleChoice(question, questionContainer);
  } else {
    renderSingleChoice(question, questionContainer);
  }

  if (currentQuestion > 0) {
    const backButton = document.createElement("button");
    backButton.innerText = "Voltar";
    backButton.addEventListener("click", goBack);
    backButton.classList.add("voltar");
    questionContainer.appendChild(backButton);
  }
}

function renderMultipleChoice(question, container) {
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  
  if (currentQuestion === 2) { 
    optionsContainer.dataset.question = "2";
    
    // Ajuste responsivo para dispositivos móveis
    if (window.innerWidth <= 768) {
      optionsContainer.style.gridTemplateColumns = "1fr";
    } else {
      optionsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    
    optionsContainer.style.gap = "10px";
  }

  optionsContainer.classList.add("options-container");
  const radioQuestions = document.querySelectorAll('.radio-question');
  radioQuestions.forEach(question => {
      const radioButtons = question.querySelectorAll('input[type="radio"]');
      const container = question.querySelector('.question-options');
      
      // Garante que os itens de escolha única (radio buttons) fiquem em uma coluna
      container.style.display = 'grid';
      container.style.gridTemplateColumns = '1fr'; // Isso faz com que todos os botões fiquem em uma coluna

      // Adiciona uma margem para as opções de escolha
      radioButtons.forEach(radio => {
          radio.style.marginBottom = '10px'; // Ajuste a margem conforme necessário
      });
  });
  
  if (currentQuestion === 2) { 
    optionsContainer.style.display = "grid";
    optionsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
    optionsContainer.style.gap = "10px";
  }

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.optionIndex = index;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(option.text));
    optionsContainer.appendChild(label);
  });

  container.appendChild(optionsContainer);

  const nextButton = document.createElement("button");
  nextButton.innerText = "Próxima";
  nextButton.addEventListener("click", () => {
    const checkedBoxes = optionsContainer.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length > 0) {
      handleMultipleChoiceAnswers();
    } else {
      alert("Por favor, selecione pelo menos uma opção.");
    }
  });
  container.appendChild(nextButton);
}

function renderSingleChoice(question, container) {
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  
  if (currentQuestion === 2) {
    optionsContainer.dataset.question = "2";
  }

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.addEventListener("click", () => {
      // Remove selected class from all buttons
      optionsContainer.querySelectorAll("button").forEach(btn => 
        btn.classList.remove("selected")
      );
      // Add selected class to clicked button
      button.classList.add("selected");
      handleAnswer(option.scores);
    });
    optionsContainer.appendChild(button);
  });

  container.appendChild(optionsContainer);
}

function handleMultipleChoiceAnswers() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const question = questions[currentQuestion];
  const totalScores = {};
  
  checkboxes.forEach((checkbox) => {
    const index = parseInt(checkbox.dataset.optionIndex);
    const optionScores = question.options[index].scores;
    
    Object.entries(optionScores).forEach(([key, value]) => {
      totalScores[key] = (totalScores[key] || 0) + value;
    });
  });
  
  updateScores(totalScores);
  questionHistory.push(currentQuestion);
  nextQuestion();
}

function handleAnswer(scoresToAdd) {
  updateScores(scoresToAdd);
  questionHistory.push(currentQuestion);
  nextQuestion();
}

function updateScores(scoresToAdd) {
  Object.entries(scoresToAdd).forEach(([key, value]) => {
    if (scores.hasOwnProperty(key)) {
      scores[key] += value;
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    calculateResult();
  }
}

function goBack() {
  if (questionHistory.length > 0) {
    currentQuestion = questionHistory.pop();
    // Reset scores from the previous question
    const lastQuestionScores = questions[currentQuestion].options.reduce((acc, option) => {
      Object.entries(option.scores).forEach(([key, value]) => {
        if (acc[key]) acc[key] = Math.max(0, acc[key] - value);
      });
      return acc;
    }, {...scores});
    Object.assign(scores, lastQuestionScores);
    loadQuestion();
  }
}

function calculateResult() {
  const sortedScores = Object.entries(scores)
    .filter(([key]) => pages.hasOwnProperty(key))
    .sort(([, a], [, b]) => b - a); // Ordena os scores do maior para o menor
  const topBeer = sortedScores[0][0]; // Seleciona a marca com maior pontuação

  const packagingScores = { lt350: scores.lt350, ln: scores.ln, lt473: scores.lt473, lt279: scores.lt279 };
  const topPackaging = Object.entries(packagingScores).sort(([, a], [, b]) => b - a)[0][0]; // Seleciona a embalagem com maior pontuação

  // Textos específicos para cada marca
  const brandMessages = {
    brahma: `
      Brahma - A cerveja do Brasil
      Caminhamos junto das histórias brasileiras, sempre com alegria. 
      Nossa tradição tem como base esses momentos partilhados na mesa de bar, 
      em cada brinde, em cada gol marcado, em cada sorriso e em cada pedido por mais Brahma!
    `,
    brahmazero: `
      Brahma Zero - O sabor de sempre, sem álcool!
      Ideal para quem não abre mão da qualidade Brahma, mas quer uma alternativa leve e refrescante. 
      Perfeita para qualquer momento do dia.
    `,
    spaten: `
      Spaten - A origem da pureza!
      Fundada em 1397, Spaten é a representação da tradição alemã, com uma cerveja puro malte 
      que traz o autêntico sabor da Alemanha para sua mesa. Desfrute da excelência em cada gole.
    `,
    corona: `
      Corona - O sabor da vida ao ar livre!
      Com um toque refrescante e um estilo único, Corona é a escolha perfeita para momentos ao ar livre. 
      Aproveite o pôr do sol, a praia e a leveza que só Corona pode oferecer.
    `,
    coronacero: `
      Corona Cero - Leveza e refrescância, sem álcool!
      Com o mesmo sabor único, Corona Cero é a opção perfeita para quem busca uma alternativa sem álcool, 
      sem abrir mão do estilo e da qualidade.
    `,
    budweiser: `
      Budweiser - A King of Beers!
      Inspirando momentos únicos com amigos, Budweiser é mais que uma cerveja, é um estilo de vida. 
      Seja em festas, shows ou no churrasco, Bud é a sua companhia ideal.
    `,
    budzero: `
      Bud Zero - Sabor autêntico, zero álcool!
      Com o mesmo DNA da Budweiser, Bud Zero é a opção perfeita para momentos descontraídos e sem preocupações. 
      Experimente o melhor sabor, sem álcool.
    `,
    stella: `
      Stella Artois - O sabor da sofisticação!
      Acompanha seus momentos gastronômicos com excelência. 
      Stella Artois é a combinação perfeita de sabor, tradição e qualidade.
    `,
    becks: `
      Beck's - A tradição alemã em cada gole!
      Elaborada com ingredientes selecionados e puro malte, Beck's é a escolha certa para os apreciadores de qualidade. 
      Uma experiência autêntica para momentos únicos.
    `,
    antarctica: `
      Antarctica - A boa do Brasil!
      Perfeita para compartilhar momentos de alegria e diversão. 
      Antarctica é sinônimo de leveza, frescor e amizade, a escolha certa para todas as ocasiões.
    `,
    michelob: `
      Michelob Ultra - Equilíbrio perfeito entre sabor e leveza!
      Feita para quem busca um estilo de vida ativo e não abre mão de uma boa cerveja. 
      Michelob é sua parceira nos melhores momentos.
    `,
    colorado: `
      Colorado - A arte do sabor brasileiro!
      Com ingredientes típicos do Brasil, Colorado oferece uma experiência única e cheia de personalidade. 
      Celebre a autenticidade com cada gole.
    `,
    patagonia: `
      Patagonia - A natureza em sua essência!
      Inspirada nas paisagens da Patagônia, esta cerveja é feita com ingredientes naturais, 
      proporcionando uma experiência refrescante e autêntica.
    `,
    original: `
      Original - Tradição e qualidade desde 1931!
      Uma cerveja que faz parte da história brasileira, perfeita para momentos de celebração e alegria. 
      Saboreie a Original!
    `,
    bohemia: `
      Bohemia - A primeira cerveja do Brasil!
      Desde 1853, Bohemia combina tradição e inovação para criar sabores únicos. 
      Uma cerveja que é parte da história e do futuro.
    `,
    skol: `
      Skol - Desce redondo!
      A escolha perfeita para quem busca leveza e diversão. 
      Skol é sinônimo de alegria, amizade e momentos inesquecíveis.
    `
  };
  

  // Recupera o texto personalizado da marca
  const brandMessage = brandMessages[topBeer] || "Descubra mais sobre essa incrível cerveja!";
  const packagingMessage = `Incrível! A marca ${friendlyNames[topBeer]} na embalagem ${friendlyNames[topPackaging]} é uma excelente escolha para o seu perfil.`;

  const resultContainer = document.getElementById("question-container");
  resultContainer.innerHTML = `
    <div class="result-wrapper">
      <div class="result-content">
        <div class="congratulations">
          <span class="emoji">🎊</span>
          <h2>Parabéns!</h2>
          <span class="emoji">🎊</span>
        </div>
        
        <div class="match-result">
          <h3>
            <a href="${pages[topBeer]}" class="beer-link">${friendlyNames[topBeer]}</a>
          </h3>
          <p>${brandMessage}</p>
        </div>

        <div class="packaging-result">
          <p>${packagingMessage}</p>
        </div>
          
        <div class="promo-section">
          <p>Agora aproveite! Clique no botão abaixo e receba promoções incríveis:</p>
        </div>
        
        <button onclick="redirectToPromo()" class="promo-button">
          CONFIRA AS PROMOÇÕES
        </button>
      </div>
    </div>
  `;

  // Add the enhanced styles
  const resultStyles = `/* Estilo base para o contêiner de opções */
.options-container {
  display: flex; /* Flexbox para centralizar e alinhar */
  flex-direction: column; /* Alinha os elementos em coluna */
  gap: 15px; /* Espaçamento vertical entre as opções */
}

/* Layout exclusivo para perguntas de múltipla escolha */
.options-container.checkbox {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dividido em duas colunas */
  gap: 10px; /* Espaçamento entre os itens */
  width: 100%; /* Garantir que o contêiner ocupe toda a largura */
}

#question-container {
  display: flex;
  flex-direction: column; /* Corrigido para flex-direction */
  width: 100%;
  margin: 0;
  padding: 0;
}

.result-wrapper {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.result-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.congratulations {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.congratulations h2 {
  font-size: 2.5rem;
  margin: 0;
  color: #333;
}

.emoji {
  font-size: 2rem;
}

.match-result {
  text-align: center;
  width: 100%;
}

.match-result h3 {
  color: #666;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.beer-link {
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  color: #0077c8;
  border: 2px solid #0077c8;
  border-radius: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.beer-link:hover {
  background: #0077c8;
  color: white;
  transform: translateY(-2px);
}

.promo-section {
  text-align: center;
  width: 100%;
  padding: 0 1rem;
}

.promo-section p {
  margin: 1rem 0;
  color: #555;
  line-height: 1.6;
}

.promo-message {
  font-size: 0.9rem;
  color: #666;
}

.packaging-result {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  width: 100%;
}

.steps-container {
  width: 100%;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
}

.steps-container h3 {
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.steps-container ol {
  margin: 0;
  padding-left: 1.5rem;
}

.steps-container li {
  margin: 0.5rem 0;
  color: #555;
  line-height: 1.4;
}

.promo-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  color: white;
  background: #0077c8;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: auto;
}

.promo-button:hover {
  background: #005fa3;
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .options-container.checkbox {
    grid-template-columns: 3fr; /* Colocar itens em uma única coluna em telas pequenas */
  }

  .options-container label {
    font-size: 14px; /* Ajusta o tamanho da fonte */
    word-wrap: break-word; /* Quebra textos longos */
  }

  .result-wrapper {
    padding: 1rem;
  }

  .congratulations h2 {
    font-size: 2rem;
  }

  .beer-link {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }

  .result-content {
    gap: 1.5rem;
  }

  .button.voltar {
    background: white;
    color: #0079c0;
    border: 2px solid #0079c0;
  }

  .button.voltar:hover {
    background: #f8f9fa;
    border-color: #005490;
    color: #005490;
  }
}
`;

  // Add styles to document
  if (!document.getElementById('result-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'result-styles';
    styleSheet.textContent = resultStyles;
    document.head.appendChild(styleSheet);
  }
}
function redirectToPromo() {
  window.location.href = 'mercados.html';
}

// Initialize the quiz
window.onload = loadQuestion;