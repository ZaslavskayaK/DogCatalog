Ext.define('DogCatalog.store.DogCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'DogCatalog.model.DogCatalogModel'
    ],
    model: 'DogCatalog.model.DogCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'dog',
            read: 'dog',
            destroy: 'dog',
            update: 'dog'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});