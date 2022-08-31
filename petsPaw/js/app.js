//Declare constants
//Buttons
const searchBtn = document.getElementById('nav_search');
const likesBtn = document.getElementById('nav_like');
const favsBtn = document.getElementById('nav_fav');
const dislikesBtn = document.getElementById('nav_dislike');
const btnVoting = document.getElementById('btn_voting');
const btnBreeds = document.getElementById('btn_breeds');
const btnGallery = document.getElementById('btn_gallery');
//Tabs
const tabVoting = document.getElementById('tab_voting');
const tabBreeds = document.getElementById('tab_breeds');
const tabGallery = document.getElementById('tab_gallery');

//Arr buttons info
const arrBtns = [{btn: likesBtn, status: true }, {btn: favsBtn, status: true }, {btn: dislikesBtn, status: true }];

//Functions needed data for buttons by hover
// function dataBtnForMouseOver(btn) {
//     if (btn == likesBtn)
//         return { background: '#FBE0DC', backgroundImage: 'url(/img/icons/like-30.png)', active: arrBtns[0].status };
//     else if (btn == dislikesBtn)
//         return { background: '#FBE0DC', backgroundImage: 'url(/img/icons/dislike-30.png)', active: arrBtns[2].status };
//     else if (btn == favsBtn)
//         return { background: '#FBE0DC', backgroundImage: 'url(/img/icons/fav-30.png)', active: arrBtns[1].status };
// }

// function dataBtnForMouseOut(btn) {
//     if (btn == likesBtn)
//         return { background: '#fff', backgroundImage: 'url(/img/icons/like-30.png)', active: arrBtns[0].status };
//     else if (btn == dislikesBtn)
//         return { background: '#fff', backgroundImage: 'url(/img/icons/dislike-30.png)', active: arrBtns[2].status };
//     else if (btn == favsBtn)
//         return {background: '#fff', backgroundImage: 'url(/img/icons/fav-30.png)', active: arrBtns[1].status };
// }

// //Functions for animations by hover
// function animationBtnMouseOver(data, btn) {
//     if (data.active == true) {
//         btn.style.background = data.background;
//         btn.style.backgroundImage = data.backgroundImage;
//         btn.style.backgroundRepeat = 'no-repeat';
//         btn.style.backgroundPosition = 'center';
//     }
// }

// function animationBtnMouseOut(data, btn) {
//     if (data.active == true) {
//         btn.style.background = data.background;
//         btn.style.backgroundImage = data.backgroundImage;
//         btn.style.backgroundRepeat = 'no-repeat';
//         btn.style.backgroundPosition = 'center';
//     }
// }

// //Functions needed data by click
// function dataBtnForClick(btn) {
//     if (btn == likesBtn)
//         return { backgroundImage: 'url(/img/icons_white/like-white-30.png)' };
//     else if (btn == dislikesBtn)
//         return { backgroundImage: 'url(/img/icons_white/dislike-white-30.png)' };
//     else if (btn == favsBtn)
//         return {backgroundImage: 'url(/img/icons_white/fav-white-30.png)'};
// }

// //Animation by click
// function animationBtnClick(data, btn) {
//     btn.style.background = '#FF868E';
//     btn.style.backgroundImage = data.backgroundImage;
//     btn.style.backgroundRepeat = 'no-repeat';
//     btn.style.backgroundPosition = 'center';
// }

// //Function for resetting styles others buttons, which not chosen
// function resetStylesNoUsedButtons(currentBtn) {
//     for (let i = 0; i < arrBtns.length; i++){
//         if (currentBtn !== arrBtns[i].btn) {
//             arrBtns[i].status = true;
//             animationBtnMouseOut(dataBtnForMouseOut(arrBtns[i].btn), arrBtns[i].btn);
//         }
//         else
//             arrBtns[i].status = false;
//     }
// }

//Events hover for buttons
// likesBtn.addEventListener('mouseover', (e) => { animationBtnMouseOver(dataBtnForMouseOver(likesBtn), likesBtn); });
// likesBtn.addEventListener('mouseout', (e) => { animationBtnMouseOut(dataBtnForMouseOut(likesBtn), likesBtn); });
// dislikesBtn.addEventListener('mouseover', (e) => { animationBtnMouseOver(dataBtnForMouseOver(dislikesBtn), dislikesBtn); });
// dislikesBtn.addEventListener('mouseout', (e) => { animationBtnMouseOut(dataBtnForMouseOut(dislikesBtn), dislikesBtn); });
// favsBtn.addEventListener('mouseover', (e) => { animationBtnMouseOver(dataBtnForMouseOver(favsBtn), favsBtn); });
// favsBtn.addEventListener('mouseout', (e) => { animationBtnMouseOut(dataBtnForMouseOut(favsBtn), favsBtn); });

// //Events click for buttons
// likesBtn.addEventListener('click', (e) => {
//     animationBtnClick(dataBtnForClick(likesBtn), likesBtn);
//     resetStylesNoUsedButtons(likesBtn);
// });
// dislikesBtn.addEventListener('click', (e) => {
//     animationBtnClick(dataBtnForClick(dislikesBtn), dislikesBtn);
//     resetStylesNoUsedButtons(dislikesBtn);
// });
// favsBtn.addEventListener('click', (e) => {
//     animationBtnClick(dataBtnForClick(favsBtn), favsBtn);
//     resetStylesNoUsedButtons(favsBtn);
// });

function animationBtnMouseOver() {
    let keys = Object.keys($(this));
    let btn = $(this)[keys[0]];
    if (btn == btnVoting || btn == btnBreeds || btn == btnGallery) {
        $(this).css({
        background: '#FBE0DC',
    })
    }
    else if (btn == likesBtn) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/like-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == dislikesBtn) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/dislike-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == favsBtn) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/fav-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == tabVoting || btn == tabBreeds || btn == tabGallery) {
        $(this).css({
            border: '4px solid #F8F8F7',
    })
    }
}

function animationBtnMouseOut() {
    let keys = Object.keys($(this));
    let btn = $(this)[keys[0]];
    if (btn == btnVoting || btn == btnBreeds || btn == btnGallery) {
        $(this).css({
        background: '#fff',
    })
    }
    else if (btn == likesBtn) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/like-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == dislikesBtn) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/dislike-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == favsBtn) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/fav-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == tabVoting || btn == tabBreeds || btn == tabGallery) {
        $(this).css({
            border: '4px solid rgba(255, 255, 255, 0.6)',
    })
    }
}
//Animation by hover
//Buttons
$('#btn_voting').mouseover(animationBtnMouseOver);
$('#btn_voting').mouseout(animationBtnMouseOut);
$('#nav_like').mouseover(animationBtnMouseOver);
$('#nav_like').mouseout(animationBtnMouseOut);
$('#nav_dislike').mouseover(animationBtnMouseOver);
$('#nav_dislike').mouseout(animationBtnMouseOut);
$('#nav_fav').mouseover(animationBtnMouseOver);
$('#nav_fav').mouseout(animationBtnMouseOut);
$('#btn_breeds').mouseover(animationBtnMouseOver);
$('#btn_breeds').mouseout(animationBtnMouseOut);
$('#btn_gallery').mouseover(animationBtnMouseOver);
$('#btn_gallery').mouseout(animationBtnMouseOut);
//Tabs
$('#tab_voting').mouseover(animationBtnMouseOver);
$('#tab_voting').mouseout(animationBtnMouseOut);
$('#tab_breeds').mouseover(animationBtnMouseOver);
$('#tab_breeds').mouseout(animationBtnMouseOut);
$('#tab_gallery').mouseover(animationBtnMouseOver);
$('#tab_gallery').mouseout(animationBtnMouseOut);

//Animation by click
$('#btn_voting').click(function () {
    $(this).css({
        background: '#000',
    })
})