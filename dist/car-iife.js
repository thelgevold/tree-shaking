(function (exports) {
'use strict';

class CarService {
  getCarBrands() {
    return ['Ford', 'Mazda', 'Chrysler', 'Honda'];
  }
}

exports.CarService = CarService;

}((this.carModule_IIFE = this.carModule_IIFE || {})));