class PhoneListController {
  phones: any[];
  orderProp: string;

  static $inject = ['Phone'];
  constructor(Phone) {
    Phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });