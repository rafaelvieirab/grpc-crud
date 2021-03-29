// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var car_pb = require('./car_pb.js');

function serialize_proto_Car(arg) {
  if (!(arg instanceof car_pb.Car)) {
    throw new Error('Expected argument of type proto.Car');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Car(buffer_arg) {
  return car_pb.Car.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CarDTO(arg) {
  if (!(arg instanceof car_pb.CarDTO)) {
    throw new Error('Expected argument of type proto.CarDTO');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CarDTO(buffer_arg) {
  return car_pb.CarDTO.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CarList(arg) {
  if (!(arg instanceof car_pb.CarList)) {
    throw new Error('Expected argument of type proto.CarList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CarList(buffer_arg) {
  return car_pb.CarList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CarRequestId(arg) {
  if (!(arg instanceof car_pb.CarRequestId)) {
    throw new Error('Expected argument of type proto.CarRequestId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CarRequestId(buffer_arg) {
  return car_pb.CarRequestId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Empty(arg) {
  if (!(arg instanceof car_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Empty(buffer_arg) {
  return car_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CarServiceService = exports.CarServiceService = {
  createCar: {
    path: '/proto.CarService/CreateCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.CarDTO,
    responseType: car_pb.Car,
    requestSerialize: serialize_proto_CarDTO,
    requestDeserialize: deserialize_proto_CarDTO,
    responseSerialize: serialize_proto_Car,
    responseDeserialize: deserialize_proto_Car,
  },
  getCar: {
    path: '/proto.CarService/GetCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.CarRequestId,
    responseType: car_pb.Car,
    requestSerialize: serialize_proto_CarRequestId,
    requestDeserialize: deserialize_proto_CarRequestId,
    responseSerialize: serialize_proto_Car,
    responseDeserialize: deserialize_proto_Car,
  },
  getAllCar: {
    path: '/proto.CarService/GetAllCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.Empty,
    responseType: car_pb.CarList,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_CarList,
    responseDeserialize: deserialize_proto_CarList,
  },
  updateCar: {
    path: '/proto.CarService/UpdateCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.Car,
    responseType: car_pb.Car,
    requestSerialize: serialize_proto_Car,
    requestDeserialize: deserialize_proto_Car,
    responseSerialize: serialize_proto_Car,
    responseDeserialize: deserialize_proto_Car,
  },
  deleteCar: {
    path: '/proto.CarService/DeleteCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.CarRequestId,
    responseType: car_pb.Empty,
    requestSerialize: serialize_proto_CarRequestId,
    requestDeserialize: deserialize_proto_CarRequestId,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
  deleteAllCar: {
    path: '/proto.CarService/DeleteAllCar',
    requestStream: false,
    responseStream: false,
    requestType: car_pb.Empty,
    responseType: car_pb.Empty,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_Empty,
    responseDeserialize: deserialize_proto_Empty,
  },
};

exports.CarServiceClient = grpc.makeGenericClientConstructor(CarServiceService);
