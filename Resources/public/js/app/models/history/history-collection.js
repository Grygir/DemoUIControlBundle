/*global define*/
define(function (require) {
    'use strict';

    var HistoryCollection,
        BaseCollection = require('oroui/js/app/models/base/collection'),
        HistoryModel = require('./history-model');

    HistoryCollection = BaseCollection.extend({
        model: HistoryModel,

        initialize: function () {
            // sort collection ones visit time is changed
            this.on('change:visited', this.sort);
            HistoryCollection.__super__.initialize.apply(this, arguments);
        },

        comparator: function (model1, model2) {
            // last visit is higher
            var diff = model2.get('visited') - model1.get('visited');
            return (diff === 0 || isNaN(diff)) ? diff : diff > 0 ? 1 : -1;
        }
    });

    return HistoryCollection;
});
