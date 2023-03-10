Ext.define('DogCatalog.view.DogGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dogGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'DogCatalogStore', // в прошлый раз данная строка не работала
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Порода',
            flex: 1,
            sortable: true,
            dataIndex: 'name',
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Цена',// поменяла местами строки
            flex: 2,
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,20})*$/,
                regexText: 'Цена должна состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Сохранить',
            cancelBtnText: 'Отменить'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});