/*global define*/
define(function (require) {
    'use strict';

    var SnifferComponent,
        _ = require('underscore'),
        mediator = require('oroui/js/mediator'),
        BaseComponent = require('oroui/js/app/components/base/component'),
        SnifferCollection = require('../models/sniffer/sniffer-collection'),
        SnifferCollectionView = require('../views/sniffer/sniffer-collection-view');

    SnifferComponent = BaseComponent.extend({
        listen: {
            'page:beforeChange mediator': 'onPageBeforeChange',
            'page:request mediator': 'onPageRequest',
            'page:update mediator': 'onPageUpdate',
            'page:afterChange mediator': 'onPageAfterChange'
        },

        initialize: function (options) {
            this.collection = new SnifferCollection([{
                title: "Start",
                url: mediator.execute('currentUrl'),
                visited: Date.now()
            }]);
            this.view = new SnifferCollectionView({
                container: options._sourceElement,
                collection: this.collection
            });
        },

        onPageBeforeChange: function () {
//            console.log('onPageBeforeChange', arguments);
        },

        onPageRequest: function () {
//            console.log('onPageRequest', arguments);
        },

        onPageUpdate: function (data, options) {
            var attributes, model, url;

            attributes = {
                visited: Date.now()
            };
            url = mediator.execute('currentUrl');
            model = this.collection.findWhere({url: url});

            if (model) {
                attributes.visits = model.get('visits') + 1;
                model.set(attributes);
            } else {
                _.extend(attributes, {
                    title: String(data.title),
                    url: mediator.execute('currentUrl'),
                    visits: 1
                });
                model = this.collection.add(attributes);
            }
//            console.log(model.get());
        },

        onPageAfterChange: function () {
//            console.log('onPageAfterChange', arguments);
        }
    });

    return SnifferComponent;
});
