let button = document.querySelectorAll('.btn');
button.addEventListener('click', function(){
    alert('Не, эта кнопка не работает:)')
})
let links = document.querySelectorAll('.scroll');
let targetID;
links.forEach(function (element){
    element.addEventListener('click', function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
