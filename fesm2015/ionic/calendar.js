import * as i1 from '@ajf/ionic/calendar';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title Simple calendar - Ionic
 */
class IonicCalendarSimpleExample {
}
IonicCalendarSimpleExample.ɵfac = function IonicCalendarSimpleExample_Factory(t) { return new (t || IonicCalendarSimpleExample)(); };
IonicCalendarSimpleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IonicCalendarSimpleExample, selectors: [["ionic-calendar-simple-example"]], decls: 1, vars: 0, template: function IonicCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "ajf-calendar");
    } }, directives: [i1.AjfCalendarComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonicCalendarSimpleExample, [{
        type: Component,
        args: [{
                selector: 'ionic-calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    IonicCalendarSimpleExample,
];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵfac = function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); };
CalendarExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CalendarExamplesModule });
CalendarExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            AjfCalendarModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AjfCalendarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [IonicCalendarSimpleExample], imports: [AjfCalendarModule], exports: [IonicCalendarSimpleExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarExamplesModule, IonicCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
