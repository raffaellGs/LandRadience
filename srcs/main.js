var next = document.getElementById('next');
var prev = document.getElementById('prev');
var thumbnail = document.getElementsByClassName('thumbnail');
var container = document.getElementById('container')

var backgroundImg = new Array(
    "./img/bg1.png",
    "./img/bg2.png",
    "./img/bg3.png",
    "./img/bg4.png",
    "./img/bg5.png",
);


let i = 0;
next.addEventListener('click', () => {

    if (i < 4) {

        container.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
        thumbnail[i+1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i++
    }
});

prev.addEventListener('click', () => {

    if (i > 0) {

        container.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
        thumbnail[i-1].classList.add('active');
        thumbnail[i].classList.remove('active');
        i--
    }
});
