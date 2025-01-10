import ProvPalette from './ProvPalette';
import ProvContextPad from "./ProvContextPad";
import ProvPopupMenu from "./ProvPopupMenu";
/*import ProvBpmnReplace from "./ProvBpmnReplace";*/
import ProvReplaceMenuProvider from "./ProvReplaceMenuProvider";
import ProvPropertiesProvider from "../prov-properties-provider";

export default {
  __init__: [ 'provContextPad', 'provPalette', 'provPopupMenu'/*, 'provPropertiesPanel'*//*'provBpmnReplace', 'provReplaceMenuProvider' */],
  provContextPad: ['type', ProvContextPad],
  provPalette: [ 'type', ProvPalette ],
  provPopupMenu: [ 'type', ProvPopupMenu]/*,
  provPropertiesPanel: [ 'type', ProvPropertiesProvider]*/
  /*
  provBpmnReplace: ['type', ProvBpmnReplace],
  provReplaceMenuProvider: ['type', ProvReplaceMenuProvider]*/

};
