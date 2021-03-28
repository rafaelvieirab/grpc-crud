export {}
// import { ServiceError } from '@grpc/grpc-js';

// import carHandler from './handler';
// import { Car, CarDTO, CarRequestId, CarList, Empty } from './protobuffer/car_pb';

// const client = carHandler.client;

// interface CarsParams {
//   id?: string;
//   name: string;
//   brand: string;
//   manufactureYear: number;
//   modelYear: number;
//   price: number;
// }

// export function CreateCar(params: CarsParams) {
//   const carDTO = new CarDTO()
//     .setName(params.name)
//     .setBrand(params.brand)
//     .setManufactureyear(params.manufactureYear)
//     .setModelyear(params.modelYear)
//     .setPrice(params.price)

//   let carCreated = new Car();
//   client.createCar(carDTO, (error: ServiceError | null, response: Car) => {
//     if (error) {
//       console.error('Erro: ', error);
//       return error;
//     }
//     console.info(`Car created successfully: ${response.toObject()}`);
//     carCreated = response;
//     return response.toObject();
//   });
//   return carCreated;
// }

// export function GetCar(id: string) {
//   const carRequestId = new CarRequestId().setId(id)
  
//   let carFetched = new Car();
//   client.getCar(carRequestId, (error: ServiceError | null, response: Car) => {
//     if (error) {
//       console.error('Error: ', error);
//       return error;
//     }
//     console.info(`Car fetched successfully:\n ${response.toObject()}`);
//     carFetched = response
//     return response.toObject();
//   });
//   return carFetched;
// }

// export function GetAllCar() {
//   let carsList: Car[] = [];
//   client.getAllCar(new Empty(), (error: ServiceError | null, response: CarList) => {
//     if (error) {
//       console.error('Error: ', error);
//       return error;
//     }
//     console.info(`All cars fetched successfully:\n ${response.toString()}`);
//     carsList = response.getCarsList();
//     return response.getCarsList();
//   });
//   return carsList;
// }

// export function UpdateCar(params: CarsParams) {
//   const car = new Car()
//     .setId(params.id || '')
//     .setName(params.name)
//     .setBrand(params.brand)
//     .setManufactureyear(params.manufactureYear)
//     .setModelyear(params.modelYear)
//     .setPrice(params.price)

//   let carUpdated = new Car();
//   client.updateCar(car, (error: ServiceError | null, response: Car) => {
//     if (error) {
//       console.error('Erro: ', error);
//       return error;
//     }
//     console.info(`Car updated successfully: ${response.toObject()}`);
//     carUpdated = response;
//     return response.toObject();
//   });
//   return carUpdated;
// }

// export function DeleteCar(id: string) {
//   const carRequestId = new CarRequestId().setId(id);

//   client.deleteCar(carRequestId, (error: ServiceError | null, response: Empty) => {
//     if (error) {
//       console.error('Error: ', error);
//       return error;
//     }
//     console.info(`Car deleted successfully.......`);
//   });
// }
