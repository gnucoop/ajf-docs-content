import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { NgModule } from '@angular/core';
import { IonicCalendarSimpleExample } from './calendar-simple/calendar-simple-example';
import * as i0 from "@angular/core";
export { IonicCalendarSimpleExample };
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
    CalendarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CalendarExamplesModule });
    CalendarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CalendarExamplesModule_Factory(t) { return new (t || CalendarExamplesModule)(); }, imports: [[
                AjfCalendarModule,
            ]] });
    return CalendarExamplesModule;
}());
export { CalendarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CalendarExamplesModule, { declarations: [IonicCalendarSimpleExample], imports: [AjfCalendarModule], exports: [IonicCalendarSimpleExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalendarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AjfCalendarModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWpmLWV4YW1wbGVzL2lvbmljL2NhbGVuZGFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRXJGLE9BQU8sRUFDTCwwQkFBMEIsRUFDM0IsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0NBQzNCLENBQUM7QUFFRjtJQUFBO0tBUUM7O2dCQVJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOzs4REFDWSxzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFOeEI7Z0JBQ1AsaUJBQWlCO2FBQ2xCO2lDQWhCSDtDQXFCQyxBQVJELElBUUM7U0FEWSxzQkFBc0I7d0ZBQXRCLHNCQUFzQixtQkFWakMsMEJBQTBCLGFBS3hCLGlCQUFpQixhQUxuQiwwQkFBMEI7a0RBVWYsc0JBQXNCO2NBUGxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FqZkNhbGVuZGFyTW9kdWxlfSBmcm9tICdAYWpmL2lvbmljL2NhbGVuZGFyJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0lvbmljQ2FsZW5kYXJTaW1wbGVFeGFtcGxlfSBmcm9tICcuL2NhbGVuZGFyLXNpbXBsZS9jYWxlbmRhci1zaW1wbGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIElvbmljQ2FsZW5kYXJTaW1wbGVFeGFtcGxlXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgSW9uaWNDYWxlbmRhclNpbXBsZUV4YW1wbGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBamZDYWxlbmRhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19