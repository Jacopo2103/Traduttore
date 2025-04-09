// recupero i componenti dalla pagina html
const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');
const resetButton = document.querySelector('.reset-button');

// funzione di reset
function reset() {
    textInput.value = '';
    translationText.innerText = 'Traduzione';
    translationFlag = '';
}

// funzione chiama API WEB
async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;

    translationText.innerText = result;
    translationFlag.innerText = flag;
}

    // Cambia lo sfondo in base alla lingua
    const body = document.body;
    switch (lang) {
        case 'en': // Inglese
            body.style.backgroundImage = "url('./images/united-kingdom.png')";
            break;
        case 'fr': // Francese
            body.style.backgroundImage = "url('./images/france.png')";
            break;
        case 'es': // Spagnolo
            body.style.backgroundImage = "url('./images/spain.png')";
            break;
        
    }


// attaccare eventi ai bottoni
resetButton.addEventListener('click', reset);

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const text = textInput.value;
        const lang = button.dataset.lang;
        const flag = button.innerText;

        if (text == '') {
            alert('Inserisci un testo da tradurre!');
        } else {
            translate(text, lang, flag);
        }
    })
}); 