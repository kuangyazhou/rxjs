function greeter(person) {
  return "hello" + person;
}

let user = "jane User";
document.body.innerHTML = greeter(user);

interface Person {
  firstName: string;
  lastName: string;
}

function render(arg: Person) {
  return `${arg.firstName}:${arg.lastName}`;
}
