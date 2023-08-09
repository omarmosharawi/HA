function Collage(manager) {
    this.manager = manager;
}

function Manager(name) {
  this.name = name;
  console.log(name + " manages the collage");
}

let manager = new Manager("Eng. Omar");
let collage = new Collage(manager);
