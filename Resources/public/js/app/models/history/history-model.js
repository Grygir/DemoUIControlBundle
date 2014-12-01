/*global define*/
define(function (require) {
    'use strict';

    var HistoryModel,
        BaseModel = require('oroui/js/app/models/base/model');

    HistoryModel = BaseModel.extend({
        defaults: {
            url: '',
            title: '',
            visits: 1,
            visited: null
        }
    });

    return HistoryModel;
});
