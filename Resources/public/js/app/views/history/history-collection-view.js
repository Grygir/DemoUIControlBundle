/*global define*/
define(function (require) {
    'use strict';

    var HistoryCollectionView,
        BaseCollectionView = require('oroui/js/app/views/base/collection-view'),
        HistoryItemView = require('./history-item-view'),
        template = require('text!../../../../templates/history/history-collection-template.html');

    HistoryCollectionView = BaseCollectionView.extend({
        autoRender: true,
        itemView: HistoryItemView,

        template: template,
        tagName: 'div',
        className: 'history-block',
        containerMethod: 'prepend',

        listSelector: 'ul',
        itemSelector: 'li.history-item',
        fallbackSelector: '.empty-message',

        events: {
            'click .clear': 'clearCollection'
        },

        clearCollection: function (e) {
            e.stopPropagation();
            this.collection.reset([]);
        }
    });

    return HistoryCollectionView;
});
