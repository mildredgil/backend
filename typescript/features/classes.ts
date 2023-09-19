// modifiers: public, protected, private
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('black');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('rooom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.color);
  }
}

const myCar = new Car('white');
myCar.startDrivingProcess();
