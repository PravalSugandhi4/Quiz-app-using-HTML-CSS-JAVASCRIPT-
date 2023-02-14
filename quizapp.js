/*Question for quiz*/
var questions=[
    {
      num:1,
      question:"What does SMS stands for",
      answer:"Short message service",
      options:[
        "short mobile service",
        "short microphone service",
        "short micro service",
        "Short message service"

      ]
    },
    {
      num:2,
      question:"What does CSS stands for",
      answer:"Cascade style sheet",
      options:[
        "cost style sheet",
        "Cascade style sheet",
        "carry style sheet",
        "comma style sheet"

      ]
    },
    {
      num:3,
      question:"What does JS stands for",
      answer:"java script",
      options:[
        "java script",
        "java style ",
        "java sheet",
        "java school"
      ]
    },
    {
      num:4,
      question:"Spelling of 7 is ...",
      answer:"seven",
      options:[
        "saeven",
        "saevan ",
        "savan",
        "seven"
      ]
    },
    {
      num:5,
      question:"Spelling of 10 is ...",
      answer:"ten",
      options:[
        "taen",
        "tnn",
        "ten",
        "tan"
      ]
    }
  ]



 /*Contol gathering area */

const start_btn=document.querySelector(".startquiz");
const quiz_box=document.querySelector(".quizbox");
const que_text=document.querySelector(".ques_text");

const optionsq1=quiz_box.querySelector(".option1")
const optionsq2=quiz_box.querySelector(".option2")
const optionsq3=quiz_box.querySelector(".option3")
const optionsq4=quiz_box.querySelector(".option4")

const button=document.querySelector(".nextbtn");
const end=document.querySelector(".end");

const result=document.querySelector(".resultbox");


const totalqu=document.querySelector(".resultbox .totalque span");
const rightan=document.querySelector(".resultbox .rightans span");
const wrongan=document.querySelector(".resultbox .wrongans span");

const againquiz1=document.querySelector(".againquiz")
const exitquiz1=document.querySelector(".exitquiz")

/** quiz start nature area */
start_btn.onclick=()=>
{
quiz_box.classList.remove("inactive");
start_btn.classList.add("inactive");

}

/*Question loading area */ 

let quecount=0;
let score=0;


const loadquestion=(que=0)=>
{
                /* option fitting area */
                if(que>=5)
                {
                  que=0;
                  result.classList.remove("inactive");
                  quiz_box.classList.add("inactive");
                  totalqu.innerText="5";
                  rightan.innerText=score;
                  wrongan.innerText=5-score;
                }
  que_text.innerHTML=questions[que].num+"."+questions[que].question;
  
  optionsq1.innerHTML=questions[que].options[0];
  optionsq2.innerHTML=questions[que].options[1];
  optionsq3.innerHTML=questions[que].options[2];
  optionsq4.innerHTML=questions[que].options[3];
  
  if(que==questions.length-1)
  {
    button.innerText="Question complete !! ";
    
  }
}
loadquestion(quecount)

/*option checking and answer evalution area*/

function check()
{
                             //for option 1
  optionsq1.onclick=()=>
  {
    if(optionsq1.innerText==questions[quecount].answer)
    {
      score=score+1;
      quecount=quecount+1;
      loadquestion(quecount);
    }
    else
    {
    //
    quecount=quecount+1;
      loadquestion(quecount);
    }
  }
                           //for option 2
  optionsq2.onclick=()=>
  {
    if(optionsq2.innerText==questions[quecount].answer)
    {
      score= score+1;
      quecount=quecount+1;
      loadquestion(quecount);
    }
    else
    {
      //
      quecount=quecount+1;
      loadquestion(quecount);
    }
  }
                           //for option 3
  optionsq3.onclick=()=>
  {
    if(optionsq3.innerText==questions[quecount].answer)
    {
      score= score+1;
      quecount=quecount+1;
      loadquestion(quecount);
    }
    else
    {
      //
      quecount=quecount+1;
      loadquestion(quecount);
    }
  }
                                        //for option 4
  optionsq4.onclick=()=>
  {
    if(optionsq4.innerText==questions[quecount].answer)
    {
      score= score+1;
      quecount=quecount+1;
      loadquestion(quecount);
    }
    else
    {
      //
      quecount=quecount+1;
      loadquestion(quecount);
    }
  }

}
check();



/*Next button and question display area*/

button.onclick=()=>
{  //  4                   0
  if(questions.length-1>=quecount)
  {
    score=score;
  quecount=quecount+1;
  loadquestion(quecount);
  }
  else
  {
    result.classList.remove("inactive");
    quiz_box.classList.add("inactive");
    totalqu.innerHTML="5";
    rightan.innerHTML=score;
    wrongan.innerHTML=5-score;
  }
}

/* result display and evalution section*/


againquiz1.onclick=()=>
{
result.classList.add("inactive");
start_btn.classList.remove("inactive");
start_btn.classList.add("active");
button.innerText="Skip Question";
quecount=0;
score=0;
rightan=0;
wrongan=0;
}
exitquiz1.onclick=()=>
{
alert("Thanks for attemp a quiz.  I hope you enjoy it");
result.classList.add("inactive");
start_btn.classList.remove("inactive");
start_btn.classList.add("dis");
start_btn.innerText="Exit sucessfully";
quecount=0;
score=0;
}


