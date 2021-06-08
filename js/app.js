'use strict';

let userName = prompt("what's your name?")
alert('welcome to my website '+ userName)


let Q1 = prompt('Do you think I love nature?')
.toLowerCase();
//console.log(Q1)
if(Q1==='yes' || Q1==='y'){
    alert("true, who doesn't!");
}else if(Q1==='no' || Q1==='n'){
    alert('well, actually I do');
}else {
    alert('Pease type (yes) or (no) or (y) or (n)');
  }


let Q2 = prompt('Do you think I enjoy cooking?')
.toLowerCase();
//console.log(Q2)
if(Q2==='yes' || Q2==='y'){
    alert("wrong answer, sadly I don't");
}else if(Q2==='no' || Q2==='n'){
    alert('you get it right Good job ');
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');
}


let Q3 = prompt('Do you think I like reading?')
.toLowerCase();
//console.log(Q3)
if(Q3==='yes' || Q3==='y'){
    alert('true, good guessing!');
}else if(Q3==='no' || Q3==='n'){
    alert('not true, you did not get this one');
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');  
}

let Q4 = prompt('Do you think I have been to more than 3 countries?')
.toLowerCase();
//console.log(Q4)
if(Q4==='yes' || Q4==='y'){
    alert('true, good guessing!');
}else if(Q4==='no' || Q4==='n'){
    alert('sorry, you did not get it right')
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');  
}

let Q5 = prompt('Do you agree with me on preferriing cats over dogs?')
.toLowerCase();
//console.log(Q5)
if(Q5==='yes' || Q5==='y'){
    alert('great! welcome to the club');
}else if (Q5==='no' || Q5==='n'){
    alert('well we have to agree to disagree');
}else{
    alert('Pease type (yes) or (no) or (y) or (n)');   
}

alert("that's it, good to see you in my website "+ userName)