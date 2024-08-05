let currentIndex = 0;

function moveSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    moveSlide();
    setTimeout(autoSlide, 4000);
}

// Start automatic slide show
setTimeout(autoSlide, 3000);


function displayCurrentTime() {
    const timeElement = document.getElementById('time');
    const currentDate = new Date();
    
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${hours} horas ${minutes} minutos ${seconds} segundos`;
    
    timeElement.innerHTML = `10 Meses, ${formattedTime}`;
}

// Atualiza a hora a cada segundo
setInterval(displayCurrentTime, 1000);

// Exibe a hora atual imediatamente
displayCurrentTime();

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's'; // duração entre 5s e 8s
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // remover o hearts após 8 segundos
}

// Aumentar a quantidade de hearts
setInterval(createHeart, 150);