let input = document.getElementById('inpbox')
let buttons = document.querySelectorAll('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => { button.addEventListener('click', (e) =>{if(e.target.innerHtml == '='{string = eval(string);input.value = string;
    
})})})