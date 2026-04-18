/* ----- Script Slide ------ */
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
/* ----- FIM - Script Slide ------ */

/* ----- Script Date ------ */
function displayCurrentTime() {
    const timeElement = document.getElementById('time');
    const dataInicio = new Date('2023-10-12');
    const hoje = new Date();

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0);
        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const formattedTime = `${anos} anos ${meses} meses e ${dias} dias`;

    timeElement.innerHTML = `${formattedTime}`;
}

// Atualiza a hora a cada segundo
setInterval(displayCurrentTime, 1000);

// Exibe a hora atual imediatamente
displayCurrentTime();
/* ----- FIM - Script Date ------ */

/* ----- Script Create Hearts ------ */
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's'; // duração entre 5s e 8s
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // remover o hearts após segundos
}

// Aumentar a quantidade de hearts
setInterval(createHeart, 150);

/* ----- FIM - Script Create Hearts ------ */