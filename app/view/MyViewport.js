/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    border: '',
    margin: 50,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    html: '<img src="/inicioImg/logo.png" alt="logo" >',
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'form',
                            border: false,
                            height: 103,
                            style: 'float:right;',
                            width: 205,
                            layout: {
                                type: 'auto'
                            },
                            bodyBorder: false,
                            bodyPadding: 10,
                            header: false,
                            title: '',
                            items: [
                                {
                                    xtype: 'fieldset',
                                    border: 0,
                                    width: 275,
                                    title: '',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '',
                                            emptyText: 'Contraseña'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '',
                                            emptyText: 'Usuario'
                                        },
                                        {
                                            xtype: 'button',
                                            margin: 5,
                                            text: 'Iniciar Sesión'
                                        },
                                        {
                                            xtype: 'button',
                                            margin: 5,
                                            text: 'Registrarse'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: 0,
                    minWidth: 800,
                    layout: {
                        align: 'stretchmax',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            width: 300,
                            layout: {
                                type: 'accordion'
                            },
                            title: 'Menu de AEVEV',
                            items: [
                                {
                                    xtype: 'treepanel',
                                    title: 'Marcas',
                                    store: 'MyTreeStore',
                                    rootVisible: false,
                                    columns: [
                                        {
                                            xtype: 'treecolumn',
                                            dataIndex: 'name',
                                            text: 'Name',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    html: '<p> Hola mundo </p>',
                                    title: 'LOL'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margins: '0',
                            style: 'margin-left:20px;',
                            layout: {
                                type: 'anchor'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'accordion'
                                    },
                                    items: [
                                        {
                                            xtype: 'gridpanel',
                                            height: 200,
                                            style: 'margin-bottom:10px;',
                                            title: 'Listado de Espera',
                                            columnLines: true,
                                            store: 'MyStore',
                                            columns: [
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'name',
                                                    text: 'Name'
                                                },
                                                {
                                                    xtype: 'gridcolumn',
                                                    dataIndex: 'company',
                                                    text: 'Company'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    title: 'Inicio'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});