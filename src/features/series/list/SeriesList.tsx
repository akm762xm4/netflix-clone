import { Loader } from "../../../components/Loader/Loader"
import {
  useNowSeriesQuery,
  usePopularSeriesQuery,
  useTopSeriesQuery,
  useUpcomingSeriesQuery,
} from "../api/seriesApi"
import { SeriesItem } from "../item/SeriesItem"

export const SeriesList = () => {
  const {
    data: nowSeries,
    isLoading: isLoading1,
    isFetching: isFetching1,
  } = useNowSeriesQuery()
  const {
    data: popularSeries,
    isLoading: isLoading2,
    isFetching: isFetching2,
  } = usePopularSeriesQuery()
  const {
    data: topSeries,
    isLoading: isLoading3,
    isFetching: isFetching3,
  } = useTopSeriesQuery()
  const {
    data: upcomingSeries,
    isLoading: isLoading4,
    isFetching: isFetching4,
  } = useUpcomingSeriesQuery()
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
    return <Loader />
  }
  return (
    <>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Now Playing TV-Series
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {nowSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Popular TV-Series
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {popularSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Top-Rated TV-Series
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {topSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Upcoming TV-Series
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {upcomingSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
    </>
  )
}
