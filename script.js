const questions = [
    {
      question:  "What is the capital of France?",
      answers: [
        { text: "London", correct: false},
        { text: "Paris", correct: true},
        { text: "Rome", correct: false},
        { text: "Berlin", correct: false},
      ]
    },
    {
      question:  "Who painted the Mona Lisa?",
      answers: [
        { text: "Leonardo da Vinci", correct: false},
        { text: "Pablo Picasso", correct: false},
        { text: "Michelangelo", correct: false},
        { text: "Vincent van Gogh", correct: true},
      ]
    },
    {
      question:  "How many continents are there on Earth?",
      answers: [
        { text: "5", correct: false},
        { text: "6", correct: false},
        { text: "7", correct: true},
        { text: "8", correct: false},
      ]
    },
    {
      question:  "What is the chemical symbol for water?",
      answers: [
        { text: "Wa", correct: false},
        { text: "H2O", correct: true},
        { text: "W", correct: false},
        { text: "02", correct: false},
      ]
    },
    {
      question:  "What is the powerhouse of the cell?",
      answers: [
        { text: "Mitochondria", correct: true},
        { text: "Ribosome", correct: false},
        { text: "Nucleus", correct: false},
        { text: "Chloroplast", correct: false},
      ]
    }
]

const questionList = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-btn");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;


//create a function to start the quiz
//indicate tthe index and score to 0 when we start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next"; //adding innerHtml button to 'NEXT' cause we will change the title later to  'Play again'
    showQuestion(); //calling this function to to display the questions
}

//Function to display the questions and answer
function showQuestion() {
    resetState() //calling this function to reset the previous questions and answer

    let currentQuestion = questions[currentQuestionIndex]; //
    let questionNumber = currentQuestionIndex + 1; // displaying question #, so if the index is 0 it always add 1.
    questionList.innerHTML = questionNumber + ". " + currentQuestion.question; // displaying the question # and the current question

    //displaying the answers for the question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); //Create a button tag to display the answer
        button.innerHTML = answer.text; //ato display the answer, we're addding text inside the button.
        button.classList.add("btn"); //adding classname to the button
        answerButtons.appendChild(button);//displaying the button we created in the div with the id answer-btn
    
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer); //add addEventlister for click button and call the selectAnswer function
    });

}

startQuiz();