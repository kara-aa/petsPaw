

function clearBox() {
    document.querySelector('.right-block').innerHTML = '';
    document.querySelector('.right-block').style.background = 'none';
}

function editWidthTitleBreeds() {
    document.querySelector('.right-block__section-title').style.width = '143px';
}

//function 
const btnVoting = document.getElementById('main_1');
const btnBreeds = document.getElementById('main_2');
const btnGallery = document.getElementById('main_3');
const btnSearcher = document.getElementById('nax_search');
const btnLikes = document.getElementById('nav_like');
const btnFav = document.getElementById('nav_fav');
const btnDislikes = document.getElementById('nav_dislike');
const btnBack = document.getElementById('nav_back');
const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');

function handlerHover(e) {
    const parentEvent = e.currentTarget;
    if (parentEvent === btnLikes)
        console.log('1');
    else if (parentEvent === btnFav)
        console.log('2')
    else if (parentEvent === btnDislikes)
        console.log('3');
}

btnVoting.addEventListener('click', handlerHover);
// btnBack.addEventListener('')
