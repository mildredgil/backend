let apples: number = 10;

let speed: string = 'slow';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green'];

// Classes
class Cat {}
let cat: Cat = new Cat();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations:
// 1. When declare and initilize later
let apple: string;
apple = 'red';

// 2. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // here the type is any

const pointCoordinates: { x: number; y: number } = JSON.parse(json);
console.log(pointCoordinates);

// 3. When variable whose type cannot be infgerred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
