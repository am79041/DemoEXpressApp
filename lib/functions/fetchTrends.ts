import fetch from "node-fetch";

let batchTrends: BatchTrendsProps[] = [];

export const fetchTrends = async (places: PlaceProps[]) => {
  const promises = places.map(async (place) => {
    const trendsByPlace: TrendsMatch[] = await (
      await fetch(
        `https://api.twitter.com/1.1/trends/place.json?id=${place.woeid}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
          },
        }
      )
    ).json();
    return { [place.woeid]: trendsByPlace[0].trends };
  });

  try {
    batchTrends = await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
  return batchTrends;
};
