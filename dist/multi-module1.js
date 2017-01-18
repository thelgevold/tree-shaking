(function () {
'use strict';

class NameHelper {
  getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

let nameHelper = new NameHelper();
let fullName = nameHelper.getFullName('Joe', 'Smith');
console.log(fullName);

}());