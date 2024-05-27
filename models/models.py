from odoo import fields,models,api

# 数据
class Style(models.Model):
    _name='webgis.style'
    _description='样式'

    name=fields.Char(string='样式名称')
    icon_url = fields.Image(string='图标地址')
    opacity = fields.Float(string='透明度', default=1.0)
    scale = fields.Float(string='大小', default=1.0)
    text_fill_color = fields.Char(string='文本填充颜色', default='#000000')
    text_stroke_color = fields.Char(string='文本边缘颜色', default='#FFFFFF')
    line_color = fields.Char(string='线条颜色', default='#000000')
    line_stroke_color = fields.Char(string='线条边缘颜色', default='#000000')
    line_width = fields.Float(string='线条宽度', default=3)
    font = fields.Char(string='字体', default='normal 14px 微软雅黑')
    text_align = fields.Char(string='文本位置', default='center')
    text_baseline = fields.Char(string='文本基准线', default='top')
    offset_y = fields.Integer(string='上下偏移', default=-20)