let copyBtn= document.querySelector('#copyBtn');
let playBtn = document.querySelector('#play');
let likeBtn = document.querySelector('#like')
let newQuote= document.querySelector('#newQuote');
let quoteText = document.querySelector('.quote p')
let authorText= document.querySelector('.author');
let url=  'https://type.fit/api/quotes';

async function getQuote(){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let randomtext= data[Math.floor(Math.random()*16)+1];
        let seperator=','
        quoteText.innerText =randomtext.text; // updates the random quote text
        let authorName = randomtext.author.toString().split(seperator);;
        authorText.innerText = authorName[0];

    })
    .catch(function(error) {
        console.log("Error fetching quotes:", error);
    });

}
newQuote.addEventListener('click',async ()=>{
    await getQuote();
})

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteText.innerText)
    .then(()=>{
        return;  
    })
    .catch((err)=>{
        console.log('facing some eror while copieng the quote')
    })
})
