import {GreetingService} from './greeting-service';
import {PersonService} from './person-service';
import {CustomerService} from './customer-service';

class Main {
  greet() {
    let greetingService = new GreetingService();
    return greetingService.sayHello();
  }
  getPerson() {
    let personService = new PersonService();
    return personService.getPerson();
  }
}

document.getElementById('greet').addEventListener('click', function() {
  let main = new Main();
  alert(main.greet());
});
