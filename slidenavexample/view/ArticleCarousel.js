Ext.define('SlideNavigationExample.view.ArticleCarousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'articlecarousel',

    onDragStart: function(e) {
        var direction = this.getDirection(),
            absDeltaX = e.absDeltaX,
            absDeltaY = e.absDeltaY,
            directionLock = this.getDirectionLock(),
            sideSlideOffset = window.innerWidth * 0.1,
            slideNavComponent = Ext.getCmp('side-slide-nav');

        if (slideNavComponent) {
            slideNavComponent.container.dragAllowedForced = false;
            if (slideNavComponent.isOpened()) {
                return;
            }
            if (e.pageX < sideSlideOffset) {
                return;
            } else {
                slideNavComponent.container.dragAllowedForced = true;
            }
        }

        this.isDragging = true;

        if (directionLock) {
            if ((direction === 'horizontal' && absDeltaX > absDeltaY)
                || (direction === 'vertical' && absDeltaY > absDeltaX)) {
                e.stopPropagation();
            }
            else {
                this.isDragging = false;
                return;
            }
        }

        this.getTranslatable().stopAnimation();

        this.dragStartOffset = this.offset;
        this.dragDirection = 0;
    },

    defaults: {
        styleHtmlContent: true
    },
    requires: [
        'Ext.ux.slidenavigation.View'
    ],

    config: {
        fullscreen: true,
        tpl: '{content}',
        layout: 'card',
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
                        _ArticleArray[_ArticleArray.length - 1].animateActiveItem(_ArticleArray[_ArticleArray.length - 1], {type:'slide', direction:'right'});
                        console.log('back btn pressed');
                    }
                }]
            }
        ]
    }
});



