let api_url="https://api.quotable.io/random";

let quote=document.querySelector("blockquote")
let author=document.querySelector("span")

async function Generation(url)
{
    let response= await fetch(url)
    let data =await response.json();
    
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

Generation(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML,
    "_blank",
    "width=600, height=300")
}
