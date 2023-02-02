interface PlaceProps {
  country: string;
  woeid: number;
}

interface TrendsProps {
  name: string;
  url: string;
  promoted_content: string;
  query: string;
  tweet_volume: number;
}

interface BatchTrendsProps extends Record<number, TrendsProps[]> {}

interface TrendsMatch {
  trends: TrendsProps[];
}
