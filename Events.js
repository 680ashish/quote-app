
let isCopied = false;
copyBtn.addEventListener('click',()=>{
    if (!isCopied) {
        copyBtn.style.color= 'green';
        isCopied = true; 
    } else {
        copyBtn.style.color= 'black';
        isCopied = false; 
    }
});

let isPlaying = false;
playBtn.addEventListener('click', () => {
    const textToSpeak = quoteText.innerText;
    let playBtnIcon = document.querySelector('#play i');

    if (!isPlaying) {
        // If audio is not playing, start playing
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        window.speechSynthesis.speak(utterance);
        playBtnIcon.classList.remove('ri-play-circle-line'); // Remove play icon
        playBtnIcon.classList.add('ri-pause-circle-line'); // Add pause icon
        isPlaying = true; // Update state to playing
    } else {
        // If audio is playing, pause it
        window.speechSynthesis.cancel(); // Pause the audio
        playBtnIcon.classList.remove('ri-pause-circle-line'); // Remove pause icon
        playBtnIcon.classList.add('ri-play-circle-line'); // Add play icon
        isPlaying = false; // Update state to not playing
    }
});



let isLiked = false;
likeBtn.addEventListener('click', () => {
    let likeBtnIcon = document.querySelector('#like i');
    
    if (!isLiked) {
        likeBtnIcon.classList.remove('ri-heart-line'); 
        likeBtnIcon.classList.add('ri-heart-fill'); 
        likeBtn.style.color= 'red';
        isLiked = true; 
    } else {
        likeBtnIcon.classList.remove('ri-heart-fill'); 
        likeBtnIcon.classList.add('ri-heart-line');
        likeBtn.style.color= 'black';

        isLiked = false; 
    }
});

