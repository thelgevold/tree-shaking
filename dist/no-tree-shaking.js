(function () {
'use strict';

class GreetingService {
  sayHello() {
    return 'Hello';
  }
  sayHi() {
    return 'Hi';
  }
}

class PersonService {
  getPerson() {
    return {firstName: 'Joe', lastName: 'Smith'};
  }
}

class CustomerService {
  getCustomer() {
    return {firstName: 'Joe', lastName: 'Smith'};
  }
}

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

}());