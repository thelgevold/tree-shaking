export class Logger {
  logMessage(msg) {
    console.log(msg);
  }

  debugMessage(msg) {
    console.debug(msg);
  }
}

export class NameHelper {
  getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}