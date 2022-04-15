/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const choices = document.querySelectorAll('.choice-grid div');
 for (let choice of choices){
        choice.addEventListener('click', onClick);
    }
let result = document.querySelector('#result');
result.classList.add('hidden');
const checkbox = document.querySelector('.checkbox');
const button = document.querySelector('#restart');
button.addEventListener('click', restartQuiz);
let risp = {};   

/*************************/


function restartQuiz(){
result.classList.add('hidden');
for(let choice of choices){
    choice.addEventListener('click', onClick);
    choice.classList.remove('notchosen');
    choice.classList.remove('chosen');
    choice.getElementsByClassName("checkbox")[0].src = "./images/unchecked.png";

}

risp={};

}

function checkChoices(){
if(risp.one === risp.two || risp.three === risp.three){
  return risp.one;
}
if(risp.two === risp.one || risp.two === risp.three){
  return  risp.two;
}
if(risp.three === risp.one || risp.three === risp.two){
  return risp.three;
}
 return risp.one;
}


function displayPersonality(){
    const personality = checkChoices();
    result.querySelector('h1').textContent= RESULTS_MAP[personality].title;
    result.querySelector('p').textContent= RESULTS_MAP[personality].contents;
    result.classList.remove('hidden');
}


function onClick(event){
    let choice = event.currentTarget;
    const checkbox = choice.querySelector(".checkbox");
    const answer =choice.dataset.choiceId;
    const all= choice.parentNode.querySelectorAll('div');

   for(let i=0; i<choices.length; i++){
       if(choices[i].dataset.questionId === choice.dataset.questionId){
           if(choices[i].dataset.choiceId === choice.dataset.choiceId){
            choices[i].classList.remove('notchosen');
            const checkbox= choices[i].querySelector(".checkbox");
            choices[i].classList.add('chosen');
            checkbox.src="images/checked.png";
           }else{
            choices[i].classList.add('notchosen');
            const checkbox= choices[i].querySelector(".checkbox");
            choices[i].classList.remove('chosen');
            checkbox.src="images/unchecked.png";
           }
           
       }
        
    }
    risp[choice.dataset.questionId]=choice.dataset.choiceId;
    

    if(risp.one && risp.two && risp.three){
        for (let choice of choices){
            choice.removeEventListener('click', onClick);
        }
       displayPersonality(checkChoices());
    }
   

}

    




