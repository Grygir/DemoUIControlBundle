/*global define*/
define(function (require) {
    'use strict';

    var TodoCollection,
        BaseCollection = require('oroui/js/app/models/base/collection'),
        TodoModel = require('./todo-model');

    TodoCollection = BaseCollection.extend({
        model: TodoModel,

        initialize: function (models, options) {
            this.on('change:isDone', this.sort);
            TodoCollection.__super__.initialize.apply(this, arguments);
        },

        comparator: function (model1, model2) {
            var diff, result;
            if (model1.get('isDone') === model2.get('isDone')) {
                // last task is lower
                diff = model1.get('added') - model2.get('added');
                result = (diff === 0 || isNaN(diff)) ? diff : diff > 0 ? -1 : 1;
            } else {
                result = model1.get('isDone') > model2.get('isDone') ? 1 : -1;
            }
            return result;
        }
    });

    return TodoCollection;
});
