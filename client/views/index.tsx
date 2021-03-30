import React from 'react';
import { ServiceError } from '@grpc/grpc-js';

import Wrraper from './wrapper';
import Form from './Form';

import client from '../client';
import { Car, CarDTO, CarRequestId, Empty } from '../../protobuffers/car_pb';

import style from './styles/index';

interface Props {
	carsList: Car[];
}

interface CarsParams {
	id?: string;
	name: string;
	brand: string;
	manufactureYear: number;
	modelYear: number;
	price: number;
}

interface StateParams {
	carsList: Car[];
	carSelected: Car;
	showForm: boolean;
}

export default class extends React.Component<Props, StateParams> {
	carsList: Car;

	constructor(props: Props) {
		super(props);
		this.state = {
			carsList: props.carsList,
			carSelected: new Car(),
			showForm: false
		};
	}

	deleteAllCar() {
		console.log("asdsd")
		client.deleteAllCar(new Empty, (error: ServiceError | null, response: Empty) => {
			if (error)
				console.error('Error: ', error);
			this.setState({
				carsList: []
			})
		})
	}

	openForm(car: Car) {
		this.setState({
			carsList: [
				new Car(),
				new Car()
			]
		})
		this.setState({ carSelected: car });
		this.setState({ showForm: true });
		document.body.addEventListener("click", this.closeForm);
	}

	closeForm() {
		this.setState({ carSelected: new Car() });
		this.setState({ showForm: false });
		document.body.removeEventListener("click", this.closeForm);
	}

	createCar(params: CarsParams) {
		const carDTO = new CarDTO()
			.setName(params.name)
			.setBrand(params.brand)
			.setManufactureyear(params.manufactureYear)
			.setModelyear(params.modelYear)
			.setPrice(params.price)

		client.createCar(carDTO, (error: ServiceError | null, response: Car) => {
			if (error)
				console.error('Erro: ', error);
			else {
				console.info(`Car created successfully: ${response}`);
				this.setState({
					carsList: [
						... this.state.carsList,
						response
					]
				})
			}
		});
	}

	updateCar(params: CarsParams) {
		const carUpdated = new Car()
			.setId(params.id || '')
			.setName(params.name)
			.setBrand(params.brand)
			.setManufactureyear(params.manufactureYear)
			.setModelyear(params.modelYear)
			.setPrice(params.price)

		client.updateCar(carUpdated, (error: ServiceError | null, response: Car) => {
			if (error)
				console.error('Erro: ', error);
			else {
				console.info(`Car updated successfully: ${response}`);
				const listFiltered = this.state.carsList.filter(car => car.getId() !== carUpdated.getId());
				this.setState({
					carsList: [
						...listFiltered,
						response
					]
				})
			}
		});
	}

	deleteCarById(id: string) {
		const carRequestId = new CarRequestId().setId(id);

		client.deleteCar(carRequestId, (error: ServiceError | null, response: Empty) => {
			if (error)
				console.error('Error: ', error);
			else {
				console.info(`Car deleted successfully.......`);
				const listFiltered = this.state.carsList.filter(car => car.getId() !== id);
				this.setState({
					carsList: listFiltered
				})
			}
		});
	}

	setShowForm() {
		this.setState({ showForm: !this.state.showForm })
	}

	render() {
		return (
			<Wrraper>
				<body style={style.body}>
					<div style={style.main}>
						<table style={style.table}>
							<caption style={style.caption}>Todos os carros registrados</caption>
							<thead style={style.thead}>
								<tr style={style.tr}>
									<th style={style.th}>Nome</th>
									<th style={style.th}>Marca</th>
									<th style={style.th}>Ano de Fabricação</th>
									<th style={style.th}>Ano do Modelo</th>
									<th style={style.th}>Preço</th>
									<th style={style.th} colSpan={2}>Ações</th>
								</tr>
							</thead>
							<tbody style={style.tbody} >
								{this.state.carsList.map(car => {
									return (
										<tr key={car.getId()} style={style.tr} >
											<td style={style.td} >{car.getName()}</td>
											<td style={style.td} >{car.getBrand()}</td>
											<td style={style.td} >{car.getManufactureyear()}</td>
											<td style={style.td} >{car.getModelyear()}</td>
											<td style={style.td} >{car.getPrice()}</td>
											<td style={style.td} >
												<button type="button" onClick={() => this.openForm(car)} style={style.btnEdit} >
													<img src="./assets/edit.svg" alt="Edit" style={style.icon} />
												</button>
											</td>
											<td style={style.td} >
												<button type="button" onClick={() => { this.deleteCarById(car.getId()) }} style={style.btnDelete} >
													<img src="./assets/delete.svg" alt="Delete" style={style.icon} />
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
							<button type="button" id="btnDelete" onClick={this.deleteAllCar} style={style.btnDeleteAll}>
								Deletar Todos
        			</button>
							<button type="button" id="btnCreate" onClick={() => { this.openForm(new Car()) }} style={style.btnCreate}>
								Novo Carro
        			</button>
						</div>
					</div>
					{
						(this.state.showForm) && (
							<Form
								car={this.state.carSelected}
								callbackCreateCar={this.createCar}
								callbackUpdateCar={this.updateCar}
								setShow={this.setShowForm}
							/>
						)
					}
				</body>
			</Wrraper>
		);
	}
}