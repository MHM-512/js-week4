const titleHandler = function () {
    const header = document.querySelector('h1')
    header.style.color = 'red';
     style  =function (){
        console.log('n');
        time= 1500
        setTimeout(function(){
            header.style.color = 'blue'
        },time)
        
    }
}
titleHandler()
style()

// const titleEl = document.querySelector('.title');


// titleEl.textContent = 'red';
// titleEl.style.backgroundColor = 'blue'