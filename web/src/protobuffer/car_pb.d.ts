// package: proto
// file: car.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Car extends jspb.Message { 
    getId(): string;
    setId(value: string): Car;
    getName(): string;
    setName(value: string): Car;
    getBrand(): string;
    setBrand(value: string): Car;
    getManufactureyear(): number;
    setManufactureyear(value: number): Car;
    getModelyear(): number;
    setModelyear(value: number): Car;
    getPrice(): number;
    setPrice(value: number): Car;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Car.AsObject;
    static toObject(includeInstance: boolean, msg: Car): Car.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Car, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Car;
    static deserializeBinaryFromReader(message: Car, reader: jspb.BinaryReader): Car;
}

export namespace Car {
    export type AsObject = {
        id: string,
        name: string,
        brand: string,
        manufactureyear: number,
        modelyear: number,
        price: number,
    }
}

export class CarDTO extends jspb.Message { 
    getName(): string;
    setName(value: string): CarDTO;
    getBrand(): string;
    setBrand(value: string): CarDTO;
    getManufactureyear(): number;
    setManufactureyear(value: number): CarDTO;
    getModelyear(): number;
    setModelyear(value: number): CarDTO;
    getPrice(): number;
    setPrice(value: number): CarDTO;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CarDTO.AsObject;
    static toObject(includeInstance: boolean, msg: CarDTO): CarDTO.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CarDTO, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CarDTO;
    static deserializeBinaryFromReader(message: CarDTO, reader: jspb.BinaryReader): CarDTO;
}

export namespace CarDTO {
    export type AsObject = {
        name: string,
        brand: string,
        manufactureyear: number,
        modelyear: number,
        price: number,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class CarRequestId extends jspb.Message { 
    getId(): string;
    setId(value: string): CarRequestId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CarRequestId.AsObject;
    static toObject(includeInstance: boolean, msg: CarRequestId): CarRequestId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CarRequestId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CarRequestId;
    static deserializeBinaryFromReader(message: CarRequestId, reader: jspb.BinaryReader): CarRequestId;
}

export namespace CarRequestId {
    export type AsObject = {
        id: string,
    }
}

export class CarList extends jspb.Message { 
    clearCarsList(): void;
    getCarsList(): Array<Car>;
    setCarsList(value: Array<Car>): CarList;
    addCars(value?: Car, index?: number): Car;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CarList.AsObject;
    static toObject(includeInstance: boolean, msg: CarList): CarList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CarList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CarList;
    static deserializeBinaryFromReader(message: CarList, reader: jspb.BinaryReader): CarList;
}

export namespace CarList {
    export type AsObject = {
        carsList: Array<Car.AsObject>,
    }
}
