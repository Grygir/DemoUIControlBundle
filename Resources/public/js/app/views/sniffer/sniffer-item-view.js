/*global define*/
define(function (require) {
    'use strict';

    var SnifferItemView,
        BaseView = require('oroui/js/app/views/base/view'),
        template = require('text!../../../../templates/sniffer/sniffer-item-template.html');

    SnifferItemView = BaseView.extend({
        tagName: 'li',
        template: template
    });

    return SnifferItemView;
});
