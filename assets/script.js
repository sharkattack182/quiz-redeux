var startBtn = document.getElementById("startGame");
var questionsDiv = document.querySelector(".hide");
var homepageEl = document.getElementById("homepage");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4");
var buttonsEl = document.getElementsByClassName(".btn");

var nameElhs = document.getElementsByClassName("name");
var scoreElhs =document.getElementsByClassName("score");

var question = 0;
var secondsLeft = 45;

function endGame() {
    window.location.href = "assets/highscores.html" 
    var name = prompt("please enter name.")
    localStorage.setItem("score", JSON.stringify(secondsLeft));
    localStorage.setItem("name", JSON.stringify(name));

    scoreElhs.textContent(JSON.parse(localStorage.getItem(score)));
    nameElhs.textContent(localStorage.getItem(name));
    clearInterval(timer);
}


function runGame() {
    //start a timer
    //hide the homepage
    //display hide
    homepageEl.style.display = "none";
    questionsDiv.style.display = "block";
    runTimer();
    //runTimer()
    //generateQuestions()
    console.log(questions);
    generateQuestion1();
}

//runtimer function
//set timer to 45 seconds
//if timer is done end game

function runTimer() {
    var timer = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft == 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}
//generate questions function
    //create a questions array with objects within the array
        //include question, choices(array), and answer value(index)
var questions = [
    {
        q: "Where does Hermione brew her first batch of Polyjuice Potion?",
        c: ["Moaning Myrtle’s Bathroom", "The Hogwarts Kitchen", "The Room of Requirement", "The Gryffindor Common Room"],
        answer: "btn1", //asign this to a value number and match with the buttons value clicked
    },

    {
        q: "What does one say to close the Marauder’s Map and make it blank again?",
        c: ["All Done", "Hello Professor", "Nothing to See Here", "Mischief Managed"],
        answer: "btn4", 
    }, 

    {
        q: "Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets’?",
        c: ["Dumbledore", "Draco Malfoy", "Dobby", "The Dursleys"],
        answer: "btn3",
    },

    {
        q: "From what King’s Cross platform does the Hogwarts Express leave?",
        c: ["Nine and Three-quarters", "Eight and One-quarter", "Five and a Half", "Eleven"],
        answer: "btn1",
    },

]

function generateQuestion1() {
   question = 0;   // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
    questionEl.textContent = questions[0].q;
   answer1.textContent = questions[0].c[0];
   answer2.textContent = questions[0].c[1];
   answer3.textContent = questions[0].c[2];
   answer4.textContent = questions[0].c[3];

   document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches(".btn")) {
        return;
    } 
    if (event.target.id == questions[0].answer) {
        console.log("true")
        generateQuestion2();
    }
}, true);
    
 }

 function generateQuestion2() {
   // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
     questionEl.textContent = questions[1].q;
    answer1.textContent = questions[1].c[0];
    answer2.textContent = questions[1].c[1];
    answer3.textContent = questions[1].c[2];
    answer4.textContent = questions[1].c[3];

    document.addEventListener('click', function (event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches(".btn")) {
            return;
        } 
        if (event.target.id == questions[1].answer) {
            console.log("true")
            generateQuestion3();
        }
            
    }, true);
  }

  function generateQuestion3() {
    // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
      questionEl.textContent = questions[2].q;
     answer1.textContent = questions[2].c[0];
     answer2.textContent = questions[2].c[1];
     answer3.textContent = questions[2].c[2];
     answer4.textContent = questions[2].c[3];

     document.addEventListener('click', function (event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches(".btn")) {
            return;
        } 
        if (event.target.id == questions[2].answer) {
            console.log("true")
            generateQuestion4();
        }
            
    }, true);
   }

   function generateQuestion4() {
    // my idea is to set question to zero then once an answer is selected got question++ making the index 1 and so on
      questionEl.textContent = questions[3].q;
     answer1.textContent = questions[3].c[0];
     answer2.textContent = questions[3].c[1];
     answer3.textContent = questions[3].c[2];
     answer4.textContent = questions[3].c[3];

     document.addEventListener('click', function (event) {

        if (!event.target.matches(".btn")) {
            return;
        } 
        if (event.target.id == questions[3].answer) {
            endGame();
        }     
         
    }, true);
}
