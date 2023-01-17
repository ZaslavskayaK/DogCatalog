Ext.define('DogCatalog.controller.DogCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'dogGridView',
            ref: 'dogGridView button[action="add"]',
            ref: 'dogGridAdd'},
        {selector: 'dogGridView button[action="delete"]',
            ref: 'dogGridDelete'},
        {selector: 'searchDogView button[action="search"]',
            ref: 'searchDog'},
        {selector: 'addDogFormView',
            ref: 'addDogFormView'},
        {selector: 'dogCatalogView',
            ref: 'dogCatalogView'},
        {selector: 'addDogFormView textfield[name=name] ',
            ref: 'addDogFormName'},
        {selector: 'addDogFormView textfield[name=price]',
            ref: 'addDogFormPrice'},
        {selector: 'addDogFormView button[action=save]',
            ref: 'addDogFormSave'}
    ],

    init: function () {
        this.control({
            'dogGridView  button[action=add]': {
                click: this.onAddDog
            },
            'dogGridView  button[action=delete]': {
                click: this.onDelDog
            },
            'searchDogView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'dogGridView': {
                cellclick: this.onLineGrid
            },
            'addDogFormView  button[action=save]': {
                click: this.onSaveDog
            },
            'addDogFormView  textfield[name=name]': {
                change: this.onValidation
            },
            'addDogFormView  textfield[name=price]': {
                change: this.onValidation
            }
        });
    },

    onSaveDog: function (button) {
        var me = this;
        var dogModel = Ext.create('DogCatalog.model.DogCatalogModel');
        dogModel.set(this.getAddDogFormView().down('form').getValues());
        dogModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('DogCatalogStore').add(objAjax);
                me.getAddDogFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такая порода и цена уже существуют',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddDog: function () {
        Ext.widget('addDogFormView');
    },

    onDelDog: function () {
        var sm = this.getDogGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getDogGridView().store.remove(rs[0]);
        this.getDogGridView().store.commitChanges();
        this.getDogGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('DogCatalogStore').load({
            params: {
                search: this.getDogCatalogView().down('searchDogView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getDogGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddDogFormName().validate() && this.getAddDogFormPrice().validate()) {
            this.getAddDogFormSave().enable();
        } else {
            this.getAddDogFormSave().disable();
        }
    }

});