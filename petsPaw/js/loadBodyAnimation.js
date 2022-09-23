import { arrBreeds } from './app.js';
import AnimationBtnByHover from './animationButtonsHover.js';

function findNeededCardInArray(card) {
    let neededArrCard = '';
    arrBreeds.forEach((element, index) => {
        if (element.btn == card)
            neededArrCard = arrBreeds[index];
    })
    return neededArrCard;
}

//Function for loading breeds and gallery cards hover
export default function loadBodyAnimation() {
    arrBreeds.forEach((element, index) => {
        $(element.btn).mouseover(function () {
        console.log(arrBreeds[index])
        let animation = new AnimationBtnByHover(arrBreeds[index-1]);
        animation.animationBtnMouseOver();
        }) 
    })
    //    $('.right-block__grid-item').mouseover(function () {
    //     let animation = new AnimationBtnByHover(findNeededCardInArray($(this)[0]));
    //     animation.animationBtnMouseOver();
    //     }) 
}