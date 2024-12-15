const buttons = document.querySelectorAll('.cta-button');

function blinkButton() {
    buttons.forEach(button => {
        button.style.backgroundColor = button.style.backgroundColor === '#0f0' ? '#000' : '#0f0';
        button.style.color = button.style.color === '#000' ? '#0f0' : '#000';
    });
}

setInterval(blinkButton, 1000);