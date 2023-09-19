// Function annotation
const add = (a: number, b: number): number => {
  return a + b;
};

// Inferance of the return type
const substract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather2015 = ({ date, weather }) => {
  console.log(date, weather);
};

// with destructor
const newLogWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
