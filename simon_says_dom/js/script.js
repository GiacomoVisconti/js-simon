//! FUNCTIONS

/**
 * This function returns a random number between a max and min, both included
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/**
 * This function fill a list in DOM 
 */
function fill_list(number_list_El, numbers){
    let string = ""

    for (let i = 0; i <= 4; i++){
        let number = random_number(1,50)
        string += '<li>' + number + '</li>'
        numbers.push(number)
    }
    number_list_El.innerHTML = string
}



function hidden_reveal(){
    number_list_El.classList.add('d-none')
    number_input_form_El.classList.remove('d-none')

}

//!END FUNCTIONS

const numbers = [];

//Dichiaro gli elementi presenti nella pagina
const number_list_El = document.getElementById('numbers-list');
const number_input_form_El = document.getElementById('answers-form');
const number_cells_input_El = document.getElementById('input-group')
const number_0_El = document.getElementById('number_0')
const number_1_El = document.getElementById('number_1');
const number_2_El = document.getElementById('number_2');
const number_3_El = document.getElementById('number_3');
const number_4_El = document.getElementById('number_4');
const confirm_button_El = document.getElementById('confirm-button')
const message_El = document.getElementById('message')


//Dichiaro le variabili di input 
const number_0_value = number_0_El.value;
const number_1_value = number_1_El.value;
const number_2_value = number_2_El.value;
const number_3_value = number_3_El.value;
const number_4_value = number_4_El.value;

//Imposto il timer per il codice
setTimeout(hidden_reveal, 30000);
fill_list(number_list_El, numbers)

confirm_button_El.addEventListener('click', (e) => {

    e.preventDefault();

    number_cells_input_El.classList.add('d-none')
    // message_El.classList.add('d-block')

    if(numbers[0] === number_0_value && numbers[1] === number_1_value 
        && numbers[2] === number_2_value && numbers[3] === number_3_value 
        && numbers[4] === number_4_value) {
        
            message_El.innerHTML = "ESATTO, I NUMERI SONO CORRETTI"
            confirm_button_El.classList.add('d-none')
            
        } 
        message_El.innerHTML = "ERRATO, RIPROVA"
        confirm_button_El.classList.add('d-none')

})






