import fetch from "node-fetch";
import "dotenv/config";
import { s3 } from "../client";

let batchTrends: BatchTrendsProps[] = [];

export const fetchTrends = async (places: PlaceProps[]) => {
  const promises = places.map(async (place) => {
    const trendsByPlace: TrendsMatch[] = (await (
      await fetch(
        `https://api.twitter.com/1.1/trends/place.json?id=${place.woeid}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      )
    ).json()) as TrendsMatch[];
    s3.putObject(
      {
        Bucket: String(place.woeid),
        Key: new Date().toUTCString(),
        Body: JSON.stringify(trendsByPlace[0].trends),
      },
      (err, data) =>
        err ? console.log("Error: ", err) : console.log("Success: ", data)
    );
    return { [place.woeid]: trendsByPlace[0].trends };
  });

  try {
    batchTrends = await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
  return batchTrends;
};
