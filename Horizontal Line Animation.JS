function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);


        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }


    function getRandomColor() {
        const colors = ['#ff66b2', '#66ff66', '#66ccff', '#ffcc66', '#ff6666'];
        return colors[Math.floor(Math.random() * colors.length)];
    }


    setInterval(createConfetti, 100);