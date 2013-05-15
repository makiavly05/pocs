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
        listeners: {
            activeitemchange: function(container, newCard, oldCard, index){
                var cardIndex = this.getActiveIndex();
                // TODO (Radi) Need better approach
                switch(cardIndex) {
                    case 0:
                        this.parent.items.get(0).setTitle('TechCrunch');
                        break;
                    case 1:
                        this.parent.items.get(0).setTitle('Lifehacker');
                        break;
                    case 2:
                        this.parent.items.get(0).setTitle('The Verge');
                        break;
                }
                console.log(cardIndex);
            }
        },
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
                listeners: {
                    itemtap: function(view, index, item, e) {
                        _ArticleArray.splice(_ArticleArray.length - 1, 1);

                        // TODO (Radi) Need to find better way to get reference of the root view
                        _ArticleArray.push(view.parent.parent.parent.parent);

                        var rec = view.getStore().getAt(index);
                        var stores = view.getStore().data.items;
                        console.log(rec);
                        var articles = Ext.create('SlideNavigationExample.view.ArticleCarousel');

                        for (var i = 0, lenL = stores.length; i < lenL; i++) {
                            var myPanel = Ext.create('Ext.Panel', {
                                html: stores[i].getData().content,
                                styleHtmlContent: true,
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                                fullscreen: true
                            });
                            myPanel.setData(stores[i].data);
                            articles.add([myPanel]);
                        }
                        articles.setActiveItem(index);

                        Ext.Viewport.animateActiveItem(articles, {type: 'cover', direction: 'left'});
                    }
                },
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
                store: 'TcFeeds',

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
                listeners: {
                    itemtap: function(view, index, item, e) {
                        _ArticleArray.splice(_ArticleArray.length - 1, 1);

                        // TODO (Radi) Need to find better way to get reference of the root view
                        _ArticleArray.push(view.parent.parent.parent.parent);

                        var rec = view.getStore().getAt(index);
                        var stores = view.getStore().data.items;
                        console.log(rec);
                        var articles = Ext.create('SlideNavigationExample.view.ArticleCarousel');

                        for (var i = 0, lenL = stores.length; i < lenL; i++) {
                            var myPanel = Ext.create('Ext.Panel', {
                                html: stores[i].getData().content,
                                styleHtmlContent: true,
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                                fullscreen: true
                            });
                            myPanel.setData(stores[i].data);
                            articles.add([myPanel]);
                        }
                        articles.setActiveItem(index);

                        Ext.Viewport.animateActiveItem(articles, {type: 'cover', direction: 'left'});
                    }
                    /*itemtap: function(view, index, item, e) {
                        _ArticleArray.splice(_ArticleArray.length - 1, 1);
                        _ArticleArray.push(view.parent.parent.parent.parent);
                        var rec = view.getStore().getAt(index);
                        console.log(rec);
                        var articles = Ext.create('SlideNavigationExample.view.ArticleCarousel');
                        articles.setData(rec.data);
                        Ext.Viewport.animateActiveItem(articles, {type: 'cover', direction: 'left'});
                    }*/
                },
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
                listeners: {
                    itemtap: function(view, index, item, e) {
                        _ArticleArray.splice(_ArticleArray.length - 1, 1);

                        // TODO (Radi) Need to find better way to get reference of the root view
                        _ArticleArray.push(view.parent.parent.parent.parent);

                        var rec = view.getStore().getAt(index);
                        var stores = view.getStore().data.items;
                        console.log(rec);
                        var articles = Ext.create('SlideNavigationExample.view.ArticleCarousel');

                        for (var i = 0, lenL = stores.length; i < lenL; i++) {
                            var myPanel = Ext.create('Ext.Panel', {
                                html: stores[i].getData().content,
                                styleHtmlContent: true,
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                                fullscreen: true
                            });
                            myPanel.setData(stores[i].data);
                            articles.add([myPanel]);
                        }
                        articles.setActiveItem(index);

                        Ext.Viewport.animateActiveItem(articles, {type: 'cover', direction: 'left'});
                    }
                },
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
    }
});

