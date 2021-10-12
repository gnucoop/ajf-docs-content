import * as i1 from '@ajf/ionic/calendar';
import { AjfCalendarModule } from '@ajf/ionic/calendar';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

/**
 * @title Simple calendar - Ionic
 */
class IonicCalendarSimpleExample {
}
IonicCalendarSimpleExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: IonicCalendarSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
IonicCalendarSimpleExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: IonicCalendarSimpleExample, selector: "ionic-calendar-simple-example", ngImport: i0, template: "<ajf-calendar></ajf-calendar>\n", styles: [""], components: [{ type: i1.AjfCalendarComponent, selector: "ajf-calendar" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: IonicCalendarSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-calendar-simple-example', template: "<ajf-calendar></ajf-calendar>\n", styles: [""] }]
        }] });

const EXAMPLES = [
    IonicCalendarSimpleExample,
];
class CalendarExamplesModule {
}
CalendarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CalendarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CalendarExamplesModule, declarations: [IonicCalendarSimpleExample], imports: [AjfCalendarModule], exports: [IonicCalendarSimpleExample] });
CalendarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CalendarExamplesModule, imports: [[
            AjfCalendarModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CalendarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AjfCalendarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarExamplesModule, IonicCalendarSimpleExample };
//# sourceMappingURL=calendar.mjs.map
