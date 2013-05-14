Ext.define('SlideNavigationExample.view.ArticleCarousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'articlecarousel',
    defaults: {
        styleHtmlContent: true
    },

    config: {
        fullscreen: true,
        tpl: '{content}',
        scrollable: true,
        styleHtmlContent: true,
        indicator: false,
        activeItem: 0,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'back',
                    ui: 'back',
                    handler: function() {
                        Ext.Viewport.animateActiveItem(_ArticleArray[_ArticleArray.length - 1], {type:'slide', direction:'right'});
                        console.log('back btn pressed');
                    }
                }]
            }
        ]
    }
});

/*Ext.define('SlideNavigationExample.view.Article', {
    extend: 'Ext.Container',
    alias: 'widget.disclosurelist',

    config: {
        fullscreen: true,
        tpl: '{content}',
        scrollable: true,
        styleHtmlContent: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'back',
                    ui: 'back',
                    handler: function() {
                        Ext.Viewport.animateActiveItem(_ArticleArray[_ArticleArray.length - 1], {type:'slide', direction:'right'});
                        console.log('back btn pressed');
                    }
                }]
            }
        ]
    }
});*/



