import { useParams } from "react-router-dom"
import {
  useSeriesImagesQuery,
  useSeriesInfoQuery,
  useSimilarSeriesQuery,
  useRecommendedSeriesQuery,
} from "../api/seriesApi"
import { Image } from "../../../components/Image/Image"
import { SeriesActorsList } from "../../actors/list/SeriesActorsList"
import { SeasonItem } from "../item/SeasonItem"
import { SeriesItem } from "../item/SeriesItem"
import { Loader } from "../../../components/Loader/Loader"
export const SeriesInfo = () => {
  const { id } = useParams()
  const {
    data: series,
    isLoading: isSeriesLoading,
    isFetching: isSeriesFetching,
  } = useSeriesInfoQuery(id)
  const {
    data: images,
    isLoading: isImagesLoading,
    isFetching: isImagesFetching,
  } = useSeriesImagesQuery(id)
  const {
    data: simSeries,
    isLoading: isSimSeriesLoading,
    isFetching: isSimSeriesFetching,
  } = useSimilarSeriesQuery(id)
  const {
    data: recSeries,
    isLoading: isRecSeriesLoading,
    isFetching: isRecSeriesFetching,
  } = useRecommendedSeriesQuery(id)
  if (
    isSeriesLoading ||
    isSeriesFetching ||
    isImagesLoading ||
    isImagesFetching ||
    isSimSeriesLoading ||
    isSimSeriesFetching ||
    isRecSeriesLoading ||
    isRecSeriesFetching
  ) {
    return <Loader />
  }
  return (
    <span className="bg-[#292f33]">
      <div
        style={
          series?.backdrop_path
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original${series?.backdrop_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <span
          style={{ backdropFilter: "brightness(50%)" }}
          className="flex flex-col gap-2 items-start pt-8 md:pt-80 p-6 pb-8 md:pb-16 text-[#f5f5f1]"
        >
          <span className="bg-[#8c8c8c83] text-xs md:text-sm p-1 rounded-md">
            {series?.status}
          </span>
          <span className="text-3xl md:text-5xl font-semibold py-4">
            {series?.name}
          </span>
          <span className="text-lg md:text-2xl font-semibold py-4">
            {series?.tagline}
          </span>
          <span className="w-[70%] md:w-[45%] text-xs md:text-sm">
            {series?.overview}
          </span>
        </span>
      </div>
      <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
        Backdrops
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
          {images?.map((image: any) => (
            <Image key={image?.file_path} image={image?.file_path} />
          ))}
        </div>
      </div>
      <SeriesActorsList id={series?.id} />
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          All Seasons of <span className="text-[#E50914]">{series?.name}</span>
          <div className="flex gap-2 p-2 overflow-x-scroll">
            {series?.seasons.map((season) => (
              <SeasonItem
                key={season.id}
                seriesId={series.id}
                season={season}
              />
            ))}
          </div>
        </div>
      </span>
      <span className={!simSeries?.length ? "hidden" : "flex"}>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Similar to <span className="text-[#E50914]">{series?.name}</span>
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {simSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
      <span className={!recSeries?.length ? "hidden" : "flex flex-col"}>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Recommended Series
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {recSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </div>
      </span>
    </span>
  )
}
