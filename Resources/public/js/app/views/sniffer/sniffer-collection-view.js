/*global define*/
define(function (require) {
    'use strict';

    var SnifferCollectionView,
        BaseCollectionView = require('oroui/js/app/views/base/collection-view'),
        SnifferItemView = require('./sniffer-item-view'),
        template = require('text!../../../../templates/sniffer/sniffer-collection-template.html');

    SnifferCollectionView = BaseCollectionView.extend({
        autoRender: true,
        className: 'sniffer-block',
        tagName: 'div',

        itemView: SnifferItemView,
        containerMethod: 'prepend',
        template: template,
        listSelector: 'ul',
        itemSelector: 'li',
        fallbackSelector: '.empty',

        events: {
            'click .clear': 'clearCollection'
        },

        clearCollection: function (e) {
            e.stopPropagation();
            this.collection.reset([]);
        }
    });

    return SnifferCollectionView;
});
