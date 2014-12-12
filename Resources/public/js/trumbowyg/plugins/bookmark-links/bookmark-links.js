define(function (require) {
    'use strict';

    var $ = require('jquery'),
        _ = require('underscore'),
        mediator = require('oroui/js/mediator'),
        trumbowyg = require('acmedemouicontrol/lib/trumbowyg-1.1.7/trumbowyg');

    $.extend(true, trumbowyg, {
        langs: {
            en: {
                pagePin: "Pinned Pages",
                favoritePage: "Favorite Pages"
            }
        }
    });

    // Create btnsDef entry
    $.extend(true, trumbowyg, {
        opts: {
            btnsDef: {}
        }
    });

    // Add all colors in two dropdowns
    $.extend(true, trumbowyg, {
        opts: {
            btnsDef: {
                pagePin: {
                    func: dropdown,
                    param: 'pagePin'
                },
                favoritePage: {
                    func: dropdown,
                    param: 'favoritePage'
                }
            }
        }
    });

    function injectLink(value, instance) {
        instance.doc.execCommand('createLink', false, value.url);
        var link = $('a[href="' + value.url + '"]:not([title])', instance.$box);
        link.attr('data-nohash', 'true');
        if(value.text.length > 0)
            link.text(value.text);

        if(value.title.length > 0)
            link.attr('title', value.title);
    }

    function getDropdown(name, instance) {
        var $dropdown,
            pfx = instance.o.prefix,
            className = pfx + 'dropdown';
        $dropdown = instance.$box.find('.' + name + '-' + className);
        if (!$dropdown.length) {
            $dropdown = $('<div/>', { // the dropdown
                class: name + '-' + className + ' ' + className + ' ' + pfx + 'fixed-top'
            });
            instance.$box.append($dropdown.hide());
        }
        return $dropdown;
    }

    function dropdown(name, instance){
        var view, $btn, $dropdown,
            pfx = instance.o.prefix,
            dropdown = [];

        view = mediator.execute('composer:retrieve', name, true);
        if (!view || !view.collection.length) {
            return;
        }

        $dropdown = getDropdown(name, instance);

        // clear dropdown
        _.each(instance.o.btnsDef, function (def, btn) {
            if (btn.substr(1, name.length + 1) === name) {
                delete instance.o.btnsDef[name];
            }
        });
        $dropdown.empty();

        // fill in with new buttons
        view.collection.each(function (model) {
            var btn = '_' + name + '-' + model.cid,
                title = model.get('title_rendered_short') || model.get('title_rendered');

            instance.o.btnsDef[btn] = {
                func: injectLink,
                title: title,
                param: {
                    url: model.get('url'),
                    title: title,
                    text: title
                }
            };

            if(instance.isSupportedBtn(btn)) {
                $dropdown.append(instance.buildSubBtn(btn));
            }
        });

        $btn = instance.$btnPane.find('.' + pfx + name + '-button');
        $btn.addClass(pfx + 'open-dropdown');

        instance.execCmd('dropdown', name);
    }
});
