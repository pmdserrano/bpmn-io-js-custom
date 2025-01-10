import { is } from 'bpmn-js/lib/util/ModelUtil';
import { PropertiesPanel } from 'bpmn-js-properties-panel';
// @ts-ignore
import { Translate } from 'diagram-js/lib/i18n/translate'
import {ProvCustomProps} from './prov-custom-props';
export default class ProvPropertiesProvider {
  static $inject = ['propertiesPanel', 'translate'];
  // @ts-ignore
  constructor(private propertiesPanel: PropertiesPanel,
              private translate: Translate) {
    console.log('INSIDE PROV-PROPERTIES-PROVIDER');
    propertiesPanel.registerProvider(500, this);
  }

  getTabs(element:any) {
    // @ts-ignore
    const provTab = {
      id: 'prov',
      label: 'Provisioning script',
      groups: {},
      entries: []
    };
    return (entries: any) => {
      console.log('Here in getTabs');
      console.log('Here in getTabs');

      let generalTab = entries.find((tab:any) => tab.id === 'prov');
      if (!generalTab) {
        entries.push(provTab);
        generalTab = entries.find((tab:any) => tab.id === 'prov');
      }
      const customProps = new ProvCustomProps(generalTab, element, this.translate);

      // @ts-ignore
      customProps.addCustomProperty();
      /*return [generalTab, provTab]*/
      return entries;
    }
  }

  getGroups(element: any) {
    return this.getTabs(element);
  }

  // @ts-ignore
  private createCustomGroups(element) {
    console.log('Inside create customgroups: ', JSON.stringify(element));
    if (is(element, 'bpmn:Task')) {

      return [
        {
          id: 'provGroup',
          label: 'Prov Group',
          entries: [
            {
              id: 'provField',
              description: 'Provisioning Field',
              html: `<input type="text" id="provField" name="provField">`,
              get: function(element: any) {
                return { provField: element.businessObject.provField || '' };
              },
              set: function(element: any, values: any) {
                element.businessObject.provField = values.provField;
                return element;
              }
            }
          ]
        }
      ];
    }
    return [];
  }
}
