import { Empty } from "../protobuffers/car_pb";
import client from "./client";

export function getAll(req: any, res: any) {
  client.getAllCar(new Empty, (error, response) => {
    console.info('\nGet All Cars Registereds')
    if (error) {
      console.error('Error: ', error);
    } else {
      res.render('index', {carsList: response.getCarsList()});
    }
  })
}