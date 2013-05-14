Ext.define('SlideNavigationExample.store.LhFeeds', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        type: 'tree',

        fields: ['title', 'link', 'author', 'contentSnippet', 'content', 'mediaGroups.contents.url',  {
            name: 'leaf',
            defaultValue: true
        }],

        root: {
            leaf: false
        },

        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/Lifehacker/',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});

