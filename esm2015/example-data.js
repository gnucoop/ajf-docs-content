/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
export class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map(extension => `${example}-example.${extension}`);
        this.examplePath = `/assets/stackblitz/examples/${example}/`;
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}
if (false) {
    /**
     * Description of the example.
     * @type {?}
     */
    ExampleData.prototype.description;
    /**
     * Path to the example. This is based on the structure of the material.angular.io repo.
     * @type {?}
     */
    ExampleData.prototype.examplePath;
    /**
     * List of files that are part of this example.
     * @type {?}
     */
    ExampleData.prototype.exampleFiles;
    /**
     * Selector name of the example component.
     * @type {?}
     */
    ExampleData.prototype.selectorName;
    /**
     * Name of the file that contains the example component.
     * @type {?}
     */
    ExampleData.prototype.indexFilename;
    /**
     * Name of the example component. For examples with multiple components, this property will
     * include multiple components that are comma separated (e.g. dialog-overview)
     * @type {?}
     */
    ExampleData.prototype.componentName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2V4YW1wbGUtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUF1QnRCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNELE9BQU87U0FDUjs7Y0FFSyxhQUFhLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1FBRWpELGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sWUFBWSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxXQUFXLEdBQUcsK0JBQStCLE9BQU8sR0FBRyxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLE9BQU8sVUFBVSxDQUFDO1FBRTlELElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRDs7Y0FFSyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFcEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUMxRixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxZQUFZO1lBQ3pCLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN0RSxDQUFDO0NBQ0Y7Ozs7OztJQTFDQyxrQ0FBb0I7Ozs7O0lBR3BCLGtDQUFvQjs7Ozs7SUFHcEIsbUNBQXVCOzs7OztJQUd2QixtQ0FBcUI7Ozs7O0lBR3JCLG9DQUFzQjs7Ozs7O0lBTXRCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBleGFtcGxlLW1vZHVsZSBmaWxlIHdpbGwgYmUgYXV0by1nZW5lcmF0ZWQuIEFzIHNvb24gYXMgdGhlXG4vLyBleGFtcGxlcyBhcmUgYmVpbmcgY29tcGlsZWQsIHRoZSBtb2R1bGUgZmlsZSB3aWxsIGJlIGdlbmVyYXRlZC5cbmltcG9ydCB7RVhBTVBMRV9DT01QT05FTlRTfSBmcm9tICcuL2V4YW1wbGUtbW9kdWxlJztcblxuLyoqXG4gKiBFeGFtcGxlIGRhdGFcbiAqICAgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBDb21wb25lbnQgbmFtZSwgc2VsZWN0b3IsIGZpbGVzIHVzZWQgaW4gZXhhbXBsZSwgYW5kIHBhdGggdG8gZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhIHtcblxuICAvKiogRGVzY3JpcHRpb24gb2YgdGhlIGV4YW1wbGUuICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqIFBhdGggdG8gdGhlIGV4YW1wbGUuIFRoaXMgaXMgYmFzZWQgb24gdGhlIHN0cnVjdHVyZSBvZiB0aGUgbWF0ZXJpYWwuYW5ndWxhci5pbyByZXBvLiAqL1xuICBleGFtcGxlUGF0aDogc3RyaW5nO1xuXG4gIC8qKiBMaXN0IG9mIGZpbGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhpcyBleGFtcGxlLiAqL1xuICBleGFtcGxlRmlsZXM6IHN0cmluZ1tdO1xuXG4gIC8qKiBTZWxlY3RvciBuYW1lIG9mIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gKi9cbiAgc2VsZWN0b3JOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE5hbWUgb2YgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIGluZGV4RmlsZW5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuIEZvciBleGFtcGxlcyB3aXRoIG11bHRpcGxlIGNvbXBvbmVudHMsIHRoaXMgcHJvcGVydHkgd2lsbFxuICAgKiBpbmNsdWRlIG11bHRpcGxlIGNvbXBvbmVudHMgdGhhdCBhcmUgY29tbWEgc2VwYXJhdGVkIChlLmcuIGRpYWxvZy1vdmVydmlldylcbiAgICovXG4gIGNvbXBvbmVudE5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihleGFtcGxlOiBzdHJpbmcpIHtcbiAgICBpZiAoIWV4YW1wbGUgfHwgIUVYQU1QTEVfQ09NUE9ORU5UUy5oYXNPd25Qcm9wZXJ0eShleGFtcGxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4YW1wbGVDb25maWcgPSBFWEFNUExFX0NPTVBPTkVOVFNbZXhhbXBsZV07XG5cbiAgICAvLyBUT0RPKHRpbmF5dWFuZ2FvKTogRG8gbm90IGhhcmQtY29kZSBleHRlbnNpb25zXG4gICAgdGhpcy5leGFtcGxlRmlsZXMgPSBbJ2h0bWwnLCAndHMnLCAnY3NzJ10ubWFwKGV4dGVuc2lvbiA9PiBgJHtleGFtcGxlfS1leGFtcGxlLiR7ZXh0ZW5zaW9ufWApO1xuICAgIHRoaXMuZXhhbXBsZVBhdGggPSBgL2Fzc2V0cy9zdGFja2JsaXR6L2V4YW1wbGVzLyR7ZXhhbXBsZX0vYDtcbiAgICB0aGlzLnNlbGVjdG9yTmFtZSA9IHRoaXMuaW5kZXhGaWxlbmFtZSA9IGAke2V4YW1wbGV9LWV4YW1wbGVgO1xuXG4gICAgaWYgKGV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKSB7XG4gICAgICB0aGlzLmV4YW1wbGVGaWxlcy5wdXNoKC4uLmV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlTmFtZSA9IGV4YW1wbGUucmVwbGFjZSgvKD86Xlxcd3xcXGJcXHcpL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZXhhbXBsZUNvbmZpZy50aXRsZSB8fCBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJyAnKSArICcgRXhhbXBsZSc7XG4gICAgdGhpcy5jb21wb25lbnROYW1lID0gZXhhbXBsZUNvbmZpZy5zZWxlY3Rvck5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZU5hbWUucmVwbGFjZSgvW1xcLV0rL2csICcnKSArICdFeGFtcGxlJztcbiAgfVxufVxuIl19