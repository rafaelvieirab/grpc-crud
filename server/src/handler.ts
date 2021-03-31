import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';
import { ADDRESS, hostUrl } from './config/config';

import { CarServiceClient, CarServiceService, ICarServiceServer } from './protobuffer/car_grpc_pb';
import { Car, CarDTO, CarRequestId, CarList, Empty } from './protobuffer/car_pb';

var carsList = new Map<string, Car>();

class CarHandler implements ICarServiceServer {
	[name: string]: grpc.UntypedHandleCall;

	createCar = (call: grpc.ServerUnaryCall<CarDTO, Car>, callback: grpc.sendUnaryData<Car>) => {
		try {
			const carDTO =  call.request;
			const id =  uuidv4();

			const car =  new Car()
				.setId(id)
				.setName(carDTO.getName())
				.setBrand(carDTO.getBrand())
				.setManufactureyear(carDTO.getManufactureyear())
				.setModelyear(carDTO.getModelyear())
				.setPrice(parseFloat(carDTO.getPrice().toFixed(2)));

			return  callback(null, car);
		} catch (e) {
			console.error('error in create new car: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	};

	getCar = (call: grpc.ServerUnaryCall<CarRequestId, Car>, callback: grpc.sendUnaryData<Car>) => {
		try {
			const id = call.request.getId();

			if (!carsList.has(id)) {
				let error = new Error('Car not found');
				// @ts-ignore
				error.code = grpc.status.NOT_FOUND;
				return callback(error, null);
			}

			const car = carsList.get(id);
			return callback(null, car);
		} catch (e) {
			console.error('error in get car: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	}

	getAllCar = (call: grpc.ServerUnaryCall<Empty, CarList>, callback: grpc.sendUnaryData<CarList>) => {
		try {
			const resp = new CarList().setCarsList(Array.from(carsList.values()))
			return callback(null, resp);
		} catch (e) {
			console.error('error in get all cars: ', e);
			e.code = grpc.status.INTERNAL;
			return callback(e, null);
		}
	}

	updateCar = (call: grpc.ServerUnaryCall<Car, Car>, callback: grpc.sendUnaryData<Car>) => {
		try {
			const car = call.request;
			const carUpdated = carsList.get(car.getId());

			if (carUpdated) {
				if (car.getName())
					carUpdated.setName(car.getName())
				if (car.getBrand())
					carUpdated.setBrand(car.getBrand())
				if (car.getManufactureyear())
					carUpdated.setManufactureyear(car.getManufactureyear())
				if (car.getModelyear())
					carUpdated.setModelyear(car.getModelyear())
				if (car.getPrice())
					carUpdated.setPrice(parseFloat(car.getPrice().toFixed(2)))

				carsList.set(car.getId(), carUpdated);
				return callback(null, carUpdated);
			} else {
				let error = new Error('Car not found');
				// @ts-ignore
				error.code = grpc.status.NOT_FOUND;
				return callback(error, null);
			}
		} catch (e) {
			console.error('error in update car: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	}

	deleteCar = (call: grpc.ServerUnaryCall<CarRequestId, Empty>, callback: grpc.sendUnaryData<Empty>) => {
		try {
			const id = call.request.getId();
			let error;

			if (!carsList.has(id)) {
				let error = new Error('Car not found');
				// @ts-ignore
				error.code = grpc.status.NOT_FOUND;
				return callback(error, null);
			}
			carsList.delete(id);
			return callback(null, new Empty());
		} catch (e) {
			console.error('error in delete car: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	}

	deleteAllCar = (call: grpc.ServerUnaryCall<Empty, Empty>, callback: grpc.sendUnaryData<Empty>) => {
		try {
			carsList.clear()
			return callback(null, new Empty());
		} catch (e) {
			console.error('error in delete all cars: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	}
}

export default {
	service: CarServiceService,         // Service interface
	handler: new CarHandler(),          // Service interface definitions
	client: new CarServiceClient(hostUrl, grpc.credentials.createInsecure()),
};
