Ext.define('DogCatalog.view.AddDogFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addDogFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Название породы',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'price',
                    fieldLabel: 'Цена',
                    regex: /^([0-9]{1,20})*$/,
                    regexText: 'Цена должна состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            disabled: true
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});