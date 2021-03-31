import { credentials } from '@grpc/grpc-js'

import { Car, CarDTO, CarList, CarRequestId, Empty } from "../src/protobuffer/car_pb";
import { CarServiceClient } from '../src/protobuffer/car_grpc_pb';
import { ADDRESS } from '../src/config/config';

const stubClient = new CarServiceClient(ADDRESS, credentials.createInsecure());

interface CarsParams {
  id?: string;
  name: string;
  brand: string;
  manufactureYear: number;
  modelYear: number;
  price: number;
}

export function getById(id: string) {
  const request = new CarRequestId().setId(id);
  stubClient.getCar(request, (error, response) => {
    console.info(`\n\nCarro com id ${id}: \n ${response}`);
  })
}

export function getAll() {
  stubClient.getAllCar(new Empty(), (error, response: CarList) => {
    console.info(`\n\nTodos os carros cadastrados:\n ${response.getCarsList()}`);
  });
}

export function createCar(params: CarsParams) {
  const carDTO = new CarDTO()
    .setName(params.name)
    .setBrand(params.brand)
    .setManufactureyear(params.manufactureYear)
    .setModelyear(params.modelYear)
    .setPrice(params.price)

  let id: string;
  stubClient.createCar(carDTO, (error, response: Car) => {
    console.error(error);
    // console.info(`\n\nCarro criado: \n ${response.toString()}`);
    // id = response.getId();
  });
  return id;
}

export function updateCar(params: CarsParams) {
  const carUpdated = new Car()
    .setId(params.id)
    .setName(params.name)
    .setBrand(params.brand)
    .setManufactureyear(params.manufactureYear)
    .setModelyear(params.modelYear)
    .setPrice(params.price)

  stubClient.getCar(new CarRequestId().setId(params.id), (error, response) => {
    console.info(`\nCarro com id ${params.id} antes de ser atualizado: \n ${response}`);
  })

  stubClient.updateCar(carUpdated, (error, response: Car) => {
    console.info(`\n\nCarro com id ${params.id} atualizado: \n ${response}`);
  });
}

export function deleteCarById(id: string) {
  const carRequestId = new CarRequestId().setId(id);

  stubClient.deleteCar(carRequestId, (error, response: Empty) => {
    console.info(`\n\nCarro com id ${id} foi deletado:`);
  });
}

export function deleteAllCar() {
  stubClient.deleteAllCar(new Empty(), (error, response: Empty) => {
    console.info(`\n\nTodos os carros foram deletados.`);
  })
}