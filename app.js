var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", clickEventHandler)

var textInput = document.querySelector("#text-input");

var textOutput = document.querySelector("#text-output");

var serverURL = "https://api.funtranslations.com/translate/doge.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
         
}

function clickEventHandler(){
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
        textOutput.innertext = json.contents.translated;
    })
    .catch(errorHandler => alert("Something went wrong, try again later"))
};
