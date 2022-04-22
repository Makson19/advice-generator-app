let adviceId = document.querySelector(".advice-id");
let adviceText = document.querySelector(".advice-text");
let button = document.getElementById("btn");


// Adicionando evento de click no botão.
button.addEventListener("click", adviceGenerator)


// Função responsável por pegar as informações vindas da API.
async function adviceGenerator() {
    const url = "https://api.adviceslip.com/advice";

    const response = await fetch(url);
    const data = await response.json();
    
    showDevice(data);
}


// Função responsável por mostrar na tela as informações vindas da API (ID, Advice).
function showDevice(message) {
    let id = message["slip"].id;
    let advice = message["slip"].advice;

    adviceId.textContent = `ADVICE #${id}`;
    adviceText.textContent = `“${advice}”`;
}

