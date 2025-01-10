export default class ProvPalette {
  constructor(create, elementFactory, palette, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    palette.registerProvider(this);
  }

  getPaletteEntries(element) {
    const {
      create,
      elementFactory,
      translate
    } = this;

    /*function createServiceTask(event) {
      const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' });

      create.start(event, shape);
    }*/

    return function (entries) {
      delete entries['create.data-store'];
      delete entries['create.group'];
      delete entries['create.participant-expanded'];
      delete entries['create.subprocess-expanded'];
      delete entries['create.data-object'];
      delete entries['create.intermediate-event'];

      /*entries["create.service-task"] = {
        group: 'activity',
        className: 'bpmn-icon-service-task',
        title: translate('Create ServiceTask'),
        action: {
          dragstart: createServiceTask,
          click: createServiceTask
        }
      };*/
      return entries;
    };
  }
}

ProvPalette.$inject = [
  'create',
  'elementFactory',
  'palette',
  'translate'
];
