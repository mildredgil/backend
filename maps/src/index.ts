import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const mapElement = document.getElementById('map') as HTMLElement;
const map = new Map(mapElement);

map.addMarker(user);
map.addMarker(company);
