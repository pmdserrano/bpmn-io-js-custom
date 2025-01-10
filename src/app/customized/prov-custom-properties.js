import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

export default function(element) {

  return [
    {
      id: 'prov',
      element,
      component: ProvCustom,
      isEdited: isTextFieldEntryEdited
    }
  ];
}

function ProvCustom(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.details || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      details: value
    });
  }

  const title = translate('Details property');
  const description = translate('Details property description')
  //TextAreaEntry
  //return new TextAreaEntry({
  return new TextFieldEntry({
    id,
    element,
    getValue,
    setValue,
    debounce,
    title,
    description
  });
}
