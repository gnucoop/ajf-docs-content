(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ajf/ionic/calendar'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ajf/ajf-examples/ionic/calendar', ['exports', '@ajf/ionic/calendar', '@angular/core'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ajfExamples = global.ajf.ajfExamples || {}, global.ajf.ajfExamples.ionic = global.ajf.ajfExamples.ionic || {}, global.ajf.ajfExamples.ionic.calendar = {}), global.ajf.ionic.calendar, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    /**
     * @title Simple calendar - Ionic
     */
    var IonicCalendarSimpleExample = /** @class */ (function () {
        function IonicCalendarSimpleExample() {
        }
        return IonicCalendarSimpleExample;
    }());
    IonicCalendarSimpleExample.ɵfac = function IonicCalendarSimpleExample_Factory(t) { return new (t || IonicCalendarSimpleExample)(); };
    IonicCalendarSimpleExample.ɵcmp = i0["ɵɵdefineComponent"]({ type: IonicCalendarSimpleExample, selectors: [["ionic-calendar-simple-example"]], decls: 1, vars: 0, template: function IonicCalendarSimpleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0["ɵɵelement"](0, "ajf-calendar");
            }
        }, directives: [i1.AjfCalendarComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0["ɵsetClassMetadata"](IonicCalendarSimpleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'ionic-calendar-simple-example',
                        templateUrl: 'calendar-simple-example.html',
                        styleUrls: ['calendar-simple-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        IonicCalendarSimpleExample,
    ];
    var CalendarExamplesModule = /** @class */ (function () {
        function CalendarExamplesModule() {
        }
        return CalendarExamplesModule;
    }());
    CalendarExamplesModule.ɵmod = i0["ɵɵdefineNgModule"]({ type: CalendarExamplesModule });
    CalendarExamplesModule.ɵinj = i0["ɵɵdefineInjector"]({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
                i1.AjfCalendarModule,
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0["ɵɵsetNgModuleScope"](CalendarExamplesModule, { declarations: [IonicCalendarSimpleExample], imports: [i1.AjfCalendarModule], exports: [IonicCalendarSimpleExample] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0["ɵsetClassMetadata"](CalendarExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.AjfCalendarModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CalendarExamplesModule = CalendarExamplesModule;
    exports.IonicCalendarSimpleExample = IonicCalendarSimpleExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ajf-examples-ionic-calendar.umd.js.map
