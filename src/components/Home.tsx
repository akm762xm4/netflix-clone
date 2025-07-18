import { useNowMoviesQuery } from "../features/movies/moviesApi";
import { useNowSeriesQuery } from "../features/series/seriesApi";
import { usePopularActorsQuery } from "../features/actors/actorsApi";
import { MovieItem } from "../features/movies/MovieItem";
import { SeriesItem } from "../features/series/SeriesItem";
import { Loader } from "./Loader";
import { PopularActorItem } from "../features/actors/PopularItem";
import { Section } from "./Section";

export const Home = () => {
  const {
    data: nowMovies,
    isLoading: isMovieLoading,
    isFetching: isMovieFetching,
  } = useNowMoviesQuery();
  const {
    data: nowSeries,
    isLoading: isSeriesLoading,
    isFetching: isSeriesFetching,
  } = useNowSeriesQuery();
  const {
    data: actors,
    isLoading: isActorsLoading,
    isFetching: isActorsFetching,
  } = usePopularActorsQuery();

  const isLoading =
    isMovieLoading ||
    isMovieFetching ||
    isSeriesLoading ||
    isSeriesFetching ||
    isActorsLoading ||
    isActorsFetching;

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col md:gap-6 gap-3 md:p-6 p-2">
      {/* Now Playing Movies */}
      <Section title="Now Playing Movies">
        {nowMovies?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>

      {/* Popular Actors */}
      <Section title="Popular Actors">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {actors?.slice(0, 6).map((actor) => (
            <PopularActorItem key={actor.id} actor={actor} />
          ))}
        </div>
      </Section>

      {/* Now Playing Series */}
      <Section title="Now Playing TV-Series">
        {nowSeries?.map((seriesItem) => (
          <SeriesItem key={seriesItem.id} seriesItem={seriesItem} />
        ))}
      </Section>
    </div>
  );
};
