Ext.define('SlideNavigationExample.view.ListingCarousel', {
    extend: 'Ext.carousel.Carousel',

    xtype: 'listingcarousel',
    defaults: {
        styleHtmlContent: true
    },

    config: {
        fullscreen: true,
        tpl: '{content}',
        indicator: false,
        items: [
            {
                xtype: 'list',
                cls: 'disclosurelist',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                itemTpl: '<tpl for="."><div class="feed-title">{title}</div>' +
                    '<div class="pub-date">{publishedDate}</div></tpl>',
                itemSelector: 'div.feed',
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!',
                        refreshFn: function(plugin) {
                            var store = plugin.parent.parent.getStore();
                            if (store.hasListener('load')) {
                                store.fireEvent('load', store, store.getData(), true);
                            }
                        }
                    }
                ],
                store: 'TcFeeds'

                // Mask this item when the container is opened
                //maskOnOpen: true
            },{
                xtype: 'list',
                cls: 'disclosurelist',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                itemTpl: '<tpl for="."><div class="feed-title">{title}</div>' +
                    '<div class="pub-date">{publishedDate}</div></tpl>',
                itemSelector: 'div.feed',
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!',
                        refreshFn: function(plugin) {
                            var store = plugin.parent.parent.getStore();
                            if (store.hasListener('load')) {
                                store.fireEvent('load', store, store.getData(), true);
                            }
                        }
                    }
                ],
                store: 'LhFeeds',

                // Mask this item when the container is opened
                maskOnOpen: true
            },{
                xtype: 'list',
                cls: 'disclosurelist',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                itemTpl: '<tpl for="."><div class="feed-title">{title}</div>' +
                    '<div class="pub-date">{publishedDate}</div></tpl>',
                itemSelector: 'div.feed',
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!',
                        refreshFn: function(plugin) {
                            var store = plugin.parent.parent.getStore();
                            if (store.hasListener('load')) {
                                store.fireEvent('load', store, store.getData(), true);
                            }
                        }
                    }
                ],
                store: 'VergeFeeds',

                // Mask this item when the container is opened
                maskOnOpen: true
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

