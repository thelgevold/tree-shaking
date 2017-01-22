(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.carModule_UMD = global.carModule_UMD || {})));
}(this, (function (exports) { 'use strict';

class CarService {
  getCarBrands() {
    return ['Ford', 'Mazda', 'Chrysler', 'Honda'];
  }
}

exports.CarService = CarService;

Object.defineProperty(exports, '__esModule', { value: true });

})));