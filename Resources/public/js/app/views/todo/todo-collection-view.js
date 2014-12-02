/*global define*/
define(function (require) {
    'use strict';

    var TodoCollectionView,
        BaseView = require('oroui/js/app/views/base/collection-view'),
        TodoItemView = require('./todo-item-view'),
        template = require('text!../../../../templates/todo/todo-collection-template.html');

    TodoCollectionView = BaseView.extend({
        autoRender: true,
        itemView: TodoItemView,

        template: template,

        listSelector: 'ul',
        itemSelector: 'li',
        fallbackSelector: '.no-data',

        events: {
            'click .add-task': 'addTask'
        },

        addTask: function () {
            var input = this.$('[name=task]'),
                task = input.val();
            if (task) {
                // adds a new task
                this.collection.add({
                    task: task
                });
                input.val('');
            }
            input.focus();
        }
    });

    return TodoCollectionView;
});
