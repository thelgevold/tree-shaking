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

class Main {
  greet() {
    let greetingService = new GreetingService();
    return greetingService.sayHello();
  }
}

document.getElementById('greet').addEventListener('click', function() {
  let main = new Main();
  alert(main.greet());
});

}());