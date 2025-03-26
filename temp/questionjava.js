const questions =[
    {
        question:"What is the size of the int data type in Java?",
        answers:[
            {text: "8 bits",correct:false},
            {text: "16 bits",correct:false},
            {text: "64 bits",correct:false},
            {text: "32 bits",correct:true},


        ]
    },
    {

        question:"Which of the following is not a Java keyword?",
        answers:[
            {text: "static",correct:false},
            {text: "Boolean",correct:true},
            {text: "private",correct:false},
            {text: "void",correct:false},


        ]

    },
    {
        question:" Which method is used to start the execution of a Java program?",
        answers:[
            {text: "start()",correct:false},
            {text: "main()",correct:true},
            {text: "run()",correct:false},
            {text: "begin()",correct:false},


        ]
    },
    {

        question:"Which of the following is a correct way to declare an array in Java?",
        answers:[
            {text: "int[] arr;",correct:false},
            {text: "int arr[];",correct:true},
            {text: "Both A and B",correct:false},
            {text: "None of the above",correct:false},


        ]

    },
    {

        question:"What is the default value of a boolean variable in Java?",
        answers:[
            {text: "true",correct:false},
            {text: "false",correct:true},
            {text: "0",correct:false},
            {text: "null",correct:false},


        ]

    },
    {

        question:"Which of the following is used to create an object in Java?",
        answers:[
            {text: "new",correct:true},
            {text: "create",correct:false},
            {text: "instance",correct:false},
            {text: "object",correct:false},


        ]

    },
    {

        question:"Which of these access modifiers allows visibility only within the same package?",
        answers:[
            {text: "private",correct:true},
            {text: "public",correct:false},
            {text: "protected",correct:false},
            {text: "default(no modifier)",correct:false},


        ]

    },
    {

        question:"What will be the output of the following code? System.out.println(5 + 5)",
        answers:[
            {text: "55",correct:false},
            {text: "5",correct:false},
            {text: "10",correct:true},
            {text: "10.0",correct:false},


        ]

    },
    {

        question:"Which interface is implemented by the classes that allow for iteration in Java?",
        answers:[
            {text: "List",correct:false},
            {text: "Iterable",correct:true},
            {text: "collection",correct:false},
            {text: "set",correct:false},


        ]

    },
    
    {
        question:"What does the final keyword indicate when applied to a variable?",
        answers:[
            {text: "The variable can be modified",correct:false},
            {text: "The variable cannot be changed once assigned",correct:true},
            {text: "The variable is static",correct:false},
            {text: "The variable is a constant but can be overridden",correct:false},


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
let timeLeft = 10; // Timer for each question
let globalTimeLeft = 100; // Global timer (5 minutes)
let startTime; // Track start time

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now(); // Record start time
    nextButton.innerHTML = "Next";
    showQuestion();
    startGlobalTimer(); // Start the global timer when the quiz starts
}

// Display the current question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    // Update the question number (e.g., 1/10)
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

    startTimer(); // Start the timer for this question
}

// Reset the state for the next question
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    clearInterval(timer); // Clear any previous question timer
    timeLeft = 15; // Reset the time to 15 seconds for the next question
    timerElement.innerHTML = timeLeft;
}

// Handle answer selection
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
    clearInterval(timer); // Stop the timer after an answer is selected
}

// Show the final score and grade
function showScore() {
    resetState();
    
    // Calculate the time taken
    let timeTaken = ((Date.now() - startTime) / 1000).toFixed(2); // Time taken in seconds
    let percentage = (score / questions.length) * 100;
    let grade = getGrade(percentage);  // Get the letter grade
    
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}<br>Time Taken: ${timeTaken} seconds`;

    // Display a congratulatory or encouraging message
    if (percentage >= 50) {
        questionElement.innerHTML += `<br>Congratulations! You passed the test.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html";  // Redirect to another test if score >= 70
        };
    } else {
        questionElement.innerHTML += `<br>Sorry You failed.`;
        nextButton.innerHTML = "Back";
        nextButton.onclick = function () {
            window.location.href = "dash.html";  // Redirect to retake the quiz if score < 70
        };
    }
    timerElement.style.display = "none";
    nextButton.style.display = "block";
}

// Get the letter grade based on the percentage
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

// Handle next button click (move to next question or show final score)
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Start the timer for the current question
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerElement.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleNextButton(); // Move to the next question when the time runs out
        }
    }, 1000);
}

// Start the global timer (5 minutes)
function startGlobalTimer() {
    globalTimer = setInterval(function () {
        globalTimeLeft--;
        if (globalTimeLeft <= 0) {
            clearInterval(globalTimer);
            handleNextButton();
        }
    }, 1000);
}

nextButton.addEventListener("click", handleNextButton);
startQuiz(); // Initialize the quiz