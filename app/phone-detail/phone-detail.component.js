var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, Phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        Phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ['$routeParams', 'Phone'];
    return PhoneDetailController;
}());
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map