import { AjfCalendarComponent, AjfCalendarModule } from '@ajf/material/calendar';
import { ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

/**
 * @title Simple calendar - Material
 */
class MaterialCalendarSimpleExample {
}
MaterialCalendarSimpleExample.ɵfac = function MaterialCalendarSimpleExample_Factory(t) { return new (t || MaterialCalendarSimpleExample)(); };
MaterialCalendarSimpleExample.ɵcmp = ɵɵdefineComponent({ type: MaterialCalendarSimpleExample, selectors: [["calendar-simple-example"]], decls: 1, vars: 0, template: function MaterialCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "ajf-calendar");
    } }, directives: [AjfCalendarComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MaterialCalendarSimpleExample, [{
        type: Component,
        args: [{
                selector: 'calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            }]
    }], null, null); })();

const EXAMPLES = [
    MaterialCalendarSimpleExample,
];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CalendarExamplesModule });
CalendarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
            AjfCalendarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [MaterialCalendarSimpleExample], imports: [AjfCalendarModule], exports: [MaterialCalendarSimpleExample] }); })();
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

export { CalendarExamplesModule, MaterialCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
