/*global define*/
define(function (require) {
    'use strict';

    var TodoComponent,
        BaseComponent = require('oroui/js/app/components/base/component'),
        TodoCollection = require('../models/todo/todo-collection'),
        TodoCollectionView = require('../views/todo/todo-collection-view');

    /**
     * The Controller for the Todo component, responsible for:
     *  - creating collection and collection-view
     *  - disposing obsolete instances
     */
    TodoComponent = BaseComponent.extend({
        initialize: function (options) {
            this.collection = new TodoCollection(options.data);
            this.view = new TodoCollectionView({
                el: options._sourceElement,
                collection: this.collection
            });
        }
    });

    return TodoComponent;
});
