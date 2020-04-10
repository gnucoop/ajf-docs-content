import { AjfCalendarModule } from '@ajf/ionic/calendar';
import { NgModule } from '@angular/core';
import { IonicCalendarSimpleExample } from './calendar-simple/calendar-simple-example';
import * as i0 from "@angular/core";
export { IonicCalendarSimpleExample, };
var EXAMPLES = [
    IonicCalendarSimpleExample,
];
var CalendarExamplesModule = /** @class */ (function () {
    function CalendarExamplesModule() {
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYWpmLWV4YW1wbGVzL2lvbmljL2NhbGVuZGFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkMsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRXJGLE9BQU8sRUFDTCwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0NBQzNCLENBQUM7QUFFRjtJQUFBO0tBUUM7OERBRFksc0JBQXNCOytIQUF0QixzQkFBc0Isa0JBTnhCO2dCQUNQLGlCQUFpQjthQUNsQjtpQ0FoQkg7Q0FxQkMsQUFSRCxJQVFDO1NBRFksc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBVmpDLDBCQUEwQixhQUt4QixpQkFBaUIsYUFMbkIsMEJBQTBCO2tEQVVmLHNCQUFzQjtjQVBsQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBamZDYWxlbmRhck1vZHVsZX0gZnJvbSAnQGFqZi9pb25pYy9jYWxlbmRhcic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtJb25pY0NhbGVuZGFyU2ltcGxlRXhhbXBsZX0gZnJvbSAnLi9jYWxlbmRhci1zaW1wbGUvY2FsZW5kYXItc2ltcGxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBJb25pY0NhbGVuZGFyU2ltcGxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBJb25pY0NhbGVuZGFyU2ltcGxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBamZDYWxlbmRhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19