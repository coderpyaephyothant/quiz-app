const questionData = [
    {
        question:"The most I like Laptop Brand?",
        a:"Dell",
        b:"Asus",
        c:"MSI",
        d:"Acer",
        correct:"a"
    },
    {
        question:"How long I took JavaScript Programming Untill Today?",
        a:"5Months",
        b:"8Months",
        c:"10Months",
        d:"More than 1 Year",
        correct:"d"
    },
    {
        question:"How old are you?",
        a:"20",
        b:"22",
        c:"30",
        d:"under26",
        correct:"d"
    },
    {
        question:"The most I like Fruit",
        a:"Banana",
        b:"Apple",
        c:"Strawberry",
        d:"Watermelon",
        correct:"c"
    },
    {
        question:"I would like to travel place before 35",
        a:"United States Of America",
        b:"Canada",
        c:"Norway",
        d:"Switzerland",
        correct:"a"
    }
];
const ansewerTag = document.querySelectorAll(".answer");
const button  = document.getElementById("button");
const quizCcontainerTag = document.querySelector(".quiz-container");
const a1Tag = document.getElementById("a1");
const a2Tag = document.getElementById("a2");
const a3Tag = document.getElementById("a3");
const a4Tag = document.getElementById("a4");
const quesTag = document.getElementById("ques");

let currentQ = 0;

const loadQuiz = () => {
    quesTag.innerText = questionData[currentQ].question;
    // console.log(questionData[currentQ]);
    a1Tag.innerText=questionData[currentQ].a
    a2Tag.innerText=questionData[currentQ].b
    a3Tag.innerText=questionData[currentQ].c
    a4Tag.innerText=questionData[currentQ].d
    
}

loadQuiz();


function deslect () {
    ansewerTag.forEach( (ans)=>{
        ans.checked = false;  
        }
    );
}


let ansID = undefined ;
function checkedAnswer () {
    

    /* only get id and undefined */
    ansewerTag.forEach( (ans)=>{
        if (ans.checked) {
            
             ansID = ans.id;
             console.log(ansID);
            
        }
        
    } );
    return ansID;
}
let score = 0;
button.addEventListener("click", ()=>{
    
   let  buttonCheck = checkedAnswer();
   
   if ( buttonCheck){
        console.log(buttonCheck);
        if (buttonCheck === questionData[currentQ].correct){
            score ++;
            console.log(score)
        }

    if (currentQ <  questionData.length-1){
        deslect();
        currentQ ++;
        loadQuiz();
        
        
        
    } else {
        
        // alert("f i n i s h e d . . . .")
        quizCcontainerTag.innerHTML = `
        <div class="result">
        <h2>Your score id ${score}/${questionData.length}!</h2> 
        <button id="resetButton" 
        onclick="location.reload()">Reset</button>
        </div>`
    }
   }
    
    
   deslect();
});




   

        
        