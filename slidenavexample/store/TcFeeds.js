Ext.define('SlideNavigationExample.store.TcFeeds', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        type: 'tree',

        fields: ['title', 'link', 'author', 'contentSnippet', 'content', 'publishedDate', 'mediaGroups.contents.url',  {
            name: 'leaf',
            defaultValue: true
        }],

        root: {
            leaf: false
        },

        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/TechCrunch/&num=25',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});
