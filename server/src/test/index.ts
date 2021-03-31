import * as stubClient from "./stubClient";

let id1 = stubClient.createCar({
  name: 'Hylux',
  brand: 'Toyota',
  manufactureyear: 2015,
  modelyear: 2015,
  price: 80000.99,
});

let id2 = stubClient.createCar({
  name: 'Hylux',
  brand: 'Toyota',
  manufactureyear: 2015,
  modelyear: 2015,
  price: 80000.99,
});

stubClient.getAll();

stubClient.getById(id1);

stubClient.updateCar({
  name: 'Fusca',
  brand: 'Fusca IA',
  manufactureyear: 1980,
  modelyear: 1980,
  price: 40000.99,
})

stubClient.deleteCarById(id2);
stubClient.getAll();
stubClient.deleteAllCar();
