
const questions = [
    {
        question:"who made the TajMahal?",
        answeres: [
            {
                text:"Akbar",correct:false,
            },
            {
                text:"ShahJahan",correct:true,
            },
            {
                text:"Mumtaj",correct:false,
            },
            {
                text:"Aurangjeb",correct:false,
            }
        ]
    },
    {
        question:"who is the first prime minister of india?",
        answeres: [
            {
                text:"jawaharlal nehru",correct:false,
            },
            {
                text:"dr. Baba Saheb Ambedker",correct:false,
            },
            {
                text:"dr. rajendraPrasad",correct:true,
            },
            {
                text:"lokmanya tilak",correct:false,
            }
        ]
    },
    {
        question:"who is the singer of 'shape of you' ?",
        answeres: [
            {
                text:"Arctic monkeys ",correct:false,
            },
            {
                text:"Ed shreen",correct:true,
            },
            {
                text:"selena gomez",correct:false,
            },
            {
                text:"justin biber",correct:false,
            }
        ]
    },
    {
        question:" Name the National bird of India?",
        answeres: [
            {
                text:"Peacock ",correct:true,
            },
            {
                text:"parrot",correct:false,
            },
            {
                text:"Crow",correct:false,
            },
            {
                text:"Hen",correct:false,
            }
        ]
    },
    {
        question:" Name the national flower of India?",
        answeres: [
            {
                text:"Lotus ",correct:true,
            },
            {
                text:"Lily",correct:false,
            },
            {
                text:"Rose",correct:false,
            },
            {
                text:"Champa",correct:false,
            }
        ]
    },
    

]

const questionEl = document.getElementById('question');
const answereEl = document.getElementById('answer-btn');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let quesionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = quesionNo + '. ' + currentQuestion.question;

    currentQuestion.answeres.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerHTML = answer.text;
        btn.classList.add('btn');
        answereEl.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click',selectAnswer);

        
    });
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answereEl.firstChild){
        answereEl.removeChild(answereEl.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }
    else{
        selectBtn.classList.add('incorrect');
    }

    Array.from(answereEl.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionEl.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}
 nextBtn.addEventListener('click',() => {

    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }

 })
startQuiz()


