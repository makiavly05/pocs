Ext.define('SlideNavigationExample.view.ListingCarousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'listingcarousel',
    defaults: {
        styleHtmlContent: true
    },

    config: {
        fullscreen: true,
        tpl: '{content}',
        indicator: true,

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
                        _ArticleArray.push(view.parent.parent.parent.parent);
                        var rec = view.getStore().getAt(index);
                        console.log(rec);
                        var articleView = Ext.create('SlideNavigationExample.view.Article');
                        articleView.setData(rec.data);
                        Ext.Viewport.animateActiveItem(articleView, {type: 'cover', direction: 'left'});
                    }
                },
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!'
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
                        _ArticleArray.push(view.parent.parent.parent.parent);
                        var rec = view.getStore().getAt(index);
                        console.log(rec);
                        var articleView = Ext.create('SlideNavigationExample.view.Article');
                        articleView.setData(rec.data);
                        Ext.Viewport.animateActiveItem(articleView, {type: 'cover', direction: 'left'});
                    }
                },
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!'
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
                        _ArticleArray.push(view.parent.parent.parent.parent);
                        var rec = view.getStore().getAt(index);
                        console.log(rec);
                        var articleView = Ext.create('SlideNavigationExample.view.Article');
                        articleView.setData(rec.data);
                        Ext.Viewport.animateActiveItem(articleView, {type: 'cover', direction: 'left'});
                    }
                },
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!'
                    }
                ],
                store: 'VergeFeeds',

                // Mask this item when the container is opened
                maskOnOpen: true
            }
        ]
    }
});

