/*global define*/
define(function (require) {
    'use strict';

    var HistoryComponent,
        document = window.document,
        mediator = require('oroui/js/mediator'),
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
        listen: {
            'page:beforeChange mediator': 'onPageBeforeChange',
            'page:update mediator': 'onPageUpdate',
            'page:afterChange mediator': 'onPageAfterChange'
        },

        initialize: function (options) {
            this.collection = new HistoryCollection();
            this.view = new HistoryCollectionView({
                containerMethod: 'append',
                container: options._sourceElement,
                collection: this.collection
            });
        },

        onPageBeforeChange: function () {
            this.view.trackingStart();
        },

        onPageUpdate: function (data) {
            var attributes, model, url;

            //Check if model already exists
            url = mediator.execute('currentUrl');
            model = this.collection.findWhere({url: url});

            if (model) {
                // if exists, update visits counter and visit time
                attributes = {
                    visits: model.get('visits') + 1,
                    visited: Date.now()
                };
                model.set(attributes);
            } else {
                // if does not, create a new one
                attributes = {
                    title: String(data.title),
                    url: url,
                    visits: 1,
                    visited: Date.now()
                };
                this.collection.add(attributes);
            }
        },

        onPageAfterChange: function () {
            if (!this.collection.length) {
                /**
                 * This is 'page:afterChange' event and the collection is empty
                 * this means the application just loaded and it's first page
                 */
                this.collection.add({
                    title: document.title,
                    url: mediator.execute('currentUrl'),
                    visited: Date.now(),
                    visits: 1
                })
            }
            this.view.trackingEnd();
        }
    });

    return HistoryComponent;
});
