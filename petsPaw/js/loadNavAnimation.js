import { likesBtn, favsBtn, dislikesBtn, arrBtns, switchNext, switchPrev, arrBreeds } from './app.js';
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
        $(likesBtn).mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[0]);
            animation.animationBtnMouseOut();
        });
        $(dislikesBtn).mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[2]);
            animation.animationBtnMouseOver();
        });
        $(dislikesBtn).mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[2]);
            animation.animationBtnMouseOut();
        });
        $(favsBtn).mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[1]);
            animation.animationBtnMouseOver();
        });
        $(favsBtn).mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[1]);
            animation.animationBtnMouseOut();
        });
        $(switchNext).mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[9]);
            animation.animationBtnMouseOver();
        });
        $(switchNext).mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[9]);
            animation.animationBtnMouseOut();
        });
        $(switchPrev).mouseover(function () {
            let animation = new AnimationBtnByHover(arrBtns[10]);
            animation.animationBtnMouseOver();
        });
        $(switchPrev).mouseout(function () {
            let animation = new AnimationBtnByHover(arrBtns[10]);
            animation.animationBtnMouseOut();
        });
    }
}
