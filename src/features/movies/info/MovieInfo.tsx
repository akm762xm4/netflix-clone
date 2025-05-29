import { useParams } from "react-router-dom";
import {
  useGetImagesQuery,
  useGetMovieQuery,
  useSimilarMoviesQuery,
  useRecommendedMoviesQuery,
} from "../api/moviesApi";
import { MovieStats } from "./Movies.Stats";
import { Loader } from "../../../components/Loader/Loader";
import { ActorsList } from "../../actors/list/MovieActorsList";
import { Image } from "../../../components/Image/Image";
import { MovieItem } from "../item/MovieItem";
import "./MovieInfo.css";

export const MoviesInfo = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading: isMovieLoading,
    isFetching: isMovieFetching,
  } = useGetMovieQuery(id);
  // movie && console.log("Movie::", movie)

  const {
    data: images,
    isLoading: isImageLoading,
    isFetching: isImageFetching,
  } = useGetImagesQuery(id);

  const {
    data: movies,
    isLoading: isMoviesLoading,
    isFetching: isMoviesFetching,
  } = useSimilarMoviesQuery(id);

  const {
    data: recMovies,
    isLoading: isRecMoviesLoading,
    isFetching: isRecMoviesFetching,
  } = useRecommendedMoviesQuery(id);
  if (
    isMovieLoading ||
    isMovieFetching ||
    isImageLoading ||
    isImageFetching ||
    isMoviesLoading ||
    isMoviesFetching ||
    isRecMoviesLoading ||
    isRecMoviesFetching
  ) {
    return <Loader />;
  }

  return (
    <span className="bg-[#292f33]">
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          })`,
        }}
      >
        <span className="movie-backdrop-overlay flex flex-col gap-2 items-start pt:8 md:pt-80 p-6 pb-8 md:pb-16 text-[#f5f5f1]">
          <span className="bg-[#8c8c8c83] text-xs md:text-sm p-1 rounded-md">
            {movie?.status}
          </span>
          <span className="text-3xl md:text-5xl font-semibold py-4">
            {movie?.original_title}
          </span>
          <span className="text-lg md:text-2xl font-semibold py-4">
            {movie?.tagline}
          </span>
          <span className="w-[70%] md:w-[45%] text-xs md:text-sm">
            {movie?.overview}
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
      <ActorsList id={movie?.id} />
      <div className={`${!movies?.length ? "hidden" : "flex"}`}>
        <span>
          <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
            Similar Movies
          </div>
          <div className="flex scroll-smooth overflow-x-scroll md:overflow-x-scroll md:overflow-y-hidden gap-2 p-2">
            {movies?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </span>
      </div>
      <div className={`${!recMovies?.length ? "hidden" : "flex"}`}>
        <span>
          <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
            Recommended Movies
          </div>
          <div className="flex scroll-smooth overflow-x-scroll md:overflow-x-scroll md:overflow-y-hidden gap-2 p-2">
            {recMovies?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </span>
      </div>
      <MovieStats movie={movie} />
    </span>
  );
};
