import AnimationBtn from "./animationButtons.js";
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
//Blocks
const rightBlock = document.querySelector('.right-block');

//Arr buttons info
const arrBtns = [{ btn: likesBtn, status: true }, { btn: favsBtn, status: true }, { btn: dislikesBtn, status: true },
    { btn: btnVoting, status: true }, { btn: btnBreeds, status: true}, { btn: btnGallery, status: true },
    { btn: tabVoting, status: true }, { btn: tabBreeds, status: true }, { btn: tabGallery, status: true }];

//Function for getting status btn (active or no)
function getStatusBtn(btn) {
        for (let i = 0; i < arrBtns.length; i++){
            if (btn == arrBtns[i].btn)
                return arrBtns[i].status;
        }
}

//Animation by hover
function animationBtnMouseOver() {
    let keys = Object.keys($(this));
    let btn = $(this)[keys[0]];

    if ((btn == btnVoting || btn == btnBreeds || btn == btnGallery) && (getStatusBtn(btn) == true)) {
        $(this).css({
        background: '#FBE0DC',
    })
    }
    else if ((btn == likesBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/like-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == dislikesBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/dislike-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == favsBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#FBE0DC',
            backgroundImage: 'url(/img/icons/fav-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == tabVoting || btn == tabBreeds || btn == tabGallery) && (getStatusBtn(btn) == true)) {
        $(this).css({
            border: '4px solid #F8F8F7',
    })
    }
}

function animationBtnMouseOut() {
    let keys = Object.keys($(this));
    let btn = $(this)[keys[0]];
    if ((btn == btnVoting || btn == btnBreeds || btn == btnGallery) && (getStatusBtn(btn) == true)) {
        $(this).css({
        background: '#fff',
    })
    }
    else if ((btn == likesBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/like-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == dislikesBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/dislike-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == favsBtn) && (getStatusBtn(btn) == true)) {
        $(this).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/fav-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if ((btn == tabVoting || btn == tabBreeds || btn == tabGallery)  && (getStatusBtn(btn) == true)) {
        $(this).css({
            border: '4px solid rgba(255, 255, 255, 0.6)',
    })
    }
}

//Function for default button styles
function defaultBtnStyle(btn) {
    if (btn == btnVoting || btn == btnBreeds || btn == btnGallery) {
        $(btn).css({
            background: '#fff',
            color: '#FF868E',
    })
    }
    else if (btn == likesBtn) {
        $(btn).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/like-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == dislikesBtn) {
        $(btn).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/dislike-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == favsBtn) {
        $(btn).css({
            background: '#fff',
            backgroundImage: 'url(/img/icons/fav-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
    })
    }
    else if (btn == tabVoting || btn == tabBreeds || btn == tabGallery) {
        $(btn).css({
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

//Function for resetting styles others buttons, which not chosen
function resetStylesNoUsedButtons(currentBtn) {
    for (let i = 0; i < arrBtns.length; i++){
        if (currentBtn !== arrBtns[i].btn) {
            arrBtns[i].status = true;
            defaultBtnStyle(arrBtns[i].btn);
        }
        else 
            arrBtns[i].status = false;
    }
}

//Animation by click
function animationBtnClick() {
    let keys = Object.keys($(this));
    let btn = $(this)[keys[0]];
    if (btn == likesBtn) {
        $(this).css({
            background:'#FF868E',
            backgroundImage: 'url(/img/icons_white/like-white-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        })
    }
    else if (btn == dislikesBtn) {
        $(this).css({
            background:'#FF868E',
            backgroundImage: 'url(/img/icons_white/dislike-white-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        })
    }
    else if (btn == favsBtn) {
        $(this).css({
            background:'#FF868E',
            backgroundImage: 'url(/img/icons_white/fav-white-30.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        })
    }
    else if (btn == btnVoting) {
        $(this).css({
            background:'#FF868E',
            color: '#fff',
        })
        resetStylesNoUsedButtons(btn);
        $(tabVoting).css({
            border: '4px solid #FBE0DC',
        })
        arrBtns[6].status = false;
    }
    else if (btn == btnBreeds) {
        $(this).css({
            background:'#FF868E',
            color: '#fff',
        })
        resetStylesNoUsedButtons(btn);
        $(tabBreeds).css({
            border: '4px solid #FBE0DC',
        })
        arrBtns[7].status = false;
    }
    else if (btn == btnGallery) {
        $(this).css({
            background:'#FF868E',
            color: '#fff',
        })
        resetStylesNoUsedButtons(btn);
        $(tabGallery).css({
            border: '4px solid #FBE0DC',
        })
        arrBtns[8].status = false;
    }

    if(btn == likesBtn || btn == dislikesBtn || btn == favsBtn)
        resetStylesNoUsedButtons(btn);
}

//Animation by click
//Buttons
$('#nav_like').click(animationBtnClick);
$('#nav_dislike').click(animationBtnClick);
$('#nav_fav').click(animationBtnClick);
$('#btn_voting').click(animationBtnClick);
$('#btn_breeds').click(animationBtnClick);
$('#btn_gallery').click(animationBtnClick);
//Tabs
$('#tab_voting').click(animationBtnClick);
$('#tab_breeds').click(animationBtnClick);
$('#tab_gallery').click(animationBtnClick);

//Function for resetting page
function clearBox() {
    rightBlock.innerHTML = '';
    $(rightBlock).css({ background: '#F8F8F7', });
}

//Function for load content from others .html
function loadContent(btn) {
    clearBox;
    if (btn == btnVoting) {
        $(rightBlock).load('/pages/voting.html');
    }
    else if (btn == btnBreeds) {
        $(rightBlock).load('/pages/breeds.html');
    }
    else if (btn == btnGallery) {
        $(rightBlock).load('/pages/gallery.html');
    }
}
