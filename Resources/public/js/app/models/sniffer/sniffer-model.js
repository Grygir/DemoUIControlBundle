/*global define*/
define(function (require) {
    'use strict';

    var SnifferModel,
        BaseModel = require('oroui/js/app/models/base/model');

    SnifferModel = BaseModel.extend({
        defaults: {
            url: '',
            title: '',
            visits: 1,
            visited: null
        }
    });

    return SnifferModel;
});
