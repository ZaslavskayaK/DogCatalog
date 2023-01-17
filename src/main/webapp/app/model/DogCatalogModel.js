Ext.define('DogCatalog.model.DogCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'price'],
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
            rootProperty: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});