class PhoneDetailController {
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone'];
  constructor($routeParams: angular.route.IRouteParamsService, Phone) {
    let phoneId = $routeParams['phoneId'];
    Phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });