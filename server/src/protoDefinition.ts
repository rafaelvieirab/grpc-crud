import { loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const PROTO_PATH = "./proto/car.proto";

var packageDefinition = loadSync(
  PROTO_PATH, 
  {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
  }
);

const carsProto = loadPackageDefinition(packageDefinition);

export default carsProto