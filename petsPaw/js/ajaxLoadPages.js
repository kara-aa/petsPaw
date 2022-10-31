import { assignmentNav, rightBlock, arrBreeds, arrGallery, listBreeds,  } from './app.js';
import loadNavAnimation from "./loadNavAnimation.js";
import loadBodyAnimation from './loadBodyAnimation.js';
export { ajaxLoadFunctionality, clearBox, createFrame };

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
function createCards(serialNumber, arr, url) {
    let divCard = document.createElement('div');
    let divHover = document.createElement('div');
    let img = document.createElement('img');
    let btn = document.createElement('div');
    let span = document.createElement('span');
    
    divCard.className = 'right-block__grid-item';
    divHover.className = 'card-hover';
    if (url == '/pages/breeds.html') {
        btn.className = 'right-block__btn-breed';
        btn.insertAdjacentElement('afterbegin', span);
    }
    else if (url == '/pages/gallery.html')
        btn.className = 'right-block__btn-gallery';
    divCard.classList.add(`item_${serialNumber}`);
    divCard.insertAdjacentElement('afterbegin', img);
    divHover.insertAdjacentElement('afterbegin', btn);
    divCard.insertAdjacentElement('afterbegin', divHover);
    arr.push({ btn: divCard, index: serialNumber - 1 });

    return divCard;
}

//Function for creating to insert select options
function fillSelects(array) {
    let select = document.getElementById('select_breeds');
    if (select == null)
        select = document.getElementById('select_gallery-breeds');
    array.forEach(breed => {
        let option = document.createElement('option');
        option.setAttribute('value', `${breed.id}`);
        option.innerHTML = breed.name;
        select.insertAdjacentElement('beforeend', option);
    })
}

//Function for generating elements in accordance limit
function generateLimit() {
    
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
                    fillSelects(listBreeds);
                    let selectLimit = $('.select_limit')[0];
                    let selectLimitValue = $(selectLimit).val();
                    arrBreeds.length = 0;
                    arrGallery.length = 0;
                    for (let i = 1; i <= selectLimit; i++){
                        if (url == '/pages/breeds.html') {
                            $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i, arrBreeds, '/pages/breeds.html'));
                        }
                        else if (url == '/pages/gallery.html')
                            $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i, arrGallery, '/pages/gallery.html'));
                    }
                }
                loadBodyAnimation();
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
                    fillSelects(listBreeds);
                    let selectLimit = $('.select_limit')[0];
                    console.log(selectLimit)
                    arrBreeds.length = 0;
                    arrGallery.length = 0;
                    for (let i = 1; i <= selectLimit; i++){
                        if (url == '/pages/breeds.html') 
                            $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i, arrBreeds, '/pages/breeds.html'));
                        else if (url == '/pages/gallery.html')
                            $('.grid_body')[0].insertAdjacentElement('beforeend', createCards(i, arrGallery, '/pages/gallery.html'));
                    }
                }
                loadBodyAnimation();
            }
        })
    }
}