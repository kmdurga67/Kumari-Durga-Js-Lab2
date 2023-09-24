const quiz = [
    {
        question: "JavaScript File Has An Extension of:",
        options: [".Java", ".js", ".javascript", ".xml"],
        correctAnswer: ".js"
    },
    {
        question: "The Tag is used To Give Heading To The Table.",
        options: ["Head", "Td", "Th", "Caption"],
        correctAnswer: "Caption"
    },
    {
        question: "IsNaN() Evaluates And Argument To Determine if Given Value:",
        options: ["Is Not a Null", "Is Not a Number", "Is Not a New Object", "None Of The Above"],
        correctAnswer: "Is Not a Number"
    },
    {
        question: "Function is Used To Parse a String To Int:",
        options: ["Integer.Parse", "Int.Parse", "Parse.Int", "None"],
        correctAnswer: "Int.Parse"
    },
    {
        question: "Event is Used To Check An Empty Text Box:",
        options: ["Onclick()", "OnFocus()", "OnBlur()", "None"],
        correctAnswer: "OnBlur()"
    }
];

//initial values
let currentQuestionIndex = 0;
let score = 0;
let percentage;

const choices = document.querySelectorAll(".buttons button");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const progressElement = document.getElementById("progress");

function getQuestion() {
    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion.options[index];
        choice.addEventListener("click", toCheckAnswer);
    });

    progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${quiz.length}`;

}

function toCheckAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const currentQuestion = quiz[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        percentage = (score / quiz.length) * 100;
        if (percentage === undefined) {
            percentage = 0;
        } else {
            percentage = (score / quiz.length) * 100;
        }
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        getQuestion();
    } else {
        toFinishQuiz();
    }
}

function toFinishQuiz() {
    if (percentage === undefined) {
        percentage = 0
        document.getElementById('quiz').style.color = "red";
        document.getElementById('quiz').style.fontSize = "40px";
    }else if(percentage >= 60){
        document.getElementById('quiz').style.color = "green";
        document.getElementById('quiz').style.fontSize = "40px";
    }else{
        document.getElementById('quiz').style.color = "red";
        document.getElementById('quiz').style.fontSize = "40px";
    }
    quizContainer.innerHTML = `
        <h1>Quiz Completed</h1>
        <p>Your Score is ${score} & percentage is ${percentage}%</p>
    `;
}

//call the method to load the questions
getQuestion();