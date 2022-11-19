alert("Я не успел доделать, так как очень ленивый, но я буду продолжать доделывать, мне надо будет сделать ещё css и script.js")
function handle() {
    alert('Форма отправлена!');
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);

function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}