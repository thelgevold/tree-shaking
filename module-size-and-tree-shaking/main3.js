import * as utilities from './utilities';

let nameHelper = new utilities.NameHelper();
let fullName = nameHelper.getFullName('Joe', 'Smith');
console.log(fullName);