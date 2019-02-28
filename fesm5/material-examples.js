import { __decorate, __spread } from 'tslib';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

var ExampleAjfModule = /** @class */ (function () {
    function ExampleAjfModule() {
    }
    ExampleAjfModule = __decorate([
        NgModule({
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
    ExampleModule = __decorate([
        NgModule({
            declarations: EXAMPLE_LIST,
            entryComponents: EXAMPLE_LIST,
            imports: [
                ExampleAjfModule,
                FormsModule,
                ReactiveFormsModule,
                CommonModule
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
            (_a = this.exampleFiles).push.apply(_a, __spread(exampleConfig.additionalFiles));
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

export { ExampleAjfModule as ɵajf_src_material_examples_examples_a, ExampleData, EXAMPLE_COMPONENTS, EXAMPLE_LIST, ExampleModule };
//# sourceMappingURL=material-examples.js.map
