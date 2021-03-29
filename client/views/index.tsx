import React from 'react';
import Wrraper from './wrapper';

// interface CarsParams {
// 	id?: string;
// 	name: string;
// 	brand: string;
// 	manufactureYear: number;
// 	modelYear: number;
// 	price: number;
// }

interface Props {
	cars: CarsParams;
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
	// private carsList: CarsParams[];
	// constructor(props:CarsParams[]) {
	// 	super(props);
	// 	this.carsList = props;
	// }
	render() {
		console.log("this.props")
		console.info(this.props)
		console.log("this.props")
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
							{/* {
							this.carsList.map(car => {
								return (
									<tr key={car.getId()}>
										<td>{car.getName()}</td>
										<td>{car.getBrand()}</td>
										<td>{car.getManufactureYear()}</td>
										<td>{car.getModelYear()}</td>
										<td>{car.getPrice()}</td>
										<td>
											<button type="button">
												<img src="" alt="Edit" />
											</button>
										</td>
										<td>
											<button type="button">
												<img src="" alt="Delete" />
											</button>
										</td>
									</tr>
								);
							})} */}
						</tbody>
					</table>
				</div>
			</Wrraper>
		);
	}
}
/*
{cars.map(car => {
								return (
									<tr key={car.id}>
										<td>{car.name}</td>
										<td>{car.brand}</td>
										<td>{car.manufactureYear}</td>
										<td>{car.modelYear}</td>
										<td>{car.price}</td>
										<td>
											<button type="button">
												<img src="" alt="Edit" />
											</button>
										</td>
										<td>
											<button type="button">
												<img src="" alt="Delete" />
											</button>
										</td>
									</tr>
								);
							})}
*/