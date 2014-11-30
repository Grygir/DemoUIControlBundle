/*global define*/
define(function (require) {
    'use strict';

    var SnifferCollection,
        BaseCollection = require('oroui/js/app/models/base/collection'),
        SnifferModel = require('./sniffer-model');

    SnifferCollection = BaseCollection.extend({
        model: SnifferModel,

        comparator: 'visits',

        initialize: function () {
            this.on('change:visited', this.sort);
            SnifferCollection.__super__.initialize.apply(this, arguments);
        }
    });

    return SnifferCollection;
});
