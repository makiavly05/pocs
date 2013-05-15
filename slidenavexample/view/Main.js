Ext.define("SlideNavigationExample.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    xtype: 'slidingnav',
    id: 'side-slide-nav',
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
        slideSelector: 'slidtoolbar',

        /**
         *  Container must be dragged 10 pixels horizontally before allowing
         *  the underlying container to actually be dragged.
         *
         *  @since 0.2.2
         */
        containerSlideDelay: 10,

        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 150,

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
            width: 250,
            grouped: false,
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
            },
            {
                docked: 'bottom',
                xtype: 'searchfield',
                placeHolder: 'search',
                width: 250

            }]
        },

        /**
         *  Change this to 'right' to dock the navigation list to the right.
         */
        listPosition: 'left',

        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },

        items: [
        {
            title: '<img width="25" height="25" src="http://katieelaineboyer.com/wp-content/uploads/2012/12/techcrunch-logo.jpeg" /> &nbsp;TechCrunch',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                cls: 'titlebar',
                title: 'TechCrunch',
                docked: 'top'
            },{
                xtype: 'listingcarousel',
                activeItem: 0
            }]
        },{
            title: '<img width="25" height="25" src="http://profile.ak.fbcdn.net/hprofile-ak-snc6/276863_102231899828935_1826737858_q.jpg" /> &nbsp;Lifehacker',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Lifehacker',
                docked: 'top'
            },{
                xtype: 'listingcarousel',
                activeItem: 1
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
                xtype: 'listingcarousel',
                activeItem: 2
            }]
        }]
    }
});
