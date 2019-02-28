(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ajf/material-examples', ['exports', 'tslib', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory((global.ajf = global.ajf || {}, global.ajf.materialExamples = {}), global.tslib, global.ng.core, global.ng.forms, global.ng.common));
}(this, function (exports, tslib_1, core, forms, common) { 'use strict';

    var ExampleAjfModule = /** @class */ (function () {
        function ExampleAjfModule() {
        }
        ExampleAjfModule = tslib_1.__decorate([
            core.NgModule({
                imports: [],
                exports: []
            })
        ], ExampleAjfModule);
        return ExampleAjfModule;
    }());

    /* tslint:disable */
    var EXAMPLE_COMPONENTS = {};
    var EXAMPLE_LIST = [];
    var ExampleModule = /** @class */ (function () {
        function ExampleModule() {
        }
        ExampleModule = tslib_1.__decorate([
            core.NgModule({
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    ExampleAjfModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    common.CommonModule
                ]
            })
        ], ExampleModule);
        return ExampleModule;
    }());

    /**
     * Example data
     *   with information about Component name, selector, files used in example, and path to examples
     */
    var ExampleData = /** @class */ (function () {
        function ExampleData(example) {
            var _a;
            if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
                return;
            }
            var exampleConfig = EXAMPLE_COMPONENTS[example];
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
            this.examplePath = "/assets/stackblitz/examples/" + example + "/";
            this.selectorName = this.indexFilename = example + "-example";
            if (exampleConfig.additionalFiles) {
                (_a = this.exampleFiles).push.apply(_a, tslib_1.__spread(exampleConfig.additionalFiles));
            }
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
            this.componentName = exampleConfig.selectorName ||
                exampleName.replace(/[\-]+/g, '') + 'Example';
        }
        return ExampleData;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵajf_src_material_examples_examples_a = ExampleAjfModule;
    exports.ExampleData = ExampleData;
    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.EXAMPLE_LIST = EXAMPLE_LIST;
    exports.ExampleModule = ExampleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples.umd.js.map
