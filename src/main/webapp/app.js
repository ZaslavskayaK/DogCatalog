Ext.application({
    name: 'DogCatalog',

    views: [
        'AddDogFormView',
        'DogCatalogView',
        'DogGridView',
        'SearchDogView'
    ],

    controllers : [
        'DogCatalogController'
    ],

    stores : [
        'DogCatalogStore'
    ],


    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'dogCatalogView',
            }
        });
    }
});