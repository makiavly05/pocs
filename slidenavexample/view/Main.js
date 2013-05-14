Ext.define("SlideNavigationExample.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',

    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom',
        'Ext.field.Search',
        'Ext.data.Store',
        'Ext.data.proxy.JsonP',
        'Ext.dataview.List',
        'Ext.dataview.NestedList',
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
        'Ext.carousel.Carousel'
    ],

    config: {
        fullscreen: true,

        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: -1,

        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },

        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                }

                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                 items: [{
                 docked: 'top',
                 xtype: 'searchfield',
                 placeHolder: 'search',
                 width: 180
                 }]
                 */
            },
            {
                docked: 'bottom',
                xtype: 'searchfield',
                placeHolder: 'search',
                width: 180

            }]
        },

        /**
         *  Change this to 'right' to dock the navigation list to the right.
         */
        listPosition: 'left',

        /**
         *  Example of how to re-order the groups.
         */
        /*groups: {
            'Group 1': 1,
            'Group 2': 3,
            'Group 3': 2
        },*/

        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },

        items: [{
            title: '<img width="25" height="25" src="http://katieelaineboyer.com/wp-content/uploads/2012/12/techcrunch-logo.jpeg" /> &nbsp;TechCrunch',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'TechCrunch\'s Feed',
                docked: 'top'
            },{
                xtype: 'list',
                itemTpl: '<tpl for="."><div class="feed">{title}</div></tpl>',
                itemSelector: 'div.feed',
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!'
                    }
                ],
                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },
                store: 'TcFeeds',
                //html: '<div>Pull down to get the latest news feeds.</div></br>',

                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },{
            title: '<img width="25" height="25" src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/276863_102231899828935_1826737858_q.jpg" /> &nbsp;Lifehacker',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Lifehacker\'s Feed',
                docked: 'top'
            },{
                xtype: 'list',
                itemTpl: '<tpl for="."><div class="feed">{title}</div></tpl>',
                itemSelector: 'div.feed',
                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullRefreshText: 'Pull down for more news feeds!'
                    }
                ],
                store: 'LhFeeds',
                //html: '<span>TC Feed</span>',

                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },{
            title: '<img width="25" height="25" src="http://cdn1.sbnation.com/images/verge/triangle-netbar.vb941ed5.png" /> &nbsp;The Verge',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'The Verge',
                docked: 'top'
            },{
                xtype: 'carousel',
                fullscreen: true,
                indicator: false,
                defaults: {
                    styleHtmlContent: true
                },

                items: [
                    {
                        html : '<div style="float:left;padding-right:10px"> <div><a title="Click here to read Discover the Text-Based Adventure Game Built Into Your Mac&#39;s Terminal" href="http://lifehacker.com/5994581/discover-the-text+based-adventure-game-built-into-your-macs-terminal"> <img style="border-color:#b3b3b3;border-width:0 1px 1px;border-style:none solid solid" height="300" width="360" title="Click here to read Discover the Text-Based Adventure Game Built Into Your Mac&#39;s Terminal" alt="Click here to read Discover the Text-Based Adventure Game Built Into Your Mac&#39;s Terminal" src="http://img.gawkerassets.com/img/18kgughqqyo3epng/xlarge.png"> </a></div> </div> Everyone seems to love "retro" 8-bit video games, but it doesn\'t get much more retro than a text-based adventure. If you\'ve never tried one before, or you\'re just bored and have a Mac nearby, open up Terminal and give its built in MUD (multi-user dungeon) a spin. <a href="http://lifehacker.com/5994581/discover-the-text+based-adventure-game-built-into-your-macs-terminal" title="Click here to read more about Discover the Text-Based Adventure Game Built Into Your Mac&#39;s Terminal">More »</a> <br style="clear:both"><img width="1" height="1" src="http://lifehacker.feedsportal.com/c/34977/f/647165/s/2ab5bff8/mf.gif" border="0"><div><table border="0"><tr><td valign="middle"><a href="http://share.feedsportal.com/share/twitter/?u=http%3A%2F%2Flifehacker.com%2F5994581%2Fdiscover-the-text%2Bbased-adventure-game-built-into-your-macs-terminal&amp;t=Discover+the+Text-Based+Adventure+Game+Built+Into+Your+Mac%27s+Terminal"><img src="http://res3.feedsportal.com/social/twitter.png" border="0"></a> <a href="http://share.feedsportal.com/share/facebook/?u=http%3A%2F%2Flifehacker.com%2F5994581%2Fdiscover-the-text%2Bbased-adventure-game-built-into-your-macs-terminal&amp;t=Discover+the+Text-Based+Adventure+Game+Built+Into+Your+Mac%27s+Terminal"><img src="http://res3.feedsportal.com/social/facebook.png" border="0"></a> <a href="http://share.feedsportal.com/share/linkedin/?u=http%3A%2F%2Flifehacker.com%2F5994581%2Fdiscover-the-text%2Bbased-adventure-game-built-into-your-macs-terminal&amp;t=Discover+the+Text-Based+Adventure+Game+Built+Into+Your+Mac%27s+Terminal"><img src="http://res3.feedsportal.com/social/linkedin.png" border="0"></a> <a href="http://share.feedsportal.com/share/gplus/?u=http%3A%2F%2Flifehacker.com%2F5994581%2Fdiscover-the-text%2Bbased-adventure-game-built-into-your-macs-terminal&amp;t=Discover+the+Text-Based+Adventure+Game+Built+Into+Your+Mac%27s+Terminal"><img src="http://res3.feedsportal.com/social/googleplus.png" border="0"></a> <a href="http://share.feedsportal.com/share/email/?u=http%3A%2F%2Flifehacker.com%2F5994581%2Fdiscover-the-text%2Bbased-adventure-game-built-into-your-macs-terminal&amp;t=Discover+the+Text-Based+Adventure+Game+Built+Into+Your+Mac%27s+Terminal"><img src="http://res3.feedsportal.com/social/email.png" border="0"></a></td></tr></table></div><br><br><a href="http://da.feedsportal.com/r/163287447279/u/49/f/647165/c/34977/s/2ab5bff8/a2.htm"><img src="http://da.feedsportal.com/r/163287447279/u/49/f/647165/c/34977/s/2ab5bff8/a2.img" border="0"></a><img width="1" height="1" src="http://pi.feedsportal.com/r/163287447279/u/49/f/647165/c/34977/s/2ab5bff8/a2t.img" border="0"><img src="http://feeds.feedburner.com/~r/lifehacker/full/~4/SobRdBHJZbk" height="1" width="1">',
                        style: 'background-color: #F7F7F7'
                    },
                    {
                        xtype: 'list',
                        id: 'disclosurelist',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true
                        },
                        itemTpl: '<tpl for="."><div class="feed">{title}</div></tpl>',
                        itemSelector: 'div.feed',
                        listeners: {
                            itemtap: function(view, index, item, e) {
                                var rec = view.getStore().getAt(index);
                                console.log(rec);
                                var articleView = Ext.create('SlideNavigationExample.view.Article');
                                articleView.setData(rec.data);
                                Ext.Viewport.animateActiveItem(articleView, {type: 'slide', direction: 'left'});
                            }
                        },
                        plugins: [
                            {
                                xclass: 'Ext.plugin.PullRefresh',
                                pullRefreshText: 'Pull down for more news feeds!'
                            }
                        ],
                        store: 'TcFeeds',
                        //html: '<div>Pull down to get the latest news feeds.</div></br>',

                        // Mask this item when the container is opened
                        maskOnOpen: true
                    },
                    {
                        html : '<div style="float:left;padding-right:10px"> <div><a title="Click here to read Neutralize Smelly Kitchen Hands with Lemon Juice" href="http://lifehacker.com/5994578/neutralize-smelly-kitchen-hands-with-lemon-juice"> <img style="border-color:#b3b3b3;border-width:0 1px 1px;border-style:none solid solid" height="300" width="360" title="Click here to read Neutralize Smelly Kitchen Hands with Lemon Juice" alt="Click here to read Neutralize Smelly Kitchen Hands with Lemon Juice" src="http://img.gawkerassets.com/img/18kgn9ov1plw6jpg/xlarge.jpg"> </a></div> </div> If you can\'t seem to get some stubborn smells off your hands after cooking, a little lemon juice can fix what soap and water can\'t. <a href="http://lifehacker.com/5994578/neutralize-smelly-kitchen-hands-with-lemon-juice" title="Click here to read more about Neutralize Smelly Kitchen Hands with Lemon Juice">More »</a> <br style="clear:both"><img width="1" height="1" src="http://lifehacker.feedsportal.com/c/34977/f/647165/s/2ab57f46/mf.gif" border="0"><div><table border="0"><tr><td valign="middle"><a href="http://share.feedsportal.com/share/twitter/?u=http%3A%2F%2Flifehacker.com%2F5994578%2Fneutralize-smelly-kitchen-hands-with-lemon-juice&amp;t=Neutralize+Smelly+Kitchen+Hands+with+Lemon+Juice"><img src="http://res3.feedsportal.com/social/twitter.png" border="0"></a> <a href="http://share.feedsportal.com/share/facebook/?u=http%3A%2F%2Flifehacker.com%2F5994578%2Fneutralize-smelly-kitchen-hands-with-lemon-juice&amp;t=Neutralize+Smelly+Kitchen+Hands+with+Lemon+Juice"><img src="http://res3.feedsportal.com/social/facebook.png" border="0"></a> <a href="http://share.feedsportal.com/share/linkedin/?u=http%3A%2F%2Flifehacker.com%2F5994578%2Fneutralize-smelly-kitchen-hands-with-lemon-juice&amp;t=Neutralize+Smelly+Kitchen+Hands+with+Lemon+Juice"><img src="http://res3.feedsportal.com/social/linkedin.png" border="0"></a> <a href="http://share.feedsportal.com/share/gplus/?u=http%3A%2F%2Flifehacker.com%2F5994578%2Fneutralize-smelly-kitchen-hands-with-lemon-juice&amp;t=Neutralize+Smelly+Kitchen+Hands+with+Lemon+Juice"><img src="http://res3.feedsportal.com/social/googleplus.png" border="0"></a> <a href="http://share.feedsportal.com/share/email/?u=http%3A%2F%2Flifehacker.com%2F5994578%2Fneutralize-smelly-kitchen-hands-with-lemon-juice&amp;t=Neutralize+Smelly+Kitchen+Hands+with+Lemon+Juice"><img src="http://res3.feedsportal.com/social/email.png" border="0"></a></td></tr></table></div><br><br><a href="http://da.feedsportal.com/r/163067726251/u/49/f/647165/c/34977/s/2ab57f46/a2.htm"><img src="http://da.feedsportal.com/r/163067726251/u/49/f/647165/c/34977/s/2ab57f46/a2.img" border="0"></a><img width="1" height="1" src="http://pi.feedsportal.com/r/163067726251/u/49/f/647165/c/34977/s/2ab57f46/a2t.img" border="0"><img src="http://feeds.feedburner.com/~r/lifehacker/full/~4/4HG22Al_Tvw" height="1" width="1">',
                        style: 'background-color: #5E99CC'
                    },
                    {
                        html : '<div style="float:left;padding-right:10px"> <div><a title="Click here to read Fold Egg Whites Into Batter Like a Pro" href="http://lifehacker.com/5994579/fold-egg-whites-into-batter-like-a-pro"> <img style="border-color:#b3b3b3;border-width:0 1px 1px;border-style:none solid solid" height="300" width="360" title="Click here to read Fold Egg Whites Into Batter Like a Pro" alt="Click here to read Fold Egg Whites Into Batter Like a Pro" src="http://img.gawkerassets.com/img/18kgoz2pmezk0jpg/xlarge.jpg"> </a></div> </div> Many recipes for fluffy treats like soufflé, mousse, and angel food cake ask you to fold egg whites or whipped cream into a batter, but don\'t begin to tell you how. If your batter folding skills aren\'t up to snuff, Emma Christensen at The Kitchn put together a great tutorial. <a href="http://lifehacker.com/5994579/fold-egg-whites-into-batter-like-a-pro" title="Click here to read more about Fold Egg Whites Into Batter Like a Pro">More »</a> <br style="clear:both"><img width="1" height="1" src="http://lifehacker.feedsportal.com/c/34977/f/647165/s/2ab6307a/mf.gif" border="0"><div><table border="0"><tr><td valign="middle"><a href="http://share.feedsportal.com/share/twitter/?u=http%3A%2F%2Flifehacker.com%2F5994579%2Ffold-egg-whites-into-batter-like-a-pro&amp;t=Fold+Egg+Whites+Into+Batter+Like+a+Pro"><img src="http://res3.feedsportal.com/social/twitter.png" border="0"></a> <a href="http://share.feedsportal.com/share/facebook/?u=http%3A%2F%2Flifehacker.com%2F5994579%2Ffold-egg-whites-into-batter-like-a-pro&amp;t=Fold+Egg+Whites+Into+Batter+Like+a+Pro"><img src="http://res3.feedsportal.com/social/facebook.png" border="0"></a> <a href="http://share.feedsportal.com/share/linkedin/?u=http%3A%2F%2Flifehacker.com%2F5994579%2Ffold-egg-whites-into-batter-like-a-pro&amp;t=Fold+Egg+Whites+Into+Batter+Like+a+Pro"><img src="http://res3.feedsportal.com/social/linkedin.png" border="0"></a> <a href="http://share.feedsportal.com/share/gplus/?u=http%3A%2F%2Flifehacker.com%2F5994579%2Ffold-egg-whites-into-batter-like-a-pro&amp;t=Fold+Egg+Whites+Into+Batter+Like+a+Pro"><img src="http://res3.feedsportal.com/social/googleplus.png" border="0"></a> <a href="http://share.feedsportal.com/share/email/?u=http%3A%2F%2Flifehacker.com%2F5994579%2Ffold-egg-whites-into-batter-like-a-pro&amp;t=Fold+Egg+Whites+Into+Batter+Like+a+Pro"><img src="http://res3.feedsportal.com/social/email.png" border="0"></a></td></tr></table></div><br><br><a href="http://da.feedsportal.com/r/163067728908/u/49/f/647165/c/34977/s/2ab6307a/a2.htm"><img src="http://da.feedsportal.com/r/163067728908/u/49/f/647165/c/34977/s/2ab6307a/a2.img" border="0"></a><img width="1" height="1" src="http://pi.feedsportal.com/r/163067728908/u/49/f/647165/c/34977/s/2ab6307a/a2t.img" border="0"><img src="http://feeds.feedburner.com/~r/lifehacker/full/~4/d_fATaLUZ1A" height="1" width="1">',
                        style: 'background-color: #759E60'
                    }
                ],

                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        }]
    }
});
