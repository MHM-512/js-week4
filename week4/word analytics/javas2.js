const textareaEl = document.querySelector('.textarea');
//stat__number--Characters
const numberOfCharactersEl = document.querySelector('.stat__number--Characters');
//.stat__number--twitter
const twitterNumberEl = document.querySelector('.stat__number--twitter');
//.stat__number--facebook
const facebookNumberEl = document.querySelector('.stat__number--facebook');
//.stat__number--words
const wordsNumberEl = document.querySelector('.stat__number--words');
//-----------------------------
function inputHandler(){
//Prevent developer posts
      if(textareaEl.value.includes('<script>')){
         alert ("Wron inpit");
         textareaEl.value = textareaEl.value.replace('<script>','')
      }


//namberOfCharacters=textareaEl-----length
const namberOfCharacters=textareaEl.value.length;

//twitter
const twitterCharactersLef = 280 -namberOfCharacters;

//Member Status OF twitter
   if(twitterCharactersLef < 0 ){
   twitterNumberEl.classList.add('stat__number--limit')
   }else{
   twitterNumberEl.classList.remove('stat__number--limit')
   }

//facebook
const facebookCharactersLef = 2200 -namberOfCharacters;

//Member Status OF facebook
   if(facebookCharactersLef <= 0 ){
   facebookNumberEl.classList.add('stat__number--limit')
   }else{
   facebookNumberEl.classList.remove('stat__number--limit')
   }

//Word
let wordsNumberCharacters=textareaEl.value.split(' ').length;

//Member Status OF Word
   if( textareaEl.value.length === 0 ){
   wordsNumberCharacters = 0
   }





//numberOfCharactersEl = namberOfCharacters-----------------with---.textContent
numberOfCharactersEl.textContent=namberOfCharacters;
//twitterNumberEl = twitterCharactersLef--------------------with---.textContent
twitterNumberEl.textContent=twitterCharactersLef;
//facebookNumberEl = facebookCharactersLef------------------with---.textContent
facebookNumberEl.textContent=facebookCharactersLef;
//wordsNumberE = wordsNumberCharacters----------------------with---.textContent
wordsNumberEl.textContent=wordsNumberCharacters;
}
textareaEl.addEventListener('input',inputHandler);