/*global define*/
define(function (require) {
    'use strict';

    var TodoComponent,
        BaseComponent = require('oroui/js/app/components/base/component');

    /**
     * The Controller for the Todo component, responsible for:
     *  - creating collection and collection-view
     *  - disposing obsolete instances
     */
    TodoComponent = BaseComponent.extend({
        initialize: function (options) {
            console.log('TodoComponent initialize', options);
            TodoComponent.__super__.initialize.apply(this, arguments);
        },

        dispose: function () {
            console.log('TodoComponent dispose');
            TodoComponent.__super__.dispose.call(this);
        }
    });

    return TodoComponent;
});
