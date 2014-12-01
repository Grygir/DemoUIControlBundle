/*global define*/
define(function (require) {
    'use strict';

    var HistoryModel,
        BaseModel = require('oroui/js/app/models/base/model'),
        datetimeFormatter = require('orolocale/js/formatter/datetime');

    HistoryModel = BaseModel.extend({
        defaults: {
            url: '',
            title: '',
            visits: 1,
            visited: null,
            formatted: null
        },

        initialize: function () {
            this.on('add change:visited', this.formatVisited);
        },

        formatVisited: function () {
            var formatted = datetimeFormatter.formatDateTime(this.get('visited'));
            this.set('formatted', formatted, {silent: true});
        }
    });

    return HistoryModel;
});
