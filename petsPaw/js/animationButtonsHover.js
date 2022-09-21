import { likesBtn, favsBtn, dislikesBtn, btnVoting, btnBreeds, btnGallery, tabVoting, tabBreeds, tabGallery, switchNext, switchPrev } from './app.js';

function animationCard() {
    
}

export default class AnimationBtnByHover{
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
        else if (this.btn == switchNext) {
            $(this.btn).css({
                background: '#FF868E',
            })
            $('#btn_next span').css({
                color: '#fff',
            })
            $('#btn_next img').attr('src', '/img/icons_white/switcher-white.png');
        }
        else if (this.btn == switchPrev) {
            $(this.btn).css({
                background: '#FF868E',
            })
            $('#btn_prev span').css({
                color: '#fff',
            })
            $('#btn_prev img').attr('src', '/img/icons_white/switcher-white.png');
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
        else if (this.btn == switchNext) {
            $(this.btn).css({
                background: '#FBE0DC',
            })
            $('#btn_next span').css({
                color: '#FF868E',
            })
            $('#btn_next img').attr('src', '/img/icons/switcher.png');
        }
        else if (this.btn == switchPrev) {
            $(this.btn).css({
                background: '#FBE0DC',
            })
            $('#btn_prev span').css({
                color: '#FF868E',
            })
            $('#btn_prev img').attr('src', '/img/icons/switcher.png');
        }
    }
}