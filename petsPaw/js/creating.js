function createCards() {
    let divCard = documnet.createElement('div');
    let divHover = documnet.createElement('div');
    let img = documnet.createElement('img');
    let d = document.createDocumentFragment();

    divCard.insertAdjacentElement('afterbegin', img);
    divCard.insertAdjacentElement('afterbegin', divHover);
    d.insertAdjacentElement('afterbegin', divCard);
    console.log(d);
}