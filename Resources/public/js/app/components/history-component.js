/*global define*/
define(function (require) {
    'use strict';

    var HistoryComponent,
        BaseComponent = require('oroui/js/app/components/base/component'),
        HistoryCollection = require('../models/history/history-collection'),
        HistoryCollectionView = require('../views/history/history-collection-view');

    /**
     * The Controller for the History component, responsible for:
     *  - creating needed views, collections, models or even sub-components
     *  - handling environment events
     *  - disposing obsolete instances
     */
    HistoryComponent = BaseComponent.extend({
        initialize: function (options) {
            this.collection = new HistoryCollection();
            this.view = new HistoryCollectionView({
                containerMethod: 'append',
                container: options._sourceElement,
                collection: this.collection
            });
        }
    });

    return HistoryComponent;
});
