// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); 

submitButton.addEventListener('click', function(e) { 
  ///let main = document.querySelectorAll('main');
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 

//resolved 3 errors...