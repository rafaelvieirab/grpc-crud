import React, { useEffect, useState } from 'react';

import { credentials, ServiceError } from '@grpc/grpc-js';

import { Car, CarDTO, CarList, CarRequestId, Empty } from './protobuffer/car_pb';
import { CarServiceClient } from './protobuffer/car_grpc_pb';
// import { CreateCar, GetAllCar, UpdateCar, DeleteCar } from './client';
import Form from './form';
import { hostUrl } from './config/config';

import EditIcon from '../public/assets/edit.svg';
import DeleteIcon from '../public/assets/delete.svg';

interface CarsParams {
  id?: string;
  name: string;
  brand: string;
  manufactureYear: number;
  modelYear: number;
  price: number;
}

export default function App() {
  const [carParam, setCarParam] = useState<Car>(new Car());
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const client = new CarServiceClient(hostUrl, credentials.createInsecure());

  useEffect(() => {
    // setCarsList(GetAllCar());
    client.getAllCar(new Empty(), (error: ServiceError | null, response: CarList) => {
      if (error) {
        console.error('Error: ', error);
        return error;
      }
      console.info(`All cars fetched successfully:\n ${response}`);
      setCarsList(response.getCarsList());
      return response.getCarsList();
    });
  }, []);

  function invokeForm(car: Car) {
    setCarParam(car);
    setShowModal(true);
  }

  function createCar(params: CarsParams) {
    const carDTO = new CarDTO()
      .setName(params.name)
      .setBrand(params.brand)
      .setManufactureyear(params.manufactureYear)
      .setModelyear(params.modelYear)
      .setPrice(params.price)

    client.createCar(carDTO, (error: ServiceError | null, response: Car) => {
      if (error) {
        console.error('Erro: ', error);
        return error;
      }
      console.info(`Car created successfully: ${response}`);
      setCarsList([
        ...carsList,
        response
      ])
      return response.toObject();
    });
    // const carCreated = CreateCar(params);
    // if(carCreated && carCreated.getId().length > 0) {
    //   setCarsList([
    //     ...carsList,
    //     carCreated
    //   ]);
    // }
  }

  function updateCar(params: CarsParams) {
    const carUpdated = new Car()
      .setId(params.id || '')
      .setName(params.name)
      .setBrand(params.brand)
      .setManufactureyear(params.manufactureYear)
      .setModelyear(params.modelYear)
      .setPrice(params.price)

    client.updateCar(carUpdated, (error: ServiceError | null, response: Car) => {
      if (error) {
        console.error('Erro: ', error);
        return error;
      }
      console.info(`Car updated successfully: ${response}`);
      const listFiltered = carsList.filter(car => car.getId() === carUpdated.getId());
      setCarsList([
        ...listFiltered,
        response
      ]);
      return response.toObject();
    });
    // const carUpdated = UpdateCar(params);
    // const listFiltered = carsList.filter(car => car.getId() === carUpdated.getId());
    // setCarsList([
    //   ...listFiltered,
    //   carUpdated
    // ]);
  }

  function deleteCar(id: string) {
    const carRequestId = new CarRequestId().setId(id);

    client.deleteCar(carRequestId, (error: ServiceError | null, response: Empty) => {
      if (error) {
        console.error('Error: ', error);
        return error;
      }
      console.info(`Car deleted successfully.......`);
      const listFiltered = carsList.filter(car => car.getId() == id);
      setCarsList([
        ...listFiltered
      ]);
    });
    // DeleteCar(id);
    // const listFiltered = carsList.filter(car => car.getId() == id);
    // setCarsList([
    //   ...listFiltered
    // ]);
  }

  return (
    <div id="main">
      <main>
        <table>
          <caption>All cars registereds</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Manufacture Year</th>
              <th>Model Year</th>
              <th>Price</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              carsList.map(car => {
                (
                  <tr key={car.getId()}>
                    <td>{car.getName()}</td>
                    <td>{car.getBrand()}</td>
                    <td>{car.getManufactureyear()}</td>
                    <td>{car.getModelyear()}</td>
                    <td>{car.getPrice()}</td>
                    <td>
                      <button onClick={() => invokeForm(car)}>
                        <img src={EditIcon} alt="Edit" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => deleteCar(car.getId())}>
                        <img src={DeleteIcon} alt="Delete" />
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>

      <div id="footer">
        {/* <button type="button" data-toggle="modal" data-target="#form-create-car">
          Create Car
        </button> */}
        <button type="button" onClick={() => setShowModal(true)}>
          Create Car
        </button>
      </div>

      {
        (showModal) && (
          <Form car={carParam} callbackCreateCar={createCar} callbackUpdateCar={updateCar} setShow={setShowModal} />
        )
      }

    </div>
  )
}
