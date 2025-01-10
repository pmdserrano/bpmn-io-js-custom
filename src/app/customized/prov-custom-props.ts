import { is } from 'bpmn-js/lib/util/ModelUtil';
import {assign} from 'min-dash';
export class ProvCustomProps {
  constructor(private group: any,
              private element: any,
              private translate: any) {
  }

  addCustomProperty() {
    if (is(this.element, 'bpmn:Task')) {
      console.log('ELEMENT: ', JSON.stringify(this.element));
      console.log('GROUP: ', JSON.stringify(this.group));
      let newEnties = this.group?.entries.push({
        id: 'provField',
        description: 'Provisioning Field',
        html: `<input type="text" id="provField" name="provField">`,
        get: (element: any) => {
          return { provField: element.businessObject.provField || '' };
        },
        set: function(element: any, values: any) {
          assign(element.businessObject, {provField: values['provField']});
          return element;
        }
      });
    }
  }

}
