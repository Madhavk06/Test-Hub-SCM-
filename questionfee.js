const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Link and Text Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Tool Machine Language", correct: false }
        ]
    },
    {
        question: "Which is not a HTML tag?",
        answers: [
            { text: "def", correct: true },
            { text: "div", correct: false },
            { text: "p", correct: false },
            { text: "h1", correct: false }
        ]
    },
    {
        question: "What is the smallest header in HTML?",
        answers: [
            { text: "h1", correct: false },
            { text: "h2", correct: false },
            { text: "h3", correct: false },
            { text: "h6", correct: true }
        ]
    },
    {
        question: "What is the full form of CSS?",
        answers: [
            { text: "Cascading Style Sheet", correct: true },
            { text: "Coloured Special Sheet", correct: false },
            { text: "Color and Style Sheet", correct: false },
            { text: "Cascading and Styling Source", correct: false }
        ]
    },
    {
        question: "Which tag is used to declare internal CSS?",
        answers: [
            { text: "style", correct: true },
            { text: "link", correct: false },
            { text: "script", correct: false },
            { text: "section", correct: false }
        ]
    },
    {
        question: "How can we access an ID in CSS?",
        answers: [
            { text: "#", correct: true },
            { text: "//", correct: false },
            { text: "/", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Advantage of using HTML is?",
        answers: [
            { text: "It is easier to use", correct: false },
            { text: "All browsers can display the document", correct: false },
            { text: "It works on all platforms", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which property allows an image link to show a text label?",
        answers: [
            { text: "alt", correct: true },
            { text: "str", correct: false },
            { text: "alternative", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "HTML files are saved by default with the extension?",
        answers: [
            { text: ".html", correct: true },
            { text: ".h", correct: false },
            { text: ".ht", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "We enclose HTML tags within?",
        answers: [
            { text: "{}", correct: false },
            { text: "<>", correct: true },
            { text: "!!", correct: false },
            { text: "None of the above", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const questionNumberElement = document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let globalTimer;
let timeLeft = 10; 
let startTime; 


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now(); 
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    
    questionNumberElement.innerHTML = `${questionNo}/${questions.length}`;
    
    questionElement.innerHTML = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(timer);
    timeLeft = 10; 
    timerElement.innerHTML = timeLeft;
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
    clearInterval(timer); 
}


function showScore() {
    resetState();
    
   
    let timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
    let percentage = (score / questions.length) * 100;
    let grade = getGrade(percentage); 
    
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}<br>Time Taken: ${timeTaken} seconds`;

   
    if (percentage >= 50) {
        questionElement.innerHTML += `<br>Congratulations! You passed the test.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html"; 
        };
    } else {
        questionElement.innerHTML += `<br>Sorry You failed.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html"; 
        };
    }
    timerElement.style.display = "none";
    nextButton.style.display = "block";
}


function getGrade(percentage) {
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else if (percentage >= 50) {
        return "E";
    } else {
        return "F";
    }
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerElement.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextButton(); 
        }
    }, 1000);
}
nextButton.addEventListener("click", handleNextButton);

startQuiz(); 