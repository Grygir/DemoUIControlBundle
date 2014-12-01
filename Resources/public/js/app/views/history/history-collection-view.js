/*global define*/
define(function (require) {
    'use strict';

    var HistoryCollectionView,
        BaseCollectionView = require('oroui/js/app/views/base/collection-view'),
        HistoryItemView = require('./history-item-view');

    HistoryCollectionView = BaseCollectionView.extend({
        autoRender: true,
        itemView: HistoryItemView
    });

    return HistoryCollectionView;
});
