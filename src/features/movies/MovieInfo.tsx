import { useParams } from "react-router-dom";
import {
  useGetImagesQuery,
  useGetMovieQuery,
  useSimilarMoviesQuery,
  useRecommendedMoviesQuery,
} from "./moviesApi";
import { MovieStats } from "./Movies.Stats";
import { Loader } from "../../components/Loader";
import { Image } from "../../components/Image";
import { MovieItem } from "./MovieItem";
import "./MovieInfo.css";
import { BackButton } from "../../components/BackButton";
import { Section } from "../../components/Section";
import { ActorItem } from "../actors/ActorItem";
import { useGetActorsQuery } from "../actors/actorsApi";

export const MoviesInfo = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading: isMovieLoading,
    isFetching: isMovieFetching,
  } = useGetMovieQuery(id);

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
  const {
    data: actors,
    isLoading: isActorsLoading,
    isFetching: isActorsFetching,
  } = useGetActorsQuery(movie?.id!);
  if (
    isMovieLoading ||
    isMovieFetching ||
    isImageLoading ||
    isImageFetching ||
    isMoviesLoading ||
    isMoviesFetching ||
    isRecMoviesLoading ||
    isRecMoviesFetching ||
    isActorsLoading ||
    isActorsFetching
  ) {
    return <Loader />;
  }

  return (
    <div className="bg-[#292f33]">
      <BackButton />
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
      <div className="md:p-6 p-2 md:space-y-2 ">
        <Section title="Backdrops">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {images?.map((image: any) => (
              <Image key={image?.file_path} image={image?.file_path} />
            ))}
          </div>
        </Section>
        <Section title="Cast">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {actors?.map((actor) => (
              <ActorItem key={actor.id} actor={actor} />
            ))}
          </div>
        </Section>
        {/* <ActorsList id={movie?.id} /> */}
        <Section title="Similar Movies">
          {movies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Section>

        <Section title="Recommended Movies">
          {recMovies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Section>
        <MovieStats movie={movie} />
      </div>
    </div>
  );
};
