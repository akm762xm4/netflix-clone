import { useParams } from "react-router-dom";
import { useSearchAllQuery } from "./searchApi";
import { Loader } from "../../components/Loader";
import { MovieItem } from "../movies/MovieItem";
import { SeriesItem } from "../series/SeriesItem";
import { NoSearchRelated } from "../../components/Error/NoSearchRelated";
import { Section } from "../../components/Section";
import { BackButton } from "../../components/BackButton";
import { ActorItem } from "../actors/ActorItem";
export const Results = () => {
  const { q } = useParams();
  const { data: results, isLoading, isFetching } = useSearchAllQuery(q);

  if (
    results?.movies.length === 0 &&
    results?.tv.length === 0 &&
    results?.actors.length === 0
  ) {
    return <NoSearchRelated q={q} />;
  }
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div className="md:p-6 p-2">
      <BackButton />
      <Section title={`'${q}' in movies`} isBackButton>
        {results?.movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>

      <Section title={`'${q}' in series`}>
        {results?.tv.map((series) => (
          <SeriesItem key={series.id} seriesItem={series} />
        ))}
      </Section>

      <Section title={`${q} in actor`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {results?.actors?.map((actor) => (
            <ActorItem key={actor.id} actor={actor} />
          ))}
        </div>
      </Section>
    </div>
  );
};
