Ext.define('SlideNavigationExample.view.Article', {
    extend: 'Ext.Container',
    alias: 'widget.disclosurelist',

    config: {
        fullscreen: true,
        tpl: '{content}',
        scrollable: true,
        styleHtmlContent: true,
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
