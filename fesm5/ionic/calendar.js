import { AjfCalendarComponent, AjfCalendarModule } from '@ajf/ionic/calendar';
import { Component, ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';

/**
 * @title Simple calendar - Ionic
 */
var IonicCalendarSimpleExample = /** @class */ (function () {
    function IonicCalendarSimpleExample() {
    }
    IonicCalendarSimpleExample.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-simple-example',
                    templateUrl: 'calendar-simple-example.html',
                    styleUrls: ['calendar-simple-example.css'],
                },] },
    ];
    IonicCalendarSimpleExample.ɵfac = function IonicCalendarSimpleExample_Factory(t) { return new (t || IonicCalendarSimpleExample)(); };
    IonicCalendarSimpleExample.ɵcmp = ɵɵdefineComponent({ type: IonicCalendarSimpleExample, selectors: [["calendar-simple-example"]], decls: 1, vars: 0, template: function IonicCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "ajf-calendar");
        } }, directives: [AjfCalendarComponent], styles: [""] });
    return IonicCalendarSimpleExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(IonicCalendarSimpleExample, [{
        type: Component,
        args: [{
                selector: 'calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    IonicCalendarSimpleExample
];
var CalendarExamplesModule = /** @class */ (function () {
    function CalendarExamplesModule() {
    }
    CalendarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AjfCalendarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CalendarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CalendarExamplesModule });
    CalendarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
                AjfCalendarModule,
            ]] });
    return CalendarExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [IonicCalendarSimpleExample], imports: [AjfCalendarModule], exports: [IonicCalendarSimpleExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AjfCalendarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CalendarExamplesModule, IonicCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
