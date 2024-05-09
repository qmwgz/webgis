# -*- coding: utf-8 -*-
{
    'name': "地理信息系统",

    'summary': """
        地理信息系统
    """,

    'description': """
        地理信息系统
    """,

    'author': "Odoo",
    'website': "https://www.odoo.com/",
    'category': 'Tutorials/AwesomeDashboard',
    'version': '0.1',
    'application': True,
    'installable': True,
    'depends': ['base', 'web', 'mail'],

    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'webgis/static/src/js/*.js',
            'webgis/static/src/xml/*.xml',
            'webgis/static/src/css/*.scss',
        ],
    },
    'license': 'AGPL-3'
}
