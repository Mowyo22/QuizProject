const questions = [
    {
        question: "Choose the correct one...",
        answers: [ 
            {text: "Farsight Systems Technology", correct: false},
            {text: "Fintrak Software Technology", correct: false},
            {text: "Fintrak Software Company", correct: true},
            {text: "Farsight Software Company", correct: false},
            {text: "Finsight Software Systems", correct: false},
        ]
    },
    {
        question: "What year was the name changed ?",
        answers: [ 
            {text: "2020", correct: false},
            {text: "2001", correct: false},
            {text: "2015", correct: false},
            {text: "2000", correct: false},
            {text: "2010", correct: true},
        ]
    },
    {
        question: "What Academy Cohort is this ?",
        answers: [ 
            {text: "Academy 3.0", correct: false},
            {text: "Academy 5.0", correct: false},
            {text: "Academy 1.0", correct: false},
            {text: "Academy 4.0", correct: true},
            {text: "Academy 2.0", correct: false},
        ]
    },
    {
        question: "What Course is this ?",
        answers: [ 
            {text: "Angular", correct: true},
            {text: "SQA", correct: false},
            {text: "C#", correct: false},
            {text: "DevOps", correct: false},
            {text: "DBMS", correct: false},
        ]
    },
    {
        question: "Who is the facilitator for the course ?",
        answers: [ 
            {text: "Seyi Adubi", correct: false},
            {text: "Ayomide Success", correct: false},
            {text: "Victor Oguniyi", correct: false},
            {text: "Bimbo Abioye", correct: false},
            {text: "Adeseto Akinwe", correct: true},
        ]
    },
    {
        question: "Choose the correct pair...",
        answers: [ 
            {text: "Angular, Seyi Adubi", correct: false},
            {text: "SQA, Victor Oguniyi", correct: false},
            {text: "C#, Kelvin Okonuboh", correct: false},
            {text: "DevOps, Joseph Umoh", correct: false},
            {text: "DBMS, Ahmad Gbadamosi", correct: true},
        ]
    },
    {
        question: "Which isn't an Academy course pair ?",
        answers: [ 
            {text: "Angular & LOB", correct: false},
            {text: "SQA & Client Management", correct: false},
            {text: "C# & Human Resource", correct: true},
            {text: "DevOps & Project Management", correct: false},
            {text: "DBMS & Software Implementation", correct: false},
        ]
    },
    {
        question: "Who is an Academy facilitator ?",
        answers: [ 
            {text: "Opeyemi Abidoye ", correct: false},
            {text: "Onikoyi Tajudeen", correct: false},
            {text: "Michael Tiamiyu", correct: false},
            {text: "Adebola Bello", correct: false},
            {text: "Anifowoshe Babatunde", correct: true},
        ]
    },
    {
        question: "Who isn't an Academy facilitator ?",
        answers: [ 
            {text: "Seyi Adubi", correct: false},
            {text: "Ayomide Success", correct: false},
            {text: "Victor Oguniyi", correct: false},
            {text: "Bimbo Abioye", correct: true},
            {text: "Adeseto Akinwe", correct: false},
        ]
    },
    {
        question: "Choose which isn't a career path in Tech ?",
        answers: [ 
            {text: "Software Developer", correct: false},
            {text: "Website Developer", correct: false},
            {text: "Data Analyst", correct: false},
            {text: "Fashion Designer", correct: true},
            {text: "Software Quality Assurance", correct: false},
        ]
    }
];

const questElement = document.getElementById("quest");
const answerButtons = document.getElementById("ans-btns");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questElement.innerHTML = questionNumber + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "TRY AGAIN";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();