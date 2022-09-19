import { likesBtn, favsBtn, dislikesBtn, btnVoting, btnBreeds, btnGallery, tabVoting, tabBreeds, tabGallery, arrBtns } from './app.js';
//Function for resetting styles others buttons, which not chosen
function resetStylesNoUsedButtons(btn) {
        for (let i = 0; i < arrBtns.length; i++){
            if (btn !== arrBtns[i].btn) {
                arrBtns[i].status = true;
                defaultBtnStyle(arrBtns[i].btn);
            }
            else 
                arrBtns[i].status = false;
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
    
export default class animationBtnByClick{
    constructor(btn) {
        this.btn = btn.btn;
        this.status = btn.status;
    }

    animationBtnClick() {
        if (this.btn == likesBtn) {
            $(this.btn).css({
                background:'#FF868E',
                backgroundImage: 'url(/img/icons_white/like-white-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if (this.btn == dislikesBtn) {
            $(this.btn).css({
                background:'#FF868E',
                backgroundImage: 'url(/img/icons_white/dislike-white-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if (this.btn == favsBtn) {
            $(this.btn).css({
                background:'#FF868E',
                backgroundImage: 'url(/img/icons_white/fav-white-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if (this.btn == btnVoting) {
            $(this.btn).css({
                background:'#FF868E',
                color: '#fff',
            })
            resetStylesNoUsedButtons(this.btn);
            $(tabVoting).css({
                border: '4px solid #FBE0DC',
            })
            arrBtns[6].status = false;
        }
        else if (this.btn == btnBreeds) {
            $(this.btn).css({
                background:'#FF868E',
                color: '#fff',
            })
            resetStylesNoUsedButtons(this.btn);
            $(tabBreeds).css({
                border: '4px solid #FBE0DC',
            })
            arrBtns[7].status = false;
        }
        else if (this.btn == btnGallery) {
            $(this.btn).css({
                background:'#FF868E',
                color: '#fff',
            })
            resetStylesNoUsedButtons(this.btn);
            $(tabGallery).css({
                border: '4px solid #FBE0DC',
            })
            arrBtns[8].status = false;
        }
        else if (this.btn == tabVoting) {
            $(this.btn).css({
                border: '4px solid #FBE0DC',
            })
            resetStylesNoUsedButtons(this.btn);
            $(btnVoting).css({
                background:'#FF868E',
                color: '#fff',
            })
            arrBtns[3].status = false;
        }
        else if (this.btn == tabBreeds) {
            $(this.btn).css({
                border: '4px solid #FBE0DC',
            })
            resetStylesNoUsedButtons(this.btn);
            $(btnBreeds).css({
                background:'#FF868E',
                color: '#fff',
            })
            arrBtns[4].status = false;
        }
        else if (this.btn == tabGallery) {
            $(this.btn).css({
                border: '4px solid #FBE0DC',
            })
            resetStylesNoUsedButtons(this.btn);
            $(btnGallery).css({
                background:'#FF868E',
                color: '#fff',
            })
            arrBtns[5].status = false;
        }
        
        if(this.btn == $('#nav_like')[0] || this.btn == dislikesBtn || this.btn == favsBtn)
            resetStylesNoUsedButtons(this.btn);
    }
}