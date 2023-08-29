import {
  useNowMoviesQuery,
  usePopularMoviesQuery,
  useTopMoviesQuery,
  useUpcomingMoviesQuery,
} from "../api/moviesApi"
import { MovieItem } from "../item/MovieItem"
import { Loader } from "../../../components/Loader/Loader"
export const MovieList = () => {
  const {
    data: nowMovies,
    isLoading: isLoading1,
    isFetching: isFetching1,
  } = useNowMoviesQuery()
  const {
    data: popularMovies,
    isLoading: isLoading2,
    isFetching: isFetching2,
  } = usePopularMoviesQuery()
  const {
    data: topMovies,
    isLoading: isLoading3,
    isFetching: isFetching3,
  } = useTopMoviesQuery()
  const {
    data: upcomingMovies,
    isLoading: isLoading4,
    isFetching: isFetching4,
  } = useUpcomingMoviesQuery()
  if (
    isLoading1 ||
    isFetching1 ||
    isLoading2 ||
    isFetching2 ||
    isLoading3 ||
    isFetching3 ||
    isLoading4 ||
    isFetching4
  ) {
    return <Loader />
  }
  return (
    <div className="flex flex-col gap-2">
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Now Playing Movies
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {nowMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Top-Rated Movies
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {topMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Popular Movies
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {popularMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </span>
      <span>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          Upcoming Movies
        </div>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-2 p-2">
          {upcomingMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </span>
    </div>
  )
}
