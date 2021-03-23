var btn = document.querySelector("#btn-translate");
var txt_input = document.querySelector("#txt-area");
var outputdiv = document.querySelector("#output");


// var serverURl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURl = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text)
{
    return serverURl + "?" + "text=" + text;
}

function clickHandler()
{
    var inputText = txt_input.value;
    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var translatedText = json.contents.translated;
    outputdiv.innerText = translatedText;
    })              
}; 
btn.addEventListener("click",clickHandler);


