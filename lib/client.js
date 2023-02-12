import AWS from "aws-sdk";
import "dotenv/config";

const ENV = process.env;
export const S3 = new AWS.S3({
  region: ENV.REGION,
  endpoint: ENV.ENDPOINT,
  credentials: {
    accessKeyId: ENV.ACCESS_KEY,
    secretAccessKey: ENV.SECRET_KEY,
  },
});
