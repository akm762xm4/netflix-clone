import { useNowMoviesQuery } from "../../features/movies/api/moviesApi"
import { useNowSeriesQuery } from "../../features/series/api/seriesApi"
import { usePopularActorsQuery } from "../../features/actors/api/actorsApi"
import { MovieItem } from "../../features/movies/item/MovieItem"
import { SeriesItem } from "../../features/series/item/SeriesItem"
import { Loader } from "../Loader/Loader"
import { PopularActorItem } from "../../features/actors/popular/PopularItem"

export const Home = () => {
  const {
    data: nowMovies,
    isLoading: isMovieLoading,
    isFetching: isMovieFetching,
  } = useNowMoviesQuery()
  const {
    data: nowSeries,
    isLoading: isSeriesLoading,
    isFetching: isSeriesFetching,
  } = useNowSeriesQuery()
  const {
    data: actors,
    isLoading: isActorsLoading,
    isFetching: isActorsFetching,
  } = usePopularActorsQuery()
  if (
    isMovieLoading ||
    isMovieFetching ||
    isSeriesLoading ||
    isSeriesFetching ||
    isActorsLoading ||
    isActorsFetching
  ) {
    return <Loader />
  }
  return (
    <>
      <div className="flex flex-col gap-8">
        <span>
          <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
            Now Playing Movies
          </div>
          <div className="flex scroll-smooth overflow-x-scroll md:overflow-x-scroll md:overflow-y-hidden gap-2 p-2">
            {nowMovies?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Popular Actors
        </div>
        <div className="grid grid-cols-3 gap-2 p-2 md:grid-cols-5">
          {actors?.slice(0, 6).map((actor: any) => (
            <PopularActorItem key={actor?.id} actor={actor} />
          ))}
        </div>
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
      </div>
    </>
  )
}
