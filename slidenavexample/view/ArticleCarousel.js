Ext.define('SlideNavigationExample.view.ArticleCarousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'articlecarousel',
    defaults: {
        styleHtmlContent: true
    },
    requires: [
        'Ext.ux.slidenavigation.View'
    ],

    config: {
        fullscreen: true,
        tpl: '{content}',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        styleHtmlContent: true,
        indicator: false,
        activeItem: 1,
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



