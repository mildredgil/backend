const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const colorsArray: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const carMaker = carMakers[0];

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2020-10-10');
