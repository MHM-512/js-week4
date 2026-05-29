const increasebuttonEl = document.querySelector('.counter_button--increase')
const decreasebuttonEl = document.querySelector('.counter_button--decrease')
const countervlueEl = document.querySelector ('.counter_vlue')
const resetButtonEl = document.querySelector ('.counter_reset-button')
const counterEl = document.querySelector('.counter')
const titleEl= document.querySelector('.counter_title')

function incermentCounter(){
  //get currrent value of conter
   const currentvalue =countervlueEl.textContent;

   //convert To namber
   const currentvalueAsNumber= +currentvalue;
  //calculate New Value
   let newvalue = currentvalueAsNumber + 1 ;
   if(newvalue > 5 ){
      newvalue= 5;
      counterEl.classList.add('counter-limit');
      titleEl.textContent= "Maximum";
   }

    countervlueEl.textContent= newvalue;   
};
function decreaseCounter(){
   //get currrent value of conter
   const currentvalue =countervlueEl.textContent;

   //convert To namber
   const currentvalueAsNumber= +currentvalue;
  //calculate New Value
   let newvalue = currentvalueAsNumber - 1;
   if(newvalue < 0 ){
      newvalue= 0
   }
   //مال قرمز نکردن بعد از 5 هست
   text()
   countervlueEl.textContent= newvalue;
};
function resetButton(){
   countervlueEl.textContent=0;
   text()
   
};
function text (){
   titleEl.textContent= "may counter"
   //مال قرمز نکردن بعد از 5 هست
   counterEl.classList.remove('counter-limit')
};

increasebuttonEl.addEventListener('click',incermentCounter);
document.addEventListener('keydown', incermentCounter);
decreasebuttonEl.addEventListener('click',decreaseCounter);
resetButtonEl.addEventListener('click',resetButton);



