/**
 * 1. Create an object vehicle with name (string), averageSpeed (number) and type (string with 
      value "air" | "water" | "land"). Create 2 other objects - car, aeroplane, with vehicle as their 
      prototype. Add engineCapacity, typeOfFuel to each and set them. To the car object, add 
      numAirbags. To the aeroplane add thrust
 */

function Car(name, averageSpeed, type) {
  this.name = name;
  this.averageSpeed = averageSpeed;
  this.type = type;
}

Car.prototype.engineCapacity = function (cc) {
  this.engineCapacity(cc);
};

Car.prototype.typeOfFuel = function (fuel) {
  this.typeOfFuel(fuel);
};

Car.prototype.numAirbags = function (bags) {
  this.numAirbags(bags);
};

function massiveCar(
  name,
  averageSpeed,
  type,
  engineCapacity,
  typeOfFuel,
  numAirbags
) {
  this.name = name;
  this.averageSpeed = averageSpeed;
  this.type = type;
  this.engineCapacity = engineCapacity;
  this.typeOfFuel = typeOfFuel;
  this.numAirbags = numAirbags;
}

const volvo = new massiveCar("Volvo", 112, "XC90", 1969, "Petrol", 6);

console.log(volvo);

function AeroPlane(name, averageSpeed, type) {
  this.name = name;
  this.averageSpeed = averageSpeed;
  this.type = type;
}

AeroPlane.prototype.engineCapacity = function (cc) {
  this.engineCapacity(cc);
};

AeroPlane.prototype.typeOfFuel = function (fuel) {
  this.typeOfFuel(fuel);
};

AeroPlane.prototype.thurst = function (thurst) {
  this.thurst(thurst);
};

function massivePlane(
  name,
  averageSpeed,
  type,
  engineCapacity,
  typeOfFuel,
  thurst
) {
  this.name = name;
  this.averageSpeed = averageSpeed;
  this.type = type;
  this.engineCapacity = engineCapacity;
  this.typeOfFuel = typeOfFuel;
  this.thurst = thurst;
}

const airIndia = new massivePlane(
  "Air India",
  750,
  "A320",
  63,
  800,
  "QAV-1",
  27,
  000
);

console.log(airIndia);
