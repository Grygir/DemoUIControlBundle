/*global define*/
define(function (require) {
    'use strict';

    var TodoCollection,
        BaseCollection = require('oroui/js/app/models/base/collection'),
        TodoModel = require('./todo-model');

    TodoCollection = BaseCollection.extend({
        model: TodoModel
    });

    return TodoCollection;
});
