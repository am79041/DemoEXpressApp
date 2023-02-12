import fetch from "node-fetch";
import { S3 } from "./client.js";

let batchTrends = [];

export const fetchTrends = async (places) => {
  const promises = places.map(async (place) => {
    const trendsOfThePlace = await (
      await fetch(
        `https://api.twitter.com/1.1/trends/place.json?id=${place.woeid}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      )
    ).json();
    /* S3 Bucket operations */
    let countryID;
    if (place.woeid === 1) countryID = "100";
    else countryID = String(place.woeid);
    S3.putObject(
      {
        Bucket: countryID,
        Key: new Date().toLocaleString(),
        Body: JSON.stringify(trendsOfThePlace[0].trends),
      },
      (err, data) => err && console.log(err)
    );
    /*EOF */
    return { [place.woeid]: trendsOfThePlace[0].trends };
  });
  try {
    batchTrends = await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
  return batchTrends;
};
