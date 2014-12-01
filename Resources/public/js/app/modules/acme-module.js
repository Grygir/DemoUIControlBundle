/*global require*/
require([
    'oroui/js/app/controllers/base/controller'
], function (BaseController) {
    'use strict';

    /**
     * Init HistoryComponent
     *
     * This require method is executed right before Application instance is created.
     *
     * Here, over BaseController's static method loadBeforeAction, we load
     * module of the History component and declare its composition to reuse
     * through action.
     */
    BaseController.loadBeforeAction([
        'acmedemouicontrol/js/app/components/history-component'
    ], function (HistoryComponent) {

        /**
         * Create the composition that will be reused across navigation,
         * arguments are:
         *  - name of composition
         *  - constructor
         *  - its options
         */
        BaseController.addToReuse('historyComponent', HistoryComponent, {
            _sourceElement: '#oroplatform-header .nav.top-search.shortcuts'
        });
    });
});

