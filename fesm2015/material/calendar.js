import { AjfCalendarComponent, AjfCalendarModule } from '@ajf/material/calendar';
import { ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';

/**
 * @title Simple calendar - Material
 */
class MaterialCalendarSimpleExample {
}
MaterialCalendarSimpleExample.ɵfac = function MaterialCalendarSimpleExample_Factory(t) { return new (t || MaterialCalendarSimpleExample)(); };
MaterialCalendarSimpleExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: MaterialCalendarSimpleExample, selectors: [["material-calendar-simple-example"]], decls: 1, vars: 0, template: function MaterialCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "ajf-calendar");
    } }, directives: [AjfCalendarComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MaterialCalendarSimpleExample, [{
        type: Component,
        args: [{
                selector: 'material-calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    MaterialCalendarSimpleExample,
];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵfac = function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); };
CalendarExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CalendarExamplesModule });
CalendarExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            AjfCalendarModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CalendarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AjfCalendarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [MaterialCalendarSimpleExample], imports: [AjfCalendarModule], exports: [MaterialCalendarSimpleExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarExamplesModule, MaterialCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
