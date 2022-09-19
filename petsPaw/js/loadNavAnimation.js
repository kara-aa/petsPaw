import { likesBtn, favsBtn, dislikesBtn, arrBtns } from './app.js';
import animationBtnByClick from './animationButtonsClick.js';
import AnimationBtnByHover from './animationButtonsHover.js';

export default function loadNavAnimation() {
    animationNavByHover();
    animationNavByClick();

    //By click
    function animationNavByClick() {
        $(likesBtn).on('click', function () {
            let animationN = new animationBtnByClick(arrBtns[0]);
            animationN.animationBtnClick();
        })
        $(dislikesBtn).on('click', function () {
            let animationN = new animationBtnByClick(arrBtns[2]);
            animationN.animationBtnClick();
        })
        $(favsBtn).on('click', function () {
            let animationN = new animationBtnByClick(arrBtns[1]);
            animationN.animationBtnClick();
        })
    }
    //By hover
    function animationNavByHover() {
        $(likesBtn).mouseover(function () {
        let animation = new AnimationBtnByHover(arrBtns[0]);
        animation.animationBtnMouseOver();
        });
        $('#nav_like').mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[0]);
            animation.animationBtnMouseOut();
        });
        $('#nav_dislike').mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[2]);
            animation.animationBtnMouseOver();
        });
        $('#nav_dislike').mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[2]);
            animation.animationBtnMouseOut();
        });
        $('#nav_fav').mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[1]);
            animation.animationBtnMouseOver();
        });
        $('#nav_fav').mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[1]);
            animation.animationBtnMouseOut();
        });
    }
}
