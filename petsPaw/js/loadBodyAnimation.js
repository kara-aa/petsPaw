import { arrBreeds, arrGallery, arrBtns } from './app.js';
import { AnimationBtnByHover } from './animationButtonsHover.js';
import { animationBtnBodyByClick } from './animationButtonsClick.js';

//Function for loading breeds and gallery cards hover
export default function loadBodyAnimation() {
    $('.select_limit').change(function () {
        
    })
    $('#btn_upload').click(function () {
        let animation = new animationBtnBodyByClick(this);
        animation.animationBtnByClick();
        setTimeout(function () { 
            $('#btn_close').click(function () {
                let animation = new animationBtnBodyByClick(this);
                animation.animationBtnByClick();
            })
        }, 10)
    })
}