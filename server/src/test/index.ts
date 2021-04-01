import * as stubClient from "./stubClient";

let id1 = stubClient.createCar({
  name: 'Hylux',
  brand: 'Toyota',
  manufactureyear: 2015,
  modelyear: 2015,
  price: 80000.99,
});

let id2 = stubClient.createCar({
  name: 'Ferrari',
  brand: 'Toyota',
  manufactureyear: 2014,
  modelyear: 2012,
  price: 84300.99,
});

// id1 = '0';
// id2 = '1';

setTimeout(() => {stubClient.getAll()},1000);

setTimeout(() => {stubClient.getById(id1)},1000);

setTimeout(() => {stubClient.updateCar({
  id: id1,
  name: 'Fusca',
  brand: 'Fusca IA',
  manufactureyear: 1980,
  modelyear: 1980,
  price: 40000.99,
})},1000);

setTimeout(() => {stubClient.deleteCarById(id2);},1000);

setTimeout(() => {stubClient.getAll()},1000);

setTimeout(() => {stubClient.deleteAllCar()},1000);
