//Imports
import AnimationBtnByHover from "./animationButtonsHover.js";
import animationBtnByClick from "./animationButtonsClick.js";
import loadNavAnimation from "./loadNavAnimation.js";
import { card, ajaxLoadFunctionality } from "./ajaxLoadPages.js";
//Exports
export { likesBtn, favsBtn, dislikesBtn, btnVoting, btnBreeds, btnGallery, tabVoting, tabBreeds, tabGallery, arrBtns, switchNext, switchPrev, assignmentNav, rightBlock };
//Declare constants
//Buttons
const searchBtn = document.getElementById('nav_search');
let likesBtn = '';
let favsBtn = '';
let dislikesBtn = '';
let switchPrev = '';
let switchNext = '';

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
    { btn: tabVoting, status: true }, { btn: tabBreeds, status: true }, { btn: tabGallery, status: true },
    { btn: switchNext }, { btn: switchPrev },
];
const data = []; //for breeds info
$.ajax({
    type: 'GET',
    url: 'https://api.thecatapi.com/v1/breeds',
    success: function (info) {
        info.forEach(element => {
            data.push(element);
        });
    }
})

//Function for assigmenting tabs' navigation
function assignmentNav() {
    likesBtn = document.getElementById('nav_like');
    dislikesBtn = document.getElementById('nav_dislike');
    favsBtn = document.getElementById('nav_fav');
    switchPrev = document.getElementById('btn_prev');
    switchNext = document.getElementById('btn_next');
    arrBtns[0].btn = likesBtn;
    arrBtns[1].btn = favsBtn;
    arrBtns[2].btn = dislikesBtn;
    arrBtns[9].btn = switchNext;
    arrBtns[10].btn = switchPrev;
}

//Animation by click
//Buttons
$('#btn_voting').click(function () {
    let animation = new animationBtnByClick(arrBtns[3]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/voting.html', true);
    else 
        ajaxLoadFunctionality('/pages/voting.html', false);    
});

$('#btn_breeds').click(function () {
    let animation = new animationBtnByClick(arrBtns[4]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/breeds.html', true);
    else 
       ajaxLoadFunctionality('/pages/breeds.html', false);
});
$('#btn_gallery').click(function () {
    let animation = new animationBtnByClick(arrBtns[5]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/gallery.html', true);
    else 
        ajaxLoadFunctionality('/pages/gallery.html', false);
});
//Tabs
$('#tab_voting').click(function () {
    let animation = new animationBtnByClick(arrBtns[6]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/voting.html', true);
    else 
        ajaxLoadFunctionality('/pages/voting.html', false);
});
$('#tab_breeds').click(function () {
    let animation = new animationBtnByClick(arrBtns[7]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/breeds.html', true);
    else 
        ajaxLoadFunctionality('/pages/breeds.html', false);    
});
$('#tab_gallery').click(function () {
    let animation = new animationBtnByClick(arrBtns[8]);
    animation.animationBtnClick();
    if (!rightBlock.querySelector('.right-block__nav')) 
        ajaxLoadFunctionality('/pages/gallery.html', true);
    else 
        ajaxLoadFunctionality('/pages/gallery.html', false);
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