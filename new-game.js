function playAgain() {
    document.querySelector('body').style.opacity = 0
        setTimeout(function() { 
            window.location.href = "index.html"
        }, 1500)
}

const btn = document.querySelector('#btn-play-again');

btn.addEventListener('click', playAgain);
