import { credentials } from '@grpc/grpc-js'

import { CarServiceClient } from './protobuffer/car_grpc_pb';
import { ADDRESS } from './config/config';

const stubClient = new CarServiceClient(ADDRESS, credentials.createInsecure());

export default stubClient;