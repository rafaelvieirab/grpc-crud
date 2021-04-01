import handler from '../handler';
import { Car, CarDTO, CarList, CarRequestId, Empty } from "../protobuffer/car_pb";

const stubClient = handler.client;

interface CarsParams {
  id?: string;
  name: string;
  brand: string;
  manufactureyear: number;
  modelyear: number;
  price: number;
}

export function getById(id: string) {
  const request = new CarRequestId().setId(id);

  stubClient.getCar(request, (error, response) => {
    console.log('\n\n-----Get By Id-----')
    // console.info(`\n\nCarro com id ${id}: \n ${response}`);
    console.info(`Carro com id ${id}: \n ${print(response)}`);
  })
}

export function getAll() {
  stubClient.getAllCar(new Empty(), (error, response: CarList) => {
    console.log('\n\n-----Get All-----')
    if (error) {
      console.error('Error code:' + error.code + '\nMessage:' + error.message)
    } else {
      printAll(response);
    }
  });
}

export function createCar(params: CarsParams) {
  const carDTO = new CarDTO()
    .setName(params.name)
    .setBrand(params.brand)
    .setManufactureyear(params.manufactureyear)
    .setModelyear(params.modelyear)
    .setPrice(params.price)


  let id = '';
  stubClient.createCar(carDTO, (error, response: Car) => {
    console.log('\n\n-----Create-----')
    if (error) {
      console.error('Erro: Carro não foi criado')
    } else {
      // console.info(`Carro criado: \n ${response}`);
      console.info(`Carro criado: \n ${print(response)}`);
      id = response.getId();
    }
  });
  return id;
}

export function updateCar(params: CarsParams) {
  const carUpdated = new Car()
    .setId(params.id || '')
    .setName(params.name)
    .setBrand(params.brand)
    .setManufactureyear(params.manufactureyear)
    .setModelyear(params.modelyear)
    .setPrice(params.price)


  const requestGet = new CarRequestId().setId(params.id || '');
  stubClient.getCar(requestGet, (error, response) => {
    console.log('\n\n-----Update-----')
    // console.info(`Carro com id ${params.id} antes de ser atualizado: \n ${response}`);
    console.info(`Carro com id ${params.id} antes de ser atualizado: \n ${print(response)}`);
  })

  stubClient.updateCar(carUpdated, (error, response: Car) => {
    // console.info(`Carro com id ${params.id} atualizado: \n ${response}`);
    console.info(`Carro com id ${params.id} atualizado: \n ${print(response)}`);
  });
}

export function deleteCarById(id: string) {
  const carRequestId = new CarRequestId().setId(id);

  stubClient.deleteCar(carRequestId, (error, response: Empty) => {
    console.log('\n\n-----Delete By ID-----')
    console.info(`Carro com id ${id} foi deletado:`);
  });
}

export function deleteAllCar() {
  stubClient.deleteAllCar(new Empty(), (error, response: Empty) => {
    console.log('\n\n-----Delete All-----')
    console.info(`Todos os carros foram deletados.`);
  })
}

function print(car: Car) {
  if (car == undefined)
    return car
  let json = '{';
  let obj: CarsParams = car.toObject();
  for (var key in obj) {
    // @ts-ignore
    json += `\n  ${key}: ${obj[key]},`;
  }
  json += '\n}';
  return json;
}

function printAll(cars: CarList) {
  if (cars == undefined)
    return

  console.info("Todos os carros cadastrados")
  console.log('{')
  cars.getCarsList().forEach(car => {
    console.log(print(car) + ',\n')
  })
  console.log('}')
}