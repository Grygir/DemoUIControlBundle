/*global define*/
define(function (require) {
    'use strict';

    var TodoItemView,
        BaseView = require('oroui/js/app/views/base/view'),
        template = require('text!../../../../templates/todo/todo-item-template.html');

    TodoItemView = BaseView.extend({
        template: template,
        tagName: 'li',
        className: 'task',

        events: {
            'click .remove': 'removeModel',
            'change [name=isDone]': 'updateIsDone'
        },

        updateIsDone: function () {
            var isDone = this.$('[name=isDone]').is(':checked');
            this.model.set('isDone', isDone);
        },

        removeModel: function () {
            this.model.destroy();
        }
    });

    return TodoItemView;
});
