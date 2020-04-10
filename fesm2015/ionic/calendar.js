import { AjfCalendarComponent, AjfCalendarModule } from '@ajf/ionic/calendar';
import { Component, ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: src/ajf-examples/ionic/calendar/calendar-simple/calendar-simple-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Simple calendar - Ionic
 */
class IonicCalendarSimpleExample {
}
IonicCalendarSimpleExample.decorators = [
    { type: Component, args: [{
                selector: 'calendar-simple-example',
                templateUrl: 'calendar-simple-example.html',
                styleUrls: ['calendar-simple-example.css'],
            },] },
];
/** @nocollapse */ IonicCalendarSimpleExample.ɵfac = function IonicCalendarSimpleExample_Factory(t) { return new (t || IonicCalendarSimpleExample)(); };
/** @nocollapse */ IonicCalendarSimpleExample.ɵcmp = ɵɵdefineComponent({ type: IonicCalendarSimpleExample, selectors: [["calendar-simple-example"]], decls: 1, vars: 0, template: function IonicCalendarSimpleExample_Template(rf, ctx) { if (rf & 1) {
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/ajf-examples/ionic/calendar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    IonicCalendarSimpleExample,
];
class CalendarExamplesModule {
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
/** @nocollapse */ CalendarExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CalendarExamplesModule });
/** @nocollapse */ CalendarExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
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

export { CalendarExamplesModule, IonicCalendarSimpleExample };
//# sourceMappingURL=calendar.js.map
