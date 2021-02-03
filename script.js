
let left = document.getElementById("left");
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let output = document.getElementById('output');
let recent = document.getElementById('recent');
let number = [Math.floor(Math.random()*30)];
let store = [];
let leftChances = 4;

// Check Button
btn.addEventListener('click', function(){
  let input = document.getElementById("input").value;
  if(store.length < 5){
    if(input >= 1 && input <= 30){
      left.innerHTML = `${leftChances}`
      leftChances -= 1;
      if(input == number){
        store.push(input);
        output.innerHTML=`C O R R E C T ! ${number} was the secret answer.`;
        output.style.backgroundColor = '#3a8f4d';
        recent.innerHTML = `Previous Guesses: ${store}`;
        btn.disabled = true;
      }
      else{
        store.push(input);
        output.innerHTML= `Wrong ! Try Again.`;
        output.style.backgroundColor = '#CA4526';
        output.style.color = 'white';
        recent.innerHTML = `Previous Guesses: ${store}`;
        if(store.length > 4) {
          output.style.backgroundColor = 'orange';
          output.style.color= 'black';
          output.innerHTML = `Game Over >_< ${number} was the secret answer.`;
        }
      }
    }
    else if(input < 0 || input > 30) {
      output.innerHTML= `Out of Range`;
      output.style.backgroundColor= 'orange';
    }
  }
  else{
    output.style.backgroundColor= '#12B0E8';
    output.innerHTML = `RESET and try again. Good Luck.`
  }
})


//  Trigger Enter Button to submit
input.addEventListener('keyup', function(event){
  if(event.keyCode == 13){
    btn.click();
  }
});


//  Reset Button
btn2.addEventListener('click', function(){
  location.reload();
})