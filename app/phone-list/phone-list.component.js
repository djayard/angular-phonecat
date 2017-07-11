var PhoneListController = (function () {
    function PhoneListController(Phone) {
        var _this = this;
        Phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    PhoneListController.$inject = ['Phone'];
    return PhoneListController;
}());
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map