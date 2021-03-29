import React from 'react';

import Wrraper from './wrapper';
import client from '../client';
import { Empty } from '../../protobuffers/car_pb';
import { ServiceError } from '@grpc/grpc-js';

interface Props {
	carsList: CarsParams[];
}

interface CarsParams {
	getId: Function;
	getName: Function;
	getBrand: Function;
	getManufactureYear: Function;
	getModelYear: Function;
	getPrice: Function;
}

export default class extends React.Component<Props> {
	private carsList: CarsParams[];

	constructor(props: Props) {
		super(props);
		this.carsList = props.carsList;
	}

	private deleteAllCar() {
		client.deleteAllCar(new Empty, (error: ServiceError | null, response: Empty) => {
			if (error) {
        console.error('Error: ', error);
      }
			this.carsList = []
      // setCarsList([]);
		})
	}
	
	render() {
		return (
			<Wrraper>
				<div className="app">
					<table className="">
						<thead className="">
							<tr>
								<th>Nome</th>
								<th>Marca</th>
								<th>Ano de Fabricação</th>
								<th>Ano do Modelo</th>
								<th>Preço</th>
								<th colSpan={2}>Ações</th>
							</tr>
						</thead>
						<tbody className="">
							{this.carsList.map(car => {
								return (
									<tr key={car.getId()}>
										<td>{car.getName()}</td>
										<td>{car.getBrand()}</td>
										<td>{car.getManufactureYear()}</td>
										<td>{car.getModelYear()}</td>
										<td>{car.getPrice()}</td>
										<td>
											<button type="button">
												<img src="./assets/edit.svg" alt="Edit" />
											</button>
										</td>
										<td>
											<button type="button">
												<img src="./assets/delete.svg" alt="Delete" />
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div id="footer">
						{/* <button type="button" data-toggle="modal" data-target="#form-create-car">
							Create Car
						</button> */}
						<button type="button" onClick={deleteAllCar}>
							Deletar Todos
        		</button>
						<button type="button">
							Novo Carro
        		</button>
					</div>
				</div>
			</Wrraper>
		);
	}
}