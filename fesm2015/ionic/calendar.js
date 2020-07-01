import { AjfCalendarComponent, AjfCalendarModule } from '@ajf/ionic/calendar';
import { ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

/**
 * @title Simple calendar - Ionic
 */
class IonicCalendarSimpleExample {
}
IonicCalendarSimpleExample.ɵfac = function IonicCalendarSimpleExample_Factory(t) { return new (t || IonicCalendarSimpleExample)(); };
IonicCalendarSimpleExample.ɵcmp = ɵɵdefineComponent({ type: IonicCalendarSimpleExample, selectors: [["calendar-simple-example"]], decls: 1, vars: 0, template: function IonicCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "ajf-calendar");
    } }, directives: [AjfCalendarComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IonicCalendarSimpleExample, [{
        type: Component,
        args: [{
                selector: 'calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    IonicCalendarSimpleExample,
];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CalendarExamplesModule });
CalendarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
            AjfCalendarModule,
        ]] });
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

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarExamplesModule, IonicCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
