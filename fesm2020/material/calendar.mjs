import * as i1 from '@ajf/material/calendar';
import { AjfCalendarModule } from '@ajf/material/calendar';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title Simple calendar - Material
 */
class MaterialCalendarSimpleExample {
}
MaterialCalendarSimpleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MaterialCalendarSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MaterialCalendarSimpleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-rc.3", type: MaterialCalendarSimpleExample, selector: "material-calendar-simple-example", ngImport: i0, template: "<ajf-calendar></ajf-calendar>\n", styles: [""], components: [{ type: i1.AjfCalendarComponent, selector: "ajf-calendar", outputs: ["change"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: MaterialCalendarSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'material-calendar-simple-example', template: "<ajf-calendar></ajf-calendar>\n", styles: [""] }]
        }] });

const EXAMPLES = [MaterialCalendarSimpleExample];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CalendarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CalendarExamplesModule, declarations: [MaterialCalendarSimpleExample], imports: [AjfCalendarModule], exports: [MaterialCalendarSimpleExample] });
CalendarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CalendarExamplesModule, imports: [[AjfCalendarModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: CalendarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [AjfCalendarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarExamplesModule, MaterialCalendarSimpleExample };
//# sourceMappingURL=calendar.mjs.map
