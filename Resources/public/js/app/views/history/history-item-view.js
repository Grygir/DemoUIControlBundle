/*global define*/
define(function (require) {
    'use strict';

    var HistoryItemView,
        BaseView = require('oroui/js/app/views/base/view'),
        template = require('text!../../../../templates/history/history-item-template.html');

    HistoryItemView = BaseView.extend({
        template: template,
        tagName: 'li',
        className: 'history-item',
        listen: {
            'change:visits model': 'render'
        }
    });

    return HistoryItemView;
});
