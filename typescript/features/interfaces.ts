interface HondaVehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic: HondaVehicle = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = ({ name, year, broken }: HondaVehicle): void => {
  console.log(`Name: ${name}`);
  console.log(`Year: ${year}`);
  console.log(`broken: ${broken}`);
};

interface Reportable {
  summary(): string;
}

const printSummary = ({ summary }: Reportable): void => {
  console.log(summary());
};

printVehicle(oldCivic);
printSummary(oldCivic);

const drinkValues = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} of sugar`;
  },
};

printSummary(drinkValues);
