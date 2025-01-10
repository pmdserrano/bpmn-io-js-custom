/*import BpmnReplace from "bpmn-js/lib/features/replace/BpmnReplace";
import {isAny} from "bpmn-js/lib/util/ModelUtil";


export default function ProvBpmnReplace(bpmnFactory, moddle, popupMenu, replaceOptions, selection, modeling) {
  BpmnReplace.call(this, bpmnFactory, moddle, popupMenu, replaceOptions, selection, modeling);
  const originalGetReplaceOptions = this.getReplaceOptions;

  this.getReplaceOptions =function(element) {
    const options = originalGetReplaceOptions.call(this, element);
    console.log('Custom BpmnReplace is being used');
    console.log('Options: ', JSON.stringify(options));
    return options.filter(option => {
      return !isAny(option.target, ['bpmn:ComplexGateway', 'bpmn:EventBasedGateway']);
    });
  };
}
ProvBpmnReplace.$inject = ['bpmnFactory', 'moddle', 'popupMenu', 'replaceOptions', 'selection', 'modeling'];
ProvBpmnReplace.prototype = Object.create(BpmnReplace.prototype);
ProvBpmnReplace.prototype.constructor = ProvBpmnReplace;*/
