const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl =document.getElementById("author")
const apiURL = "https://api.quotable.io/random";

async function getQuote(){

    try {
        btnEl.innerText="loading....";
        btnEl.disabled=true;
        quoteEl.innerText="updating";
        authorEl.innerText= "updating";
        const response = await fetch(apiURL)
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author
        
        quoteEl.innerText=quoteContent;
        authorEl.innerText= "~"+quoteAuthor;
        btnEl.innerText="Get Quote";
        btnEl.disabled=false;
        console.log(data); 
    } 
    catch (error) {
        console.log(error);
        quoteEl.innerText="check your network connection";
        authorEl.innerText= " "
        btnEl.disabled=true;
    }

}
getQuote();
btnEl.addEventListener("click",getQuote);