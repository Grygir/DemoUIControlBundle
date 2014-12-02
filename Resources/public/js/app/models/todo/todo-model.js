/*global define*/
define(function (require) {
    'use strict';

    var TodoModel,
        BaseModel = require('oroui/js/app/models/base/model');

    TodoModel = BaseModel.extend({
        defaults: {
            task: '',
            isDone: false,
            added: null
        },

        initialize: function (attributes, options) {
            if (options.add && !this.get('added')) {
                // the model just added
                this.set('added', Date.now(), {silent: true});
            }
            TodoModel.__super__.initialize.call(this, attributes, options);
        }
    });

    return TodoModel;
});
