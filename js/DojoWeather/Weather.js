


function rem(e){
    e.remove();
}

function changedValue(e) {
    if (e.value == "fahrenheit") {
        for (let i = 1; i < 9; i++) {
            var degre = document.getElementById(i);
            degre.textContent = parseInt(degre.textContent)+10+"°";
            
        }
    }
    else {
        for (let i = 1; i < 9; i++) {
            var degre = document.getElementById(i);
            degre.textContent = parseInt(degre.textContent)-10+"°";
            
        }
    }
}


