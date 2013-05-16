Ext.define("SlideNavigationExample.controller.ListingCarousel", {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            carouselContainer: 'listingcarousel',
            listingCarousel: 'listingcarousel > list'
        },
        control: {
            listingCarousel: {
                itemtap: 'openArticle'
            },
            carouselContainer: {
                activeitemchange: 'changeDefaults'
            }
        }
    },

    openArticle: function (view, index, item, e) {
        console.log('list item tapped!');

        _ArticleArray.splice(_ArticleArray.length - 1, 1);

        // TODO (Radi) Need to find better way to get reference of the root view
        _ArticleArray.push(view.parent.parent.parent);

        var stores = view.getStore().data.items;
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
        console.log(_ArticleArray[0]);
        view.parent.parent.parent.animateActiveItem(articles, {type: 'cover', direction: 'left'});
    },

    changeDefaults: function (container, newCard, oldCard, index) {
        var cardIndex = container.getActiveIndex();
        // TODO (Radi) Need better approach
        switch(cardIndex) {
            case 0:
                container.parent.items.get(0).setTitle('TechCrunch');
                break;
            case 1:
                container.parent.items.get(0).setTitle('Lifehacker');
                break;
            case 2:
                container.parent.items.get(0).setTitle('The Verge');
                break;
        }
        console.log(cardIndex);
    }
});

