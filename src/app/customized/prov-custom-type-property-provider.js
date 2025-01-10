// Import your custom property entries.
// The entry is a text input field with logic attached to create,
// update and delete the "spell" property.
import provCustomTypeProperties from './prov-custom-type.properties';

import { is } from 'bpmn-js/lib/util/ModelUtil';

const LOW_PRIORITY = 500;


/**
 * A provider with a `#getGroups(element)` method
 * that exposes groups for a diagram element.
 *
 * @param {PropertiesPanel} propertiesPanel
 * @param {Function} translate
 */
function ProvCustomTypePropertiesProvider(propertiesPanel, translate) {

  // API ////////

  /**
   * Return the groups provided for the given element.
   *
   * @param {DiagramElement} element
   *
   * @return {(Object[]) => (Object[])} groups middleware
   */
  this.getGroups = function(element) {

    /**
     * We return a middleware that modifies
     * the existing groups.
     *
     * @param {Object[]} groups
     *
     * @return {Object[]} modified groups
     */
    return function(groups) {

      // Add the "magic" group
      if(is(element, 'bpmn:Task')) {
        groups.push(createCustomGroup(element, translate));
      }

      return groups;
    }
  };


  // registration ////////

  // Register our custom magic properties provider.
  // Use a lower priority to ensure it is loaded after
  // the basic BPMN properties.
  propertiesPanel.registerProvider(LOW_PRIORITY, this);
}

ProvCustomTypePropertiesProvider.$inject = [ 'propertiesPanel', 'translate' ];

// Create the custom magic group
function createCustomGroup(element, translate) {

  // create a group called "Custom properties".
  const customGroup = {
    id: 'type',
    label: translate('Task Type properties'),
    entries: provCustomTypeProperties(element)
  };

  return customGroup;
}


export default {
  __init__: [ 'provCustomTypePropertiesProvider' ],
  provCustomTypePropertiesProvider: [ 'type', ProvCustomTypePropertiesProvider ]
};
