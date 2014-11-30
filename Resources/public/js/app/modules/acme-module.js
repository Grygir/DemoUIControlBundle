/*global require*/
require([
    'oroui/js/app/controllers/base/controller'
], function (BaseController) {
    'use strict';

    /**
     * Init SnifferComponent
     */
    BaseController.loadBeforeAction([
        'acmedemouicontrol/js/app/components/sniffer-component'
    ], function (SnifferComponent) {
        BaseController.addToReuse('sniffer', SnifferComponent, {
            _sourceElement: '#oroplatform-header .container'
        });
    });
});

