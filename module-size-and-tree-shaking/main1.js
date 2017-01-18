import { NameHelper, Logger } from './utilities';

let nameHelper = new NameHelper();
let fullName = nameHelper.getFullName('Joe', 'Smith');
console.log(fullName);
