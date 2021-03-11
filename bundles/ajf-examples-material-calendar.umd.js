(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ajf/material/calendar'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ajf/ajf-examples/material/calendar', ['exports', '@ajf/material/calendar', '@angular/core'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.ajfExamples = global.ajf.ajfExamples || {}, global.ajf.ajfExamples.material = global.ajf.ajfExamples.material || {}, global.ajf.ajfExamples.material.calendar = {}), global.ajf.material.calendar, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    /**
     * @title Simple calendar - Material
     */
    var MaterialCalendarSimpleExample = /** @class */ (function () {
        function MaterialCalendarSimpleExample() {
        }
        return MaterialCalendarSimpleExample;
    }());
    MaterialCalendarSimpleExample.ɵfac = function MaterialCalendarSimpleExample_Factory(t) { return new (t || MaterialCalendarSimpleExample)(); };
    MaterialCalendarSimpleExample.ɵcmp = i0["ɵɵdefineComponent"]({ type: MaterialCalendarSimpleExample, selectors: [["material-calendar-simple-example"]], decls: 1, vars: 0, template: function MaterialCalendarSimpleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0["ɵɵelement"](0, "ajf-calendar");
            }
        }, directives: [i1.AjfCalendarComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0["ɵsetClassMetadata"](MaterialCalendarSimpleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'material-calendar-simple-example',
                        templateUrl: 'calendar-simple-example.html',
                        styleUrls: ['calendar-simple-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        MaterialCalendarSimpleExample,
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0["ɵɵsetNgModuleScope"](CalendarExamplesModule, { declarations: [MaterialCalendarSimpleExample], imports: [i1.AjfCalendarModule], exports: [MaterialCalendarSimpleExample] }); })();
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
    exports.MaterialCalendarSimpleExample = MaterialCalendarSimpleExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ajf-examples-material-calendar.umd.js.map
