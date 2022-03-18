// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 */
export class ExampleData {
    constructor(example) {
        /** Description of the example. */
        this.description = '';
        /** List of files that are part of this example. */
        this.exampleFiles = [];
        /** Selector name of the example component. */
        this.selectorName = '';
        /** Name of the file that contains the example component. */
        this.indexFilename = '';
        /** Names of the components being used in this example. */
        this.componentNames = [];
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        const { componentName, files, selector, primaryFile, additionalComponents, title } = EXAMPLE_COMPONENTS[example];
        const exampleName = example.replace(/(?:^\w|\b\w)/g, letter => letter.toUpperCase());
        this.exampleFiles = files;
        this.selectorName = selector;
        this.indexFilename = primaryFile;
        this.description = title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentNames = [componentName, ...additionalComponents];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvYWpmLWV4YW1wbGVzL3NyYy9leGFtcGxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFO0FBQ2pFLGtFQUFrRTtBQUNsRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sV0FBVztJQWdCdEIsWUFBWSxPQUFlO1FBZjNCLGtDQUFrQztRQUNsQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6QixtREFBbUQ7UUFDbkQsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFFNUIsOENBQThDO1FBQzlDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLDREQUE0RDtRQUM1RCxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQiwwREFBMEQ7UUFDMUQsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzRCxPQUFPO1NBQ1I7UUFFRCxNQUFNLEVBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBQyxHQUM5RSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUM1RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZXhhbXBsZS1tb2R1bGUgZmlsZSB3aWxsIGJlIGF1dG8tZ2VuZXJhdGVkLiBBcyBzb29uIGFzIHRoZVxuLy8gZXhhbXBsZXMgYXJlIGJlaW5nIGNvbXBpbGVkLCB0aGUgbW9kdWxlIGZpbGUgd2lsbCBiZSBnZW5lcmF0ZWQuXG5pbXBvcnQge0VYQU1QTEVfQ09NUE9ORU5UU30gZnJvbSAnLi9leGFtcGxlLW1vZHVsZSc7XG5cbi8qKlxuICogRXhhbXBsZSBkYXRhIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgY29tcG9uZW50IG5hbWUsIHNlbGVjdG9yLCBmaWxlcyB1c2VkIGluXG4gKiBleGFtcGxlLCBhbmQgcGF0aCB0byBleGFtcGxlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhIHtcbiAgLyoqIERlc2NyaXB0aW9uIG9mIHRoZSBleGFtcGxlLiAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG5cbiAgLyoqIExpc3Qgb2YgZmlsZXMgdGhhdCBhcmUgcGFydCBvZiB0aGlzIGV4YW1wbGUuICovXG4gIGV4YW1wbGVGaWxlczogc3RyaW5nW10gPSBbXTtcblxuICAvKiogU2VsZWN0b3IgbmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIHNlbGVjdG9yTmFtZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqIE5hbWUgb2YgdGhlIGZpbGUgdGhhdCBjb250YWlucyB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIGluZGV4RmlsZW5hbWU6IHN0cmluZyA9ICcnO1xuXG4gIC8qKiBOYW1lcyBvZiB0aGUgY29tcG9uZW50cyBiZWluZyB1c2VkIGluIHRoaXMgZXhhbXBsZS4gKi9cbiAgY29tcG9uZW50TmFtZXM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoZXhhbXBsZTogc3RyaW5nKSB7XG4gICAgaWYgKCFleGFtcGxlIHx8ICFFWEFNUExFX0NPTVBPTkVOVFMuaGFzT3duUHJvcGVydHkoZXhhbXBsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7Y29tcG9uZW50TmFtZSwgZmlsZXMsIHNlbGVjdG9yLCBwcmltYXJ5RmlsZSwgYWRkaXRpb25hbENvbXBvbmVudHMsIHRpdGxlfSA9XG4gICAgICBFWEFNUExFX0NPTVBPTkVOVFNbZXhhbXBsZV07XG4gICAgY29uc3QgZXhhbXBsZU5hbWUgPSBleGFtcGxlLnJlcGxhY2UoLyg/Ol5cXHd8XFxiXFx3KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xuXG4gICAgdGhpcy5leGFtcGxlRmlsZXMgPSBmaWxlcztcbiAgICB0aGlzLnNlbGVjdG9yTmFtZSA9IHNlbGVjdG9yO1xuICAgIHRoaXMuaW5kZXhGaWxlbmFtZSA9IHByaW1hcnlGaWxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aXRsZSB8fCBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJyAnKSArICcgRXhhbXBsZSc7XG4gICAgdGhpcy5jb21wb25lbnROYW1lcyA9IFtjb21wb25lbnROYW1lLCAuLi5hZGRpdGlvbmFsQ29tcG9uZW50c107XG4gIH1cbn1cbiJdfQ==