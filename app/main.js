import {GreetingService} from './greeting-service';
import {PersonService} from './person-service';

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