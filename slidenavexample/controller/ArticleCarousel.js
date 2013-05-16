Ext.define("SlideNavigationExample.controller.ArticleCarousel", {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            backBtn: 'button[text="back"]'
        },
        control: {
            backBtn: {
                tap: 'slideBack'
            }
        }
    },

    slideBack: function () {
        console.log('back btn pressed');
        _ArticleArray[_ArticleArray.length - 1].animateActiveItem(Ext.getCmp('side-slide-nav')._cache[0], {type:'slide', direction:'right'});
    }
});
