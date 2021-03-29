import { credentials } from '@grpc/grpc-js'

import { CarServiceClient } from '../protobuffers/car_grpc_pb';
import {addressServer} from '../config/url';

const client = new CarServiceClient(addressServer, credentials.createInsecure());
export default client;
