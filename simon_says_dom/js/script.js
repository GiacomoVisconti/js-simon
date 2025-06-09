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

//Imposto il timer per il codice
setTimeout(hidden_reveal, 30000);
fill_list(number_list_El, numbers)

console.log(numbers);

confirm_button_El.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    //Dichiaro le variabili di input 
    const number_0_value = number_0_El.value;
    const number_1_value = number_1_El.value;
    const number_2_value = number_2_El.value;
    const number_3_value = number_3_El.value;
    const number_4_value = number_4_El.value;

    //Carico l'array con i numeri inseriti dall'utente
    const user_numbers = [number_0_value, number_1_value, number_2_value, number_3_value, number_4_value];  

    //Nascondo le celle di input dei numeri e il bottone, per lasciar spazio al messaggio di risultato
    number_cells_input_El.classList.add('d-none')
    message_El.classList.add('d-block')
    confirm_button_El.classList.add('d-none')
    // todo console.log(user_numbers);
    let num_uguali = 0

    //Per ogni numero inserito dall'utente eseguo il controllo dei numeri generati con un for
    for(let i = 0; i < numbers.length; i++){

        if (user_numbers[i] == numbers[i]){
            num_uguali = num_uguali + 1
            
        }
        
    }

    //Stampo il messaggio a seconda del risultato
    if (num_uguali == numbers.length){
        message_El.innerText = 'BRAVO! HAI INDOVINATO TUTTI I NUMERI'
    } else {
        message_El.innerText = `Hai indovinato ${num_uguali} numeri, riprova per indovinarli tutti.
        I numeri da indovinare: ${numbers}
        Quelli che hai inserito: ${user_numbers}`
    }


    // todo console.log(num_uguali);

})






