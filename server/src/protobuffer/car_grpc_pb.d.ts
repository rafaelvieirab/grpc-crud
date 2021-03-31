// package: proto
// file: car.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as car_pb from "./car_pb";

interface ICarServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createCar: ICarServiceService_ICreateCar;
    getCar: ICarServiceService_IGetCar;
    getAllCar: ICarServiceService_IGetAllCar;
    updateCar: ICarServiceService_IUpdateCar;
    deleteCar: ICarServiceService_IDeleteCar;
    deleteAllCar: ICarServiceService_IDeleteAllCar;
}

interface ICarServiceService_ICreateCar extends grpc.MethodDefinition<car_pb.CarDTO, car_pb.Car> {
    path: "/proto.CarService/CreateCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.CarDTO>;
    requestDeserialize: grpc.deserialize<car_pb.CarDTO>;
    responseSerialize: grpc.serialize<car_pb.Car>;
    responseDeserialize: grpc.deserialize<car_pb.Car>;
}
interface ICarServiceService_IGetCar extends grpc.MethodDefinition<car_pb.CarRequestId, car_pb.Car> {
    path: "/proto.CarService/GetCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.CarRequestId>;
    requestDeserialize: grpc.deserialize<car_pb.CarRequestId>;
    responseSerialize: grpc.serialize<car_pb.Car>;
    responseDeserialize: grpc.deserialize<car_pb.Car>;
}
interface ICarServiceService_IGetAllCar extends grpc.MethodDefinition<car_pb.Empty, car_pb.CarList> {
    path: "/proto.CarService/GetAllCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.Empty>;
    requestDeserialize: grpc.deserialize<car_pb.Empty>;
    responseSerialize: grpc.serialize<car_pb.CarList>;
    responseDeserialize: grpc.deserialize<car_pb.CarList>;
}
interface ICarServiceService_IUpdateCar extends grpc.MethodDefinition<car_pb.Car, car_pb.Car> {
    path: "/proto.CarService/UpdateCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.Car>;
    requestDeserialize: grpc.deserialize<car_pb.Car>;
    responseSerialize: grpc.serialize<car_pb.Car>;
    responseDeserialize: grpc.deserialize<car_pb.Car>;
}
interface ICarServiceService_IDeleteCar extends grpc.MethodDefinition<car_pb.CarRequestId, car_pb.Empty> {
    path: "/proto.CarService/DeleteCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.CarRequestId>;
    requestDeserialize: grpc.deserialize<car_pb.CarRequestId>;
    responseSerialize: grpc.serialize<car_pb.Empty>;
    responseDeserialize: grpc.deserialize<car_pb.Empty>;
}
interface ICarServiceService_IDeleteAllCar extends grpc.MethodDefinition<car_pb.Empty, car_pb.Empty> {
    path: "/proto.CarService/DeleteAllCar";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<car_pb.Empty>;
    requestDeserialize: grpc.deserialize<car_pb.Empty>;
    responseSerialize: grpc.serialize<car_pb.Empty>;
    responseDeserialize: grpc.deserialize<car_pb.Empty>;
}

export const CarServiceService: ICarServiceService;

export interface ICarServiceServer extends grpc.UntypedServiceImplementation {
    createCar: grpc.handleUnaryCall<car_pb.CarDTO, car_pb.Car>;
    getCar: grpc.handleUnaryCall<car_pb.CarRequestId, car_pb.Car>;
    getAllCar: grpc.handleUnaryCall<car_pb.Empty, car_pb.CarList>;
    updateCar: grpc.handleUnaryCall<car_pb.Car, car_pb.Car>;
    deleteCar: grpc.handleUnaryCall<car_pb.CarRequestId, car_pb.Empty>;
    deleteAllCar: grpc.handleUnaryCall<car_pb.Empty, car_pb.Empty>;
}

export interface ICarServiceClient {
    createCar(request: car_pb.CarDTO, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    createCar(request: car_pb.CarDTO, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    createCar(request: car_pb.CarDTO, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    getCar(request: car_pb.CarRequestId, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    getCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    getCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    getAllCar(request: car_pb.Empty, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    getAllCar(request: car_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    getAllCar(request: car_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    updateCar(request: car_pb.Car, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    updateCar(request: car_pb.Car, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    updateCar(request: car_pb.Car, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    deleteCar(request: car_pb.CarRequestId, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllCar(request: car_pb.Empty, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllCar(request: car_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAllCar(request: car_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class CarServiceClient extends grpc.Client implements ICarServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createCar(request: car_pb.CarDTO, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public createCar(request: car_pb.CarDTO, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public createCar(request: car_pb.CarDTO, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public getCar(request: car_pb.CarRequestId, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public getCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public getCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public getAllCar(request: car_pb.Empty, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    public getAllCar(request: car_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    public getAllCar(request: car_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.CarList) => void): grpc.ClientUnaryCall;
    public updateCar(request: car_pb.Car, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public updateCar(request: car_pb.Car, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public updateCar(request: car_pb.Car, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Car) => void): grpc.ClientUnaryCall;
    public deleteCar(request: car_pb.CarRequestId, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteCar(request: car_pb.CarRequestId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllCar(request: car_pb.Empty, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllCar(request: car_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAllCar(request: car_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: car_pb.Empty) => void): grpc.ClientUnaryCall;
}
