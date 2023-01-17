Ext.define('DogCatalog.view.DogCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.dogCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'dogGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог собак</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchDogView',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});