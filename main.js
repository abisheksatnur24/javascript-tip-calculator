//Script for calulator
const button = document.querySelector("button"); 
button.onclick = function(){calculate_tip()}; 

function calculate_tip(){
    const amount = document.querySelector("input").value; 
    const tip = ((amount / 100) * 20);
    display_tip(tip);  
}

function display_tip(num){
    let tip_text = document.querySelector(".tip_display"); 
    tip_text.textContent = `You should tip ${num}`
}




