'use strict';

let userName = prompt("what's your name?")
alert('welcome to my website '+ userName)

let score = 0; 

let Q1 = prompt('Do you think I love nature?').toLowerCase();;
  // console.log("Q as it is",Q1);
  // let q2=Q1.toLowerCase();
  // console.log("Q after change to lower case",q2);
//
//console.log(Q1)
if(Q1==='yes' || Q1==='y'){
    alert("true, who doesn't!");
    score++
}else if(Q1==='no' || Q1==='n'){
    alert('well, actually I do');
}else {
    alert('Pease type (yes) or (no) or (y) or (n)');
  }


let Q2 = prompt('Do you think I enjoy cooking?').toLowerCase();

//console.log(Q2)
if(Q2==='yes' || Q2==='y'){
    alert("wrong answer, sadly I don't");
}else if(Q2==='no' || Q2==='n'){
    alert('you get it right Good job ');
    score++
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');
}


let Q3 = prompt('Do you think I like reading?').toLowerCase();

//console.log(Q3)
if(Q3==='yes' || Q3==='y'){
    alert('true, good guessing!');
    score++
}else if(Q3==='no' || Q3==='n'){
    alert('not true, you did not get this one');
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');  
}

let Q4 = prompt('Do you think I have been to more than 3 countries?').toLowerCase();

//console.log(Q4)
if(Q4==='yes' || Q4==='y'){
    alert('true, good guessing!');
    score++
}else if(Q4==='no' || Q4==='n'){
    alert('sorry, you did not get it right')
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');  
}

let Q5 = prompt('Do you agree with me on preferriing cats over dogs?').toLowerCase();

//console.log(Q5)
if(Q5==='yes' || Q5==='y'){
    alert('great! welcome to the club');
    score++
}else if (Q5==='no' || Q5==='n'){
    alert('well we have to agree to disagree');
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');   
}

alert("that's it, good to see you in my website "+ userName)

//six

for (let i = 0; i < 4; i++) {
    let myAge = prompt(' how old do you think I am? , Hint:( between 18-40 ) ? ');
    if (myAge > 30) {
      alert(' too high, try again');
    }
    else if (myAge > 25) { alert('a littel bit high , try again') }
  
    else if (myAge < 20) {
      alert('too low, try again');
    }
    else if (myAge < 25) { alert('a littel bit low , try again') }
  
    else {
      alert('Yes , I am 25 ');
      //console.log(' true');
      score++;
      break;
    }
    if (i == 3)  alert('I am 25 years old , you were close!'); 
  }
  
  //seven
  
  let favCoun = ['thiland', 'usa', 'lebanon', 'turkey', 'jordan'];
  for (let x = 0; x < 6; x++) {
    let guessPlace = prompt('Can you guess my favorite country to visit?').toLowerCase();
  
    if (guessPlace === favCoun[0] || guessPlace === favCoun[1] || guessPlace === favCoun[2] || guessPlace == favCoun[3] || guessPlace == favCoun[4]) {
      alert('good job! , thats correct');
      alert('All favorite countries are [thiland, usa, lebanon , turkey , jordan]');
      console.log(' true');
      score++;
      break;
    }
  
    else {
      alert(' try again')
  
  
    }
  
    if (x == 5) { alert('My favorate countries are [thiland, lebanon , turkey ,amman, jordan]') };
  
  }

  alert('it was good having you in my website '+userName+'. your score is '+score+'/7')



