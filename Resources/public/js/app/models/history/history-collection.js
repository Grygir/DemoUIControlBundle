/*global define*/
define(function (require) {
    'use strict';

    var HistoryCollection,
        BaseCollection = require('oroui/js/app/models/base/collection'),
        HistoryModel = require('./history-model');

    HistoryCollection = BaseCollection.extend({
        model: HistoryModel
    });

    return HistoryCollection;
});
