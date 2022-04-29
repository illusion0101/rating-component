function removeClasses(num){
    for(let i = 1; i < 6; i++){
        if(i != num){
            buttons = document.getElementById(`num-${i}`);
            if(buttons.classList.contains('selected-button') == true) {
                buttons.classList.remove('selected-button');
            }   
        }
    }
}

function selectNum(num){
    button = document.getElementById(`num-${num}`);
    if(button.classList.contains('selected-button') == true) {
        button.classList.remove('selected-button');
    }
    else {
        removeClasses(num);
        button.classList.add('selected-button');
    }   
}