import * as grpc from '@grpc/grpc-js';

import carHandler from './handler';
import { addressServer } from '../config/url';

const server = new grpc.Server();
server.addService(carHandler.service, carHandler.handler);

server.bindAsync(
  addressServer,
  grpc.ServerCredentials.createInsecure(),
  (error: Error | null, PORT: number) => {
    if (error) 
      console.error(error);
    else {
      console.info(`> server listening on ${addressServer} ...`);
      server.start();
    }
  },
);
