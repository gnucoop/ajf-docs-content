(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ajf/material/calendar'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ajf/ajf-examples/material/calendar', ['exports', '@ajf/material/calendar', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ajf = global.ajf || {}, global.ajf.ajfExamples = global.ajf.ajfExamples || {}, global.ajf.ajfExamples.material = global.ajf.ajfExamples.material || {}, global.ajf.ajfExamples.material.calendar = {}), global.ajf.material.calendar, global.ng.core));
}(this, (function (exports, i1, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /**
     * @title Simple calendar - Material
     */
    var MaterialCalendarSimpleExample = /** @class */ (function () {
        function MaterialCalendarSimpleExample() {
        }
        return MaterialCalendarSimpleExample;
    }());
    MaterialCalendarSimpleExample.ɵfac = function MaterialCalendarSimpleExample_Factory(t) { return new (t || MaterialCalendarSimpleExample)(); };
    MaterialCalendarSimpleExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MaterialCalendarSimpleExample, selectors: [["material-calendar-simple-example"]], decls: 1, vars: 0, template: function MaterialCalendarSimpleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "ajf-calendar");
            }
        }, directives: [i1__namespace.AjfCalendarComponent], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MaterialCalendarSimpleExample, [{
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
    CalendarExamplesModule.ɵfac = function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); };
    CalendarExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CalendarExamplesModule });
    CalendarExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.AjfCalendarModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CalendarExamplesModule, [{
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [MaterialCalendarSimpleExample], imports: [i1.AjfCalendarModule], exports: [MaterialCalendarSimpleExample] }); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CalendarExamplesModule = CalendarExamplesModule;
    exports.MaterialCalendarSimpleExample = MaterialCalendarSimpleExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ajf-examples-material-calendar.umd.js.map
