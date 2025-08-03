// Car class with properties for name, accelerationPower, brakingPower, fuel, and speed
class Car {
  constructor(name, accelerationPower, brakingPower, fuelCapacity) {
    this.name = name;
    this.accelerationPower = accelerationPower;
    this.brakingPower = brakingPower;
    this.fuelCapacity = fuelCapacity;
    this.fuel = fuelCapacity; // Start with a full tank
    this.speed = 0; // Start at a speed of 0
  }

  // Method to accelerate the car
  accelerate() {
    if (this.fuel > 0) {
      this.speed += this.accelerationPower;
      this.fuel--; // Consume fuel with acceleration
      console.log(
        `Accelerating... Speed: ${this.speed} m/s, Fuel: ${this.fuel}`
      );
    } else {
      console.log("Out of fuel! Cannot accelerate.");
    }
  }

  // Method to brake the car
  brake() {
    this.speed -= this.brakingPower;
    if (this.speed < 0) this.speed = 0; // Ensure speed does not go below 0
    console.log(`Brakes applied... Speed: ${this.speed} m/s`);
  }

  // Method to check the car's current speed
  checkSpeed() {
    console.log(`Current speed: ${this.speed} m/s`);
    return this.speed;
  }

  // Method to refuel the car to maximum capacity
  refuel() {
    this.fuel = this.fuelCapacity;
    console.log("Refueled to maximum capacity.");
  }

  // Method to simulate a driving session
  drive() {
    console.log("Starting drive...");
    while (this.fuel > 0 && this.speed < 100) {
      this.accelerate();
      if (this.speed >= 50) {
        this.brake();
      }
    }
    if (this.fuel <= 0) {
      console.log("Drive ended due to fuel exhaustion.");
    } else {
      console.log("Drive ended at maximum speed.");
    }
  }
}

// Example usage
const myCar = new Car("Speedster", 10, 5, 20);

myCar.checkSpeed(); // Check initial speed
myCar.accelerate(); // Accelerate once
myCar.brake(); // Apply brakes
myCar.refuel(); // Refuel the car
myCar.drive(); // Start a driving session
