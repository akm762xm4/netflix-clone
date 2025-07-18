import { Loader } from "../../components/Loader";
import { Section } from "../../components/Section";
import {
  useNowSeriesQuery,
  usePopularSeriesQuery,
  useTopSeriesQuery,
  useUpcomingSeriesQuery,
} from "./seriesApi";
import { SeriesItem } from "./SeriesItem";

export const SeriesList = () => {
  const {
    data: nowSeries,
    isLoading: isLoading1,
    isFetching: isFetching1,
  } = useNowSeriesQuery();
  const {
    data: popularSeries,
    isLoading: isLoading2,
    isFetching: isFetching2,
  } = usePopularSeriesQuery();
  const {
    data: topSeries,
    isLoading: isLoading3,
    isFetching: isFetching3,
  } = useTopSeriesQuery();
  const {
    data: upcomingSeries,
    isLoading: isLoading4,
    isFetching: isFetching4,
  } = useUpcomingSeriesQuery();
  if (
    isLoading1 ||
    isLoading2 ||
    isLoading3 ||
    isLoading4 ||
    isFetching1 ||
    isFetching2 ||
    isFetching3 ||
    isFetching4
  ) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col md:gap-6 gap-3 md:p-6 p-2">
      <Section title="Now Playing TV-Series">
        {nowSeries?.map((seriesItem) => (
          <SeriesItem key={seriesItem.id} seriesItem={seriesItem} />
        ))}
      </Section>

      <Section title="Popular TV-Series">
        {popularSeries?.map((seriesItem) => (
          <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
        ))}
      </Section>

      <Section title="Top-Rated TV-Series">
        {topSeries?.map((seriesItem) => (
          <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
        ))}
      </Section>

      <Section title="Upcoming TV-Series">
        {upcomingSeries?.map((seriesItem) => (
          <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
        ))}
      </Section>
    </div>
  );
};
