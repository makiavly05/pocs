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
                cls: 'slidtoolbar',
                items: [{
                    text: 'back',
                    ui: 'back'
                }]
            }
        ]
    },

    // override the default onDragStart class
    onDragStart: function(e) {
        var direction = this.getDirection(),
            absDeltaX = e.absDeltaX,
            absDeltaY = e.absDeltaY,
            directionLock = this.getDirectionLock(),
            sideSlideOffset = window.innerWidth * 0.1,
            slideNavComponent = Ext.getCmp('side-slide-nav');

        if (e.target.className.indexOf('toolbar') > -1) {
            return
        }

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
    }
});



