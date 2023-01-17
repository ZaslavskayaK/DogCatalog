Ext.define('DogCatalog.view.SearchDogView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchDogView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введите название породы',
            maxLength: 200
        }
    ]
});