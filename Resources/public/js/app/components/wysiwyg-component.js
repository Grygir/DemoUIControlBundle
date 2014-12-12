define(function (require) {
    'use strict';

    var WysiwygComponent,
        BaseComponent = require('oroui/js/app/components/base/component');

    WysiwygComponent = BaseComponent.extend({
        initialize: function (options) {
            console.log('Initialize WysiwygComponent');
            WysiwygComponent.__super__.initialize.apply(this, arguments);
        },

        dispose: function () {
            if (this.disposed) {
                return;
            }
            console.log('Destroys WysiwygComponent');
            WysiwygComponent.__super__.dispose.call(this);
        }
    });

    return WysiwygComponent;
});
