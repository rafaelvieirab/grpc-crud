import * as grpc from '@grpc/grpc-js';

import { protoIndex } from './proto';
import carHandler from './handler';
import { hostUrl } from './config/config';

protoIndex();

const server = new grpc.Server();
server.addService(carHandler.service, carHandler.handler);

server.bindAsync(
  hostUrl,
  grpc.ServerCredentials.createInsecure(),
  (error: Error | null, PORT: number) => {
    if (error)
      console.error('deu erro');
    else{
      console.info(`> gRPC listening on ${hostUrl} ...`);
      server.start();
    }
  }
);
