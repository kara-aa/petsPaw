import { likesBtn, favsBtn, dislikesBtn, arrBtns, switchNext, switchPrev } from './app.js';

export default class loadNavContentFromTabs{
    constructor(btn) {
        this.btn = btn;
    }
    
    loadContent() {
        if (this.btn == likesBtn) {
            $.ajax({
                type: 'GET',
                url: '/pages/likes.html',
                success: function (html) {
                    $('.right-block__content').html(html);
                }
            })
        }
        else if (this.btn == dislikesBtn) {
            $.ajax({
                type: 'GET',
                url: '/pages/dislikes.html',
                success: function (html) {
                    $('.right-block__content').html(html);
                }
            })
        }
        else if (this.btn == favsBtn) {
            $.ajax({
                type: 'GET',
                url: '/pages/favorites.html',
                success: function (html) {
                    $('.right-block__content').html(html);
                }
            })
        }
    }
}