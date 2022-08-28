
/**
 * Idecleared a two variables here with their various elements
 */
const textareaItem = document.getElementById('textarea');
const totalcounterItem = document.getElementById('Total-counter');

/*
I added eventListener method 'keyip',  event handler
'keyup' will trigger the function when the event handler happens */

textareaItem.addEventListener('keyup', ()=>{
    updateCounter();
})
updateCounter();

function updateCounter(){
    totalcounterItem.innerText = textareaItem.value.length
}