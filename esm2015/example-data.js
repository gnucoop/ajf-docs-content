/**
 * @fileoverview added by tsickle
 * Generated from: src/ajf-examples/example-data.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
export class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const { componentName, additionalFiles, additionalComponents, title } = EXAMPLE_COMPONENTS[example];
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        this.exampleFiles.push(...additionalFiles);
        this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentNames = [componentName, ...additionalComponents];
    }
}
if (false) {
    /**
     * Description of the example.
     * @type {?}
     */
    ExampleData.prototype.description;
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
     * Names of the components being used in this example.
     * @type {?}
     */
    ExampleData.prototype.componentNames;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FqZi1leGFtcGxlcy9leGFtcGxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7OztBQU1wRCxNQUFNLE9BQU8sV0FBVzs7OztJQWdCdEIsWUFBWSxPQUFlO1FBQ3pCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0QsT0FBTztTQUNSO2NBRUssRUFBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBQyxHQUMvRCxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7O2NBQ3pCLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWU7Ozs7UUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQztRQUVwRixpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLFlBQVksU0FBUyxFQUFFLEVBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxPQUFPLFVBQVUsQ0FBQztRQUU5RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0Y7Ozs7OztJQS9CQyxrQ0FBb0I7Ozs7O0lBR3BCLG1DQUF1Qjs7Ozs7SUFHdkIsbUNBQXFCOzs7OztJQUdyQixvQ0FBc0I7Ozs7O0lBR3RCLHFDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBleGFtcGxlLW1vZHVsZSBmaWxlIHdpbGwgYmUgYXV0by1nZW5lcmF0ZWQuIEFzIHNvb24gYXMgdGhlXG4vLyBleGFtcGxlcyBhcmUgYmVpbmcgY29tcGlsZWQsIHRoZSBtb2R1bGUgZmlsZSB3aWxsIGJlIGdlbmVyYXRlZC5cbmltcG9ydCB7RVhBTVBMRV9DT01QT05FTlRTfSBmcm9tICcuL2V4YW1wbGUtbW9kdWxlJztcblxuLyoqXG4gKiBFeGFtcGxlIGRhdGEgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBjb21wb25lbnQgbmFtZSwgc2VsZWN0b3IsIGZpbGVzIHVzZWQgaW5cbiAqIGV4YW1wbGUsIGFuZCBwYXRoIHRvIGV4YW1wbGVzLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGEge1xuICAvKiogRGVzY3JpcHRpb24gb2YgdGhlIGV4YW1wbGUuICovXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgLyoqIExpc3Qgb2YgZmlsZXMgdGhhdCBhcmUgcGFydCBvZiB0aGlzIGV4YW1wbGUuICovXG4gIGV4YW1wbGVGaWxlczogc3RyaW5nW107XG5cbiAgLyoqIFNlbGVjdG9yIG5hbWUgb2YgdGhlIGV4YW1wbGUgY29tcG9uZW50LiAqL1xuICBzZWxlY3Rvck5hbWU6IHN0cmluZztcblxuICAvKiogTmFtZSBvZiB0aGUgZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBleGFtcGxlIGNvbXBvbmVudC4gKi9cbiAgaW5kZXhGaWxlbmFtZTogc3RyaW5nO1xuXG4gIC8qKiBOYW1lcyBvZiB0aGUgY29tcG9uZW50cyBiZWluZyB1c2VkIGluIHRoaXMgZXhhbXBsZS4gKi9cbiAgY29tcG9uZW50TmFtZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGV4YW1wbGU6IHN0cmluZykge1xuICAgIGlmICghZXhhbXBsZSB8fCAhRVhBTVBMRV9DT01QT05FTlRTLmhhc093blByb3BlcnR5KGV4YW1wbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2NvbXBvbmVudE5hbWUsIGFkZGl0aW9uYWxGaWxlcywgYWRkaXRpb25hbENvbXBvbmVudHMsIHRpdGxlfSA9XG4gICAgICAgIEVYQU1QTEVfQ09NUE9ORU5UU1tleGFtcGxlXTtcbiAgICBjb25zdCBleGFtcGxlTmFtZSA9IGV4YW1wbGUucmVwbGFjZSgvKD86Xlxcd3xcXGJcXHcpL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG5cbiAgICAvLyBUT0RPKHRpbmF5dWFuZ2FvKTogRG8gbm90IGhhcmQtY29kZSBleHRlbnNpb25zXG4gICAgdGhpcy5leGFtcGxlRmlsZXMgPSBbJ2h0bWwnLCAndHMnLCAnY3NzJ10ubWFwKGV4dGVuc2lvbiA9PiBgJHtleGFtcGxlfS1leGFtcGxlLiR7ZXh0ZW5zaW9ufWApO1xuICAgIHRoaXMuc2VsZWN0b3JOYW1lID0gdGhpcy5pbmRleEZpbGVuYW1lID0gYCR7ZXhhbXBsZX0tZXhhbXBsZWA7XG5cbiAgICB0aGlzLmV4YW1wbGVGaWxlcy5wdXNoKC4uLmFkZGl0aW9uYWxGaWxlcyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHRpdGxlIHx8IGV4YW1wbGVOYW1lLnJlcGxhY2UoL1tcXC1dKy9nLCAnICcpICsgJyBFeGFtcGxlJztcbiAgICB0aGlzLmNvbXBvbmVudE5hbWVzID0gW2NvbXBvbmVudE5hbWUsIC4uLmFkZGl0aW9uYWxDb21wb25lbnRzXTtcbiAgfVxufVxuIl19