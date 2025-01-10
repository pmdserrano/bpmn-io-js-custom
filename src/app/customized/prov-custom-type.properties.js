import { html } from 'htm/preact';
import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

export default function(element) {

  return [
    {
      id: 'prov-type',
      element,
      component: ProvTypeCustom,
      isEdited: isTextFieldEntryEdited
    }
  ];
}

function ProvTypeCustom(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.type || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      type: value
    });
  }

  const title = translate('Task Type');
  const description = translate('Task Type description')
  /*return new TextFieldEntry({
    id,
    element,
    getValue,
    setValue,
    debounce,
    title,
    description
  });*/
  return html`<${TextFieldEntry}
    id=${ id }
    element=${ element }
    description=${ translate('Task Type description') }
    label=${ translate('Task Type') }
    getValue=${ getValue }
    setValue=${ setValue }
    debounce=${ debounce }
    tooltip=${ translate('Task Type description') }
  />`;
}
