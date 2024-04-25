// Pobranie elementu <h1> nie jest potrzebne, więc można to usunąć.

// Dodanie nasłuchiwacza zdarzeń do h1
document.querySelector('h1').addEventListener('click', example);
example4(25,4,1,34)
function checkAge() {
    // Pobranie wartości z pola input o id="danceDance" i przekonwertowanie jej na liczbę
    let age = Number(document.querySelector("#danceDance").value);

    // Pobranie elementu <p> wewnątrz funkcji checkAge
    const p = document.querySelector('p');

    // Sprawdzenie warunków wiekowych i aktualizacja tekstu w zależności od wieku
    if (age < 16) {
        p.innerText = "You cannot Drive";
    } else if (age < 18) {
        p.innerText = "You cannot be in a club";
    } else if (age < 21) {
        p.innerText = "You cannot Drink!";
    } else if (age < 25) {
        p.innerText = "Cannot take cars";
    }
}

function CtF(){
    let temp = Number(document.querySelector('#CtF').value)
    temp = temp*1.8+32

    document.querySelector('h2').innerText = temp

}

function addTwo(){
    let numFormInput = Number(document.querySelector("#danceDance").value)
    numFormInput += 15

    console.log(num+ numFormInput)
    alert(numFormInput)
    

}

function example4(n1,n2,n3,n4){
    result = n1*n2
    if (result >100){
        result += n3+n4
        console.log(result)
    }else if (result ==100){
            result = (n1*n2*n3) %n4
            alert(result)     
    }else{
        result -= n3+n4
        console.log(result)
    }
}