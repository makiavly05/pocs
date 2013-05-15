Ext.define('SlideNavigationExample.store.LhFeeds', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        type: 'tree',

        fields: ['title', 'link', 'author', 'contentSnippet', 'content', 'publishedDate',  {
            name: 'leaf',
            defaultValue: true
        }],

        root: {
            leaf: false
        },

        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A%2F%2Ffeeds.feedburner.com%2FLifehacker%2F&num=25',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});

