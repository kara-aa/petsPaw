import {
    likesBtn, favsBtn, dislikesBtn, btnVoting, btnBreeds, btnGallery, tabVoting, tabBreeds, tabGallery, switchNext, switchPrev,} from './app.js';
export { AnimationBtnByHover};
class AnimationBtnByHover{
    constructor(btn) {
        this.btn = btn.btn;
        this.status = btn.status;
    }
    
    //Animation by hover
    animationBtnMouseOver() {
        if ((this.btn == btnVoting || this.btn == btnBreeds || this.btn == btnGallery) && (this.status == true)) {
            $(this.btn).css({
            background: '#FBE0DC',
        })
        }
        else if ((this.btn == likesBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#FBE0DC',
                backgroundImage: 'url(/img/icons/like-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
            
        }
        else if ((this.btn == dislikesBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#FBE0DC',
                backgroundImage: 'url(/img/icons/dislike-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
        })
        }
        else if ((this.btn == favsBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#FBE0DC',
                backgroundImage: 'url(/img/icons/fav-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
        })
        }
        else if ((this.btn == tabVoting || this.btn == tabBreeds || this.btn == tabGallery) && (this.status == true)) {
            $(this.btn).css({
                border: '4px solid #F8F8F7',
        })
        }        
    }

    animationBtnMouseOut() {
        if ((this.btn == btnVoting || this.btn == btnBreeds || this.btn == btnGallery) && (this.status == true)) {
            $(this.btn).css({
                background: '#fff',
            })
        }
        else if ((this.btn == likesBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#fff',
                backgroundImage: 'url(/img/icons/like-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if ((this.btn == dislikesBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#fff',
                backgroundImage: 'url(/img/icons/dislike-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if ((this.btn == favsBtn) && (this.status == true)) {
            $(this.btn).css({
                background: '#fff',
                backgroundImage: 'url(/img/icons/fav-30.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            })
        }
        else if ((this.btn == tabVoting || this.btn == tabBreeds || this.btn == tabGallery) && (this.status == true)) {
            $(this.btn).css({
                border: '4px solid rgba(255, 255, 255, 0.6)',
            })
        }
    }
}