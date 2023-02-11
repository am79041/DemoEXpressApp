import sdk from "aws-sdk";
import "dotenv/config";

export const s3 = new sdk.S3({
  endpoint: "f8b8.ldn.idrivee2-33.com",
  region: "gb-ldn",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY as string,
    secretAccessKey: process.env.SECRET_KEY as string,
  },
});
