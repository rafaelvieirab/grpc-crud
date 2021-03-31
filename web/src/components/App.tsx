import React, { useEffect, useState } from 'react';
import { ServiceError } from '@grpc/grpc-js';

import { Car, CarDTO, CarList, CarRequestId, Empty } from '../protobuffer/car_pb';
import stubClient from '../stubClient';
import Form from './Form';

// @ts-ignore
import './App.css';
import EditIcon from '../assets/edit.svg';
import DeleteIcon from '../assets/delete.svg';

interface CarsParams {
  id?: string;
  name: string;
  brand: string;
  manufactureYear: number;
  modelYear: number;
  price: number;
}

export default function App() {
  const [carSelected, setCarSelected] = useState<Car>(new Car());
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    stubClient.getAllCar(new Empty(), (error: ServiceError | null, response: CarList) => {
      console.error('Error: ', error);
      console.info(`All cars fetched successfully:\n ${response}`);
      setCarsList(response.getCarsList());
      return response.getCarsList();
    });
  }, []);

  function openForm(car: Car) {
    setCarSelected(car);
    setShowForm(true);
    document.body.addEventListener("click", closeForm);
  }

  function closeForm() {
    setCarSelected(new Car());
    setShowForm(false);
    document.body.removeEventListener("click", closeForm);
  }

  function createCar(params: CarsParams) {
    const carDTO = new CarDTO()
      .setName(params.name)
      .setBrand(params.brand)
      .setManufactureyear(params.manufactureYear)
      .setModelyear(params.modelYear)
      .setPrice(params.price)

    stubClient.createCar(carDTO, (error: ServiceError | null, response: Car) => {
      if (error)
        console.error('Erro: ', error);
      else {
        console.info(`Car created successfully: ${response}`);
        setCarsList([
          ...carsList,
          response
        ])
      }
    });
  }

  function updateCar(params: CarsParams) {
    const carUpdated = new Car()
      .setId(params.id || '')
      .setName(params.name)
      .setBrand(params.brand)
      .setManufactureyear(params.manufactureYear)
      .setModelyear(params.modelYear)
      .setPrice(params.price)

    stubClient.updateCar(carUpdated, (error: ServiceError | null, response: Car) => {
      if (error)
        console.error('Erro: ', error);
      else {
        console.info(`Car updated successfully: ${response}`);
        const listFiltered = carsList.filter(car => car.getId() === carUpdated.getId());
        setCarsList([
          ...listFiltered,
          response
        ]);
      }
    });
  }

  function deleteCarById(id: string) {
    const carRequestId = new CarRequestId().setId(id);

    stubClient.deleteCar(carRequestId, (error: ServiceError | null, response: Empty) => {
      if (error) {
        console.error('Error: ', error);
        return error;
      }
      else {
        console.info(`Car deleted successfully.......`);
        const listFiltered = carsList.filter(car => car.getId() === id);
        setCarsList(listFiltered);
      }
    });
  }

  function deleteAllCar() {
    stubClient.deleteAllCar(new Empty(), (error: ServiceError | null, response: Empty) => {
      if (error)
        console.error('Error: ', error);
      else
        setCarsList([]);
    })
  }
  return (
    <main>
      <div id="main">
        <table>
          <caption>Todos os carros registrados</caption>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Ano de Fabricação</th>
              <th>Ano do Modelo</th>
              <th>Preço</th>
              <th colSpan={2}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {carsList.map(car => {
              return (
                <tr key={car.getId()}>
                  <td>{car.getName()}</td>
                  <td>{car.getBrand()}</td>
                  <td>{car.getManufactureyear()}</td>
                  <td>{car.getModelyear()}</td>
                  <td>{`R$ ${car.getPrice().toFixed(2)}`}</td>
                  <td>
                    <button type="button" onClick={() => openForm(car)}>
                      <img src={EditIcon} alt="Edit" />
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => { deleteCarById(car.getId()) }} >
                      <img src={DeleteIcon} alt="Delete" />
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div id="footer">
          {/* <button type="button" data-toggle="modal" data-target="#form-create-car">
								Create Car
							</button> */}
          <button type="button" id="btnDelete" onClick={deleteAllCar}>
            Deletar Todos
        	</button>
          <button type="button" id="btnCreate" onClick={() => { openForm(new Car()) }}>
            Novo Carro
        	</button>
        </div>
      </div>
      {
        (showForm) && (
          <Form
            car={carSelected}
            callbackCreateCar={createCar}
            callbackUpdateCar={updateCar}
            closeForm={closeForm}
          />
        )
      }
    </main>
  )
}
