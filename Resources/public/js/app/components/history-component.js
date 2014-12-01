/*global define*/
define(function (require) {
    'use strict';

    var HistoryComponent,
        BaseComponent = require('oroui/js/app/components/base/component');

    /**
     * The Controller for the History component, responsible for:
     *  - creating needed views, collections, models or even sub-components
     *  - handling environment events
     *  - disposing obsolete instances
     */
    HistoryComponent = BaseComponent.extend({
        initialize: function (options) {
            console.log('HistoryComponent is initialized', options);
        }
    });

    return HistoryComponent;
});
