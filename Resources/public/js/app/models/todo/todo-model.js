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
        }
    });

    return TodoModel;
});
