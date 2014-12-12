define(function (require) {
    'use strict';

    var WysiwygComponent,
        _ = require('underscore'),
        BaseComponent = require('oroui/js/app/components/base/component'),
        trumbowyg = require('acmedemouicontrol/lib/trumbowyg-1.1.7/trumbowyg');
    require('acmedemouicontrol/js/trumbowyg/plugins/bookmark-links/bookmark-links');

    WysiwygComponent = BaseComponent.extend({
        initialize: function (options) {
            var opts;
            this.$editor = options._sourceElement;

            // create trumbowyg instance
            opts = this._prepareWysiwygOptions(options);
            this.$editor.trumbowyg(opts);

            WysiwygComponent.__super__.initialize.apply(this, arguments);
        },

        dispose: function () {
            if (this.disposed) {
                return;
            }

            // remove trumbowyg instance
            this.$editor.trumbowyg('destroy');
            delete this.$editor;

            WysiwygComponent.__super__.dispose.call(this);
        },

        _prepareWysiwygOptions: function (options) {
            var defaults, opts;

            opts = _.omit(options, '_sourceElement');
            defaults = {
                btns: [
                    'viewHTML',
                    '|', 'formatting',
                    '|', opts.semantic ? trumbowyg.btnsGrps.semantic : trumbowyg.btnsGrps.design,
                    '|', 'link', 'pagePin', 'favoritePage',
                    '|', trumbowyg.btnsGrps.justify,
                    '|', trumbowyg.btnsGrps.lists,
                    '|', 'horizontalRule'
                ]
            };
            _.defaults(opts, defaults);

            return opts;
        }
    });

    return WysiwygComponent;
});
