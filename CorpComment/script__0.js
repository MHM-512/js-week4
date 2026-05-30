const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedsEL = document.querySelector('.feedbacks');
const submitEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner');

//---golden 
const timer = 2000;
const MAX_CHARS = 150;

const inputHandler = () => {

    const charsType = textareaEl.value.length;
    const charsLeft = MAX_CHARS - charsType

    // console.log(charsLeft);
    // show number of characters left
    counterEl.textContent = charsLeft
}
// -- start -- form component 
const submitHandler = (event) => {
    event.preventDefault();
    const text = textareaEl.value;
    console.log(text);

    if (text.includes('#') && text.length >= 5) {
        formEl.classList.add('form--valid');
        changeClass('form--valid')
    } else {
        formEl.classList.add('form--invalid');
        changeClass('form--invalid')
        textareaEl.focus();
    }
    // console.log(text.split(' ').find(word => word.includes('#')));

    const hashtage = text.split(' ').find(word => word.includes('#'));
    console.log(hashtage);

    const conpany = hashtage.substring(1);
    console.log(conpany);

    const badgeLetter = conpany.slice(0, 1).toUpperCase();
    console.log(badgeLetter);

    const upvoteCount = 0;
    const dayAgo = 0;

    //feedback------///-system-------/start-----------//

    // renderFeedbackItem (conpany ,badgeLetter , upvoteCount , dayAgo ); 
    const feed = {
        conpany: conpany,
        badgeLetter: badgeLetter,
        upvoteCount: upvoteCount,
        dayAgo: dayAgo,
        text: text,
    }
    renderFeedbackItem(feed);

    // -------- dend feedback itme to server 
    fetch('feedbacke.json', {
        method: 'POST',
        body: JSON.stringify(feed),
        headers: {
            Accept: 'application/json',
            'content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            console.log('something went wrong');
        } else {
            console.log('submit');
        }
    }).catch(server => console.log(error));

/* const feedItem = `
<li class="feedback">
    <button class="upvote">
        <i class="fa-solid fa-caret-up upvote__icon"></i>
        <span class="upvote__count">${upvoteCount}</span>
    </button>
    <section class="feedback__badge">
        <p class="feedback__letter">${badgeLetter}</p>
    </section>
    <div class="feedback__content">
        <p class="feedback__company">${conpany}</p>
        <p class="feedback__text">Hi #${text}, I really li</p>
    </div>
    <p class="feedback__date">${dayAgo === 0 ? 'new' : `${dayAgo}d`}</p>
</li>`;
feedsEL.insertAdjacentHTML('beforeend', feedItem) */
//feedback------///-system-------/end--------------------------------//

textareaEl, value = " ";
submitEl.blur();
counterEl.textContent = MAX_CHARS;
}
// -- End -- form component
// -- start -- changeClass  && timer
const changeClass = (className) => {
    setTimeout(() => {
        formEl.classList.remove(className);
    }, timer)
};
//------------///-----  start--MODAL 2
/*  
const showVisualIndicator = (textCheck) =>{
    const className=textCheck === 'valid' ? 'form--valid' : 'form--invalid'
    formEl.classList.add(className);
    setTimeout(() => {
        formEl.classList.remove(className);
    } , timer);
};
    // -------- /// ---  end--MODAL 2----- 
*/
// -- End -- changeClass 

textareaEl.addEventListener('input', inputHandler)
formEl.addEventListener('submit', submitHandler)

// console.log('sdfdsf');
//------start ------- data json ---------// --------//----
fetch('feedbacke.json')
    .then(Response => {
        return Response.json();

    }).then(data => {

        //feedback------///-system-------/---
        data.feedbacks.forEach(feedItem => {
            renderFeedbackItem(feedItem)
            /* const feedsItem = `
            <li class="feedback">
                <button class="upvote">
                    <i class="fa-solid fa-caret-up upvote__icon"></i>
                    <span class="upvote__count">${feedItem.upvoteCount}</span>
                </button>
                <section class="feedback__badge">
                    <p class="feedback__letter">${feedItem.badgeLetter}</p>
                </section>
                <div class="feedback__content">
                    <p class="feedback__company">${feedItem.conpany}</p>
                    <p class="feedback__text">Hi #${feedItem.text}, I really li</p>
                </div>
                <p class="feedback__date">${feedItem.dayAgo === 0 ? 'new' : `${feedItem.daysAgo}d`}</p>
            </li>`; 
            feedsEL.insertAdjacentHTML('beforeend', feedsItem) */
        });
        console.log(data.feedbacks);


    }).catch(error => {
        feedsEL.textContent = `Error message : ${error}`
    });
//------end --- data json ---------// --------///--------//-----------

//------ the end is spinner 
spinnerEl.remove();


const renderFeedbackItem = feedback => {
    const feedsItem = `
            <li class="feedback">
                <button class="upvote">
                    <i class="fa-solid fa-caret-up upvote__icon"></i>
                    <span class="upvote__count">${feedback.upvoteCount}</span>
                </button>
                <section class="feedback__badge">
                    <p class="feedback__letter">${feedback.badgeLetter}</p>
                </section>
                <div class="feedback__content">
                    <p class="feedback__company">${feedback.conpany}</p>
                    <p class="feedback__text">Hi #${feedback.text}, I really li</p>
                </div>
                <p class="feedback__date">${feedback.dayAgo === 0 ? 'new' : `${feedback.dayAgo}d`}</p>
            </li>`;
    feedsEL.insertAdjacentHTML('beforeend', feedsItem)
}

// const likeHandler = event => {
//  console.log(event.target);
//  cosnt clickedEl = event.target;
//  const upvoteEl = click 
// };
// feedsEL.addEventListener('click', likeHandler);