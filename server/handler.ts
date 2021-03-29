import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';

import { CarServiceService, ICarServiceServer, CarServiceClient } from '../protobuffers/car_grpc_pb';
import { Car, CarDTO, CarRequestId, CarList, Empty } from '../protobuffers/car_pb';
import {addressServer} from '../config/url';

var carsList = new Map<string, Car>();

class CarHandler implements ICarServiceServer {
	[name: string]: grpc.UntypedHandleCall;

	createCar = (call: grpc.ServerUnaryCall<CarDTO, Car>, callback: grpc.sendUnaryData<Car>) => {
		try {
			const carDTO = call.request.toObject();
			const id = uuidv4();

			const car = new Car()
				.setId(id)
				.setName(carDTO.name)
				.setBrand(carDTO.brand)
				.setManufactureyear(carDTO.manufactureyear)
				.setModelyear(carDTO.modelyear);

			return callback(null, car);
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
			return callback(e, null);
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
			const car = call.request.toObject();
			const carUpdated = carsList.get(car.id);

			if (carUpdated) {
				if (car.name)
					carUpdated.setName(car.name)
				if (car.brand)
					carUpdated.setBrand(car.brand)
				if (car.manufactureyear)
					carUpdated.setManufactureyear(car.manufactureyear)
				if (car.modelyear)
					carUpdated.setModelyear(car.modelyear)
				if (car.price)
					carUpdated.setPrice(car.price)

				carsList.set(car.id, carUpdated);
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
			console.error('error in create new car: ', e);
			e.code = grpc.status.INTERNAL;
			callback(e, null);
		}
	}

	deleteAllCar = (call: grpc.ServerUnaryCall<Empty, Empty>, callback: grpc.sendUnaryData<Empty>) => {
		try {
			carsList = new Map<string, Car>();
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
	client: new CarServiceClient(addressServer, grpc.credentials.createInsecure()),
};
