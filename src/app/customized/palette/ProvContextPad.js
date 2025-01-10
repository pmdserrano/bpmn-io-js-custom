import ProvReplaceMenuProvider from "./ProvReplaceMenuProvider";
import {is} from "bpmn-js/lib/util/ModelUtil";

export default class ProvContextPad {
  constructor(bpmnFactory, config, contextPad, create, elementFactory, injector, translate) {
    this.bpmnFactory = bpmnFactory;
    this.config = config;
    this.contextPad = contextPad;
    this.create = create;
    this.elementFactory = elementFactory;
    this.injector = injector;
    this.translate = translate;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get('autoPlace', false);
    }
    /*this.replaceMenuProvider = new ProvReplaceMenuProvider(
      injector.get('popupMenu'),
      injector.get('modeling'),
      injector.get('moddle'),
      injector.get('bpmnReplace'),
      injector.get('rules'),
      injector.get('translate')
    );*/
   /* this.replaceMenuProvider = injector.instantiate(ProvReplaceMenuProvider);*/


    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    console.log('ELEMENT: ' + JSON.stringify(element));
    /*console.log('ACTION: ' + JSON.stringify(contextPad));*/
    return function(entries) {
      console.log('Context Pad: ' + JSON.stringify(entries));
      delete entries['append.intermediate-event'];
      delete entries['append.text-annotation'];
      delete entries['replace-with-inclusive-gateway'];
      delete entries['replace-with-event-based-gateway'];
      if (is(element, 'bpmn:Task')) {
        entries['properties-panel'] = {
          group: 'edit',
          className: 'bpmn-icon-properties',
          title: 'Show properties panel',
          action: {
            click: (event, element) => {
              this.showPropertiesPanel(element);
            }
          }
        }
      }
      return entries;
    }
  }
  showPropertiesPanel(element) {
    this.eventBus.fire('propertiesPanel.show', { element: element} );
  }
}

ProvContextPad.$inject = [
  'bpmnFactory',
  'config',
  'contextPad',
  'create',
  'elementFactory',
  'injector',
  'translate'
];
