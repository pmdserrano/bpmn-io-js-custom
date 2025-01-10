export default class ProvPopupMenu {
  constructor(create, elementFactory, popupMenu, translate) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    popupMenu.registerProvider(this);
  }

  getPopupMenuEntries(element) {
    console.log('getPopupMenuEntries: ' + JSON.stringify(element));

    return function(entries) {
      console.log('PopupMenu: ' + JSON.stringify(entries));
      return entries;
    }
  }
}
ProvPopupMenu.$inject = ['create', 'elementFactory', 'popupMenu', 'translate']
