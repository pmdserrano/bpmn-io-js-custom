/*import ReplaceMenuProvider from "bpmn-js/lib/features/popup-menu/ReplaceMenuProvider";

export default class ProvReplaceMenuProvider extends ReplaceMenuProvider {
  constructor(popupMenu, modeling, moddle, bpmnReplace, rules, translate) {
    super(popupMenu, modeling, moddle, bpmnReplace, rules, translate);
    /!*event.on('diagram-init', () => {
      popupMenu.registerProvider('bpmn-replace', this);
    });*!/
  }
  getEnties(element) {
    const entries = super.getEnties(element);
    return entries.filter(entry =>
      entry.id !== 'replace-with-inclusive-gateway' && entry.id !== 'replace-with-event-based-gateway'
    );
  }
}
ProvReplaceMenuProvider.$inject = ['popupMenu', 'modeling', 'moddle', 'bpmnReplace', 'rules', 'translate'];*/
