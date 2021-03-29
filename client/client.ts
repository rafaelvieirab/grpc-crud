import { credentials } from '@grpc/grpc-js'

import { CarServiceClient } from '../protobuffers/car_grpc_pb';
import {addressClient} from '../config/url';

const client = new CarServiceClient(addressClient, credentials.createInsecure());
export default client;
