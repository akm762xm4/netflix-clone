import {
  useNowMoviesQuery,
  usePopularMoviesQuery,
  useTopMoviesQuery,
  useUpcomingMoviesQuery,
} from "./moviesApi";
import { MovieItem } from "./MovieItem";
import { Loader } from "../../components/Loader";
import { Section } from "../../components/Section";

export const MovieList = () => {
  const {
    data: nowMovies,
    isLoading: isLoading1,
    isFetching: isFetching1,
  } = useNowMoviesQuery();
  const {
    data: popularMovies,
    isLoading: isLoading2,
    isFetching: isFetching2,
  } = usePopularMoviesQuery();
  const {
    data: topMovies,
    isLoading: isLoading3,
    isFetching: isFetching3,
  } = useTopMoviesQuery();
  const {
    data: upcomingMovies,
    isLoading: isLoading4,
    isFetching: isFetching4,
  } = useUpcomingMoviesQuery();

  const isLoading =
    isLoading1 ||
    isFetching1 ||
    isLoading2 ||
    isFetching2 ||
    isLoading3 ||
    isFetching3 ||
    isLoading4 ||
    isFetching4;

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col md:gap-6 md:p-6 p-2">
      <Section title="Now Playing Movies">
        {nowMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>

      <Section title="Top-Rated Movies">
        {topMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>

      <Section title="Popular Movies">
        {popularMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>

      <Section title="Upcoming Movies">
        {upcomingMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>
    </div>
  );
};
