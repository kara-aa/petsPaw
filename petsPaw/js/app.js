//Imports
import AnimationBtnByHover from "./animationButtonsHover.js";
import animationBtnByClick from "./animationButtonsClick.js";
import loadNavAnimation from "./loadNavAnimation.js";
//Exports
export { likesBtn, favsBtn, dislikesBtn, btnVoting, btnBreeds, btnGallery, tabVoting, tabBreeds, tabGallery, arrBtns };
//Declare constants
//Buttons
const searchBtn = document.getElementById('nav_search');
let likesBtn = '';
let favsBtn = '';
let dislikesBtn = '';
const btnVoting = document.getElementById('btn_voting');
const btnBreeds = document.getElementById('btn_breeds');
const btnGallery = document.getElementById('btn_gallery');
//Tabs
const tabVoting = document.getElementById('tab_voting');
const tabBreeds = document.getElementById('tab_breeds');
const tabGallery = document.getElementById('tab_gallery');
//Blocks
const rightBlock = document.querySelector('.right-block');
// const nav = document.querySelector('.right-block__nav');
//Arr buttons info
const arrBtns = [{ btn: likesBtn, status: true }, { btn: favsBtn, status: true }, { btn: dislikesBtn, status: true },
    { btn: btnVoting, status: true }, { btn: btnBreeds, status: true}, { btn: btnGallery, status: true },
    { btn: tabVoting, status: true }, { btn: tabBreeds, status: true }, { btn: tabGallery, status: true }
];

//Function for resetting page
function clearBox() {
    rightBlock.innerHTML = '';
    $(rightBlock).css({ background: '#F8F8F7', });
}

//Function for assigmenting tabs' navigation
function assignmentNav() {
    likesBtn = document.getElementById('nav_like');
    dislikesBtn = document.getElementById('nav_dislike');
    favsBtn = document.getElementById('nav_fav');
    arrBtns[0].btn = likesBtn;
    arrBtns[1].btn = favsBtn;
    arrBtns[2].btn = dislikesBtn;
}

//Animation by click
//Buttons
$('#btn_voting').click(function () {
    let animation = new animationBtnByClick(arrBtns[3]);
    animation.animationBtnClick();
    clearBox;
    $.ajax({
        type: 'GET',
        url: '/pages/voting.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});

$('#btn_breeds').click(function () {
    let animation = new animationBtnByClick(arrBtns[4]);
    animation.animationBtnClick();
    clearBox;
    $.ajax({
        type: 'GET',
        url: '/pages/breeds.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});
$('#btn_gallery').click(function () {
    let animation = new animationBtnByClick(arrBtns[5]);
    animation.animationBtnClick();
    clearBox;
    $.ajax({
        type: 'GET',
        url: '/pages/gallery.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});
//Tabs
$('#tab_voting').click(function () {
    let animation = new animationBtnByClick(arrBtns[6]);
    animation.animationBtnClick();
    clearBox;
    $.ajax({
        type: 'GET',
        url: '/pages/voting.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});
$('#tab_breeds').click(function () {
    let animation = new animationBtnByClick(arrBtns[7]);
    animation.animationBtnClick();
    clearBox;
    $.ajax({
        type: 'GET',
        url: '/pages/breeds.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});
$('#tab_gallery').click(function () {
    let animation = new animationBtnByClick(arrBtns[8]);
    animation.animationBtnClick();
    clearBox;
    $(rightBlock).load('/pages/gallery.html');
    $.ajax({
        type: 'GET',
        url: '/pages/gallery.html',
        success: function (html) {
            $('.right-block').html(html);
            assignmentNav();
            loadNavAnimation();
        }
    })
});

//Animation by hover
//Buttons
$('#btn_voting').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[3]);
    animation.animationBtnMouseOver();
});
$('#btn_voting').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[3]);
    animation.animationBtnMouseOut();
});
$('#btn_breeds').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[4]);
    animation.animationBtnMouseOver();
});
$('#btn_breeds').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[4]);
    animation.animationBtnMouseOut();
});
$('#btn_gallery').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[5]);
    animation.animationBtnMouseOver();
});
$('#btn_gallery').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[5]);
    animation.animationBtnMouseOut();
});
//Tabs
$('#tab_voting').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[6]);
    animation.animationBtnMouseOver();
});
$('#tab_voting').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[6]);
    animation.animationBtnMouseOut();
});
$('#tab_breeds').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[7]);
    animation.animationBtnMouseOver();
});
$('#tab_breeds').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[7]);
    animation.animationBtnMouseOut();
});
$('#tab_gallery').mouseover(function () {
    let animation = new AnimationBtnByHover(arrBtns[8]);
    animation.animationBtnMouseOver();
});
$('#tab_gallery').mouseout(function () {
    let animation = new AnimationBtnByHover(arrBtns[8]);
    animation.animationBtnMouseOut();
});
