import { assignmentNav, rightBlock } from './app.js';
import loadNavAnimation from "./loadNavAnimation.js";
export { card, ajaxLoadFunctionality };
let card = '';
//Function for preference page for adding content by click
function createFrame() {
    let nav = document.createElement('div');
    nav.className = 'right-block__nav';

    let content = document.createElement('div');
    content.className = 'right-block__content';

    rightBlock.insertAdjacentElement('afterbegin', nav);
    rightBlock.insertAdjacentElement('beforeend', content);
}

//Function for creating grid cards during page loading 
function createCards(serialNumber) {
    let divCard = document.createElement('div');
    let divHover = document.createElement('div');
    let img = document.createElement('img');

    divCard.className = 'right-block__grid-item';
    divCard.classList.add(`item_${serialNumber}`);
    divCard.insertAdjacentElement('afterbegin', img);
    divCard.insertAdjacentElement('afterbegin', divHover);
    return divCard;
}

//Function for resetting page
function clearBox() {
    rightBlock.innerHTML = '';
    $(rightBlock).css({ background: '#F8F8F7', });
}

function ajaxLoadFunctionality(url, firstLoad) {
    if (firstLoad == true) {
        clearBox();
        createFrame();
        $.ajax({
            type: 'GET',
            url: '/pages/nav.html',
            success: function (html) {
                $('.right-block__nav').html(html);
                assignmentNav();
                loadNavAnimation();
            }
        })
        $.ajax({
            type: 'GET',
            url: url,
            success: function (html) {
                $('.right-block__content').html(html);
                assignmentNav();
                loadNavAnimation();
                if ($('.grid_body')[0]) {
                    for (let i = 1; i <= 10; i++){
                        $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i));
                    }
                }
            }
        })
    }
    else {
        $.ajax({
            type: 'GET',
            url: url,
            success: function (html) {
                $('.right-block__content').html(html);
                assignmentNav();
                loadNavAnimation();
                if ($('.grid_body')[0]) {
                    for (let i = 1; i <= 10; i++){
                        $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i));
                    }
                }
            }
        })
    }
}