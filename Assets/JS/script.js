const PlayerName = document.querySelector('.field-input')
const submit = document.querySelector('.submit')
const container = document.querySelector('.field-container')
const holder = document.querySelector('.field-placeholder')
const question = document.querySelector('.bold')
const answers = document.querySelector('#anwser1')
const answer2 = document.querySelector('#anwser2')
const answer3 = document.querySelector('#anwser3')
const answer4 = document.querySelector('#anwser4')
const answer5 = document.querySelector('#anwser5')
const scoreBoard = document.querySelector('#scoreBoard')
const player = document.querySelector('.player')
const scored = document.querySelector('.score')
const option = document.querySelectorAll('input[name="option"]')
const option1 = document.querySelectorAll('input[name="option1"]')
const option2 = document.querySelectorAll('input[name="option2"]')
const option3 = document.querySelectorAll('input[name="option3"]')
const option4 = document.querySelectorAll('input[name="option4"]')
const next = document.querySelector('#Next1')
const next1 = document.querySelector('#Next2')
const next2 = document.querySelector('#Next3')
const next3 = document.querySelector('#Next4')
const next4 = document.querySelector('#Next5')
const smile = document.querySelector('#smile')
const frown = document.querySelector('#frown')
const expression = document.querySelector('#expression')


let score = 0;
let response;
let response1;
let response2;
let response3;
let response4;


// Check if user enter name
const checkName = () =>{
    if (PlayerName.value.replaceAll(" ", "").length === 0){
        container.classList.add('Error')
        holder.textContent = "Enter a valid name"
        holder.classList.add('Error')

    }
    else{
        question.textContent ="When was Sterling bank originally incorporated ?"
        question.classList.add('questions')
        answers.style.display ='block'
        answers.classList.add('anwsers')
        container.style.display ='none'
        submit.style.display ='none'
        
    }
}

// Display question
submit.onclick = () =>{
    checkName();
}

//check if an option is checked
const checkOption = (values) =>{
    
    next.classList.add('submit')
    next.style.display ='block'

    response = values;
}

option.forEach(input => {
    input.addEventListener('change', (e) => {
      checkOption(e.target.value.toUpperCase());
    });
  });

  // add Question 1 score and display next question
  const calcScore = () => {
    if (response === "1960"){
        score +=20
    }
    else {
        score += 0
    }
    question.textContent ="What is Sterling color ?"
        
    answer2.style.display ='block'
    question.classList.add('questions')
    answers.style.display ='none'
        answer2.classList.add('anwsers')
        submit.style.display ='none'
        container.style.display ='none'
        next.style.display= 'none'
  }

  next.onclick = () =>{
    calcScore();
  }

// Check if user select an option 2
  const checkOption1 = (values) =>{
    
    next1.classList.add('submit')
    next1.style.display ='block'

    response1 = values;
}

  option1.forEach(input => {
    input.addEventListener('change', (e) => {
      checkOption1(e.target.value.toUpperCase());
    });
  });

  // add Question 2 score and display next question
  const calcScore1 = () => {
    if (response1 === "BURGUNDY"){
        score +=20
    }
    else {
        score += 0
    }
    question.textContent ="Sterling bank was originally incorporated as ?"
        
    answer2.style.display ='none'
    question.classList.add('questions')
    answers.style.display ='none'
    answer3.style.display ='block'
        answer3.classList.add('anwsers')
        submit.style.display ='none'
        container.style.display ='none'
        next.style.display= 'none'
        next1.style.display= 'none'
  }

  next1.onclick = () =>{
    calcScore1();
  }

  // Check if user select an option 3
  const checkOption2= (values) =>{
    
    next2.classList.add('submit')
    next2.style.display ='block'

    response2 = values;
}

  option2.forEach(input => {
    input.addEventListener('change', (e) => {
      checkOption2(e.target.value.toUpperCase());
    });
  });

  // add Question 3 score and display next question
  const calcScore2 = () => {
    if (response2 === "NIGERIA ACCEPTANCES LIMITED (NAL)"){
      score +=20 
    }
    else{
      score += 0 
    }

    question.textContent ="Sterling bank was the first licensed merchant bank in Nigeria ?"
        
    answer2.style.display ='none'
    question.classList.add('questions')
    answers.style.display ='none'
    answer4.style.display ='block'
    answer3.style.display ='none'
        answer4.classList.add('anwsers')
        submit.style.display ='none'
        container.style.display ='none'
        next.style.display= 'none'
        next1.style.display= 'none'
        next2.style.display= 'none'
  }

  next2.onclick = () =>{
    calcScore2();
  }

  // Check if user select an option 3
  const checkOption3= (values) =>{
    
    next3.classList.add('submit')
    next3.style.display ='block'

    response3 = values;
}

  option3.forEach(input => {
    input.addEventListener('change', (e) => {
      checkOption3(e.target.value.toUpperCase());
    });
  });



  // add Question 4 score and display next question
  const calcScore3 = () => {
    if (response3 === "TRUE"){
      score +=20 
    }
    else{
      score += 0 
    }

    question.textContent ="Which Organization was awarded 3rd best place to work in 2023 according to LinkedIn?"
        
    answer2.style.display ='none'
    question.classList.add('Lastquestions')
    answers.style.display ='none'
    answer5.style.display ='block'
    answer4.style.display ='none'
        answer5.classList.add('anwsers')
        submit.style.display ='none'
        container.style.display ='none'
        next.style.display= 'none'
        next1.style.display= 'none'
        next2.style.display= 'none'
        next3.style.display= 'none'
  }

  next3.onclick = () =>{
    calcScore3();
  }

  // Check if user select an option 3
  const checkOption4= (values) =>{
    
    next4.classList.add('submit')
    next4.style.display ='block'

    response4 = values;
}

  option4.forEach(input => {
    input.addEventListener('change', (e) => {
      checkOption4(e.target.value.toUpperCase());
    });
  });
  
  // Calculate Result and display overall score
  const calcResult = () =>{
    if (response4 === "STERLING BANK"){
      score +=20 
    }
    else{
      score += 0 
    }
    
    if (score >= 40){
      question.textContent ="CONGRATULATIONS!!! 😁😃👍"
      question.classList.add('congratulations')
      expression.style.display ='block'
      smile.classList.add('express')
    }

    else{
      question.textContent ="TRY AGAIN 😒🤦‍♀️🤦‍♂️"
      question.classList.add('tryAgain')
      frown.classList.add('express')
      expression.style.display ='block'
    }
    scoreBoard.style.display = "block"
    scoreBoard.classList.add('scoreBoard')
    player.innerHTML = "Dear " + PlayerName.value
    scored.innerHTML = "Your Score is " + score + " Out of 100"
    answer2.style.display ='none'
    answers.style.display ='none'
    answer3.style.display ='none'
    answer5.style.display ='none'
        submit.style.display ='none'
        container.style.display ='none'
        next.style.display= 'none'
        next1.style.display= 'none'
        next4.style.display= 'none'
  }

  next4.onclick = () =>{
    calcResult();
  }