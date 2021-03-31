import * as stubClient from "./stubClient";

let id1 = stubClient.createCar({
  name: 'Hylux',
  brand: 'Toyota',
  manufactureYear: 2015,
  modelYear: 2015,
  price: 80000.99,
});

let id2 = stubClient.createCar({
  name: 'Hylux',
  brand: 'Toyota',
  manufactureYear: 2015,
  modelYear: 2015,
  price: 80000.99,
});

stubClient.getAll();

stubClient.getById(id1);

stubClient.updateCar({
  name: 'Fusca',
  brand: 'Fusca IA',
  manufactureYear: 1980,
  modelYear: 1980,
  price: 40000.99,
})

stubClient.deleteCarById(id2);
stubClient.getAll();
stubClient.deleteAllCar();
