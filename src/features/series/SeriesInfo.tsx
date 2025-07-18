import { useParams } from "react-router-dom";
import {
  useSeriesImagesQuery,
  useSeriesInfoQuery,
  useSimilarSeriesQuery,
  useRecommendedSeriesQuery,
  useSeriesActorsQuery,
} from "./seriesApi";
import { Image } from "../../components/Image";
import { SeasonItem } from "./SeasonItem";
import { SeriesItem } from "./SeriesItem";
import { Loader } from "../../components/Loader";
import { BackButton } from "../../components/BackButton";
import { Section } from "../../components/Section";
import { ActorItem } from "../actors/ActorItem";
export const SeriesInfo = () => {
  const { id } = useParams();
  const {
    data: series,
    isLoading: isSeriesLoading,
    isFetching: isSeriesFetching,
  } = useSeriesInfoQuery(id);
  const {
    data: images,
    isLoading: isImagesLoading,
    isFetching: isImagesFetching,
  } = useSeriesImagesQuery(id);
  const {
    data: simSeries,
    isLoading: isSimSeriesLoading,
    isFetching: isSimSeriesFetching,
  } = useSimilarSeriesQuery(id);
  const {
    data: recSeries,
    isLoading: isRecSeriesLoading,
    isFetching: isRecSeriesFetching,
  } = useRecommendedSeriesQuery(id);

  const {
    data: actors,
    isLoading: isActorsLoading,
    isFetching: isActorsFetching,
  } = useSeriesActorsQuery(series?.id!);

  if (
    isSeriesLoading ||
    isSeriesFetching ||
    isImagesLoading ||
    isImagesFetching ||
    isSimSeriesLoading ||
    isSimSeriesFetching ||
    isRecSeriesLoading ||
    isRecSeriesFetching ||
    isActorsFetching ||
    isActorsLoading
  ) {
    return <Loader />;
  }
  return (
    <div className="bg-[#292f33]">
      <BackButton />
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
        <Section title={`All Seasons of '${series?.name}'`}>
          {series?.seasons.map((season) => (
            <SeasonItem key={season.id} seriesId={series.id} season={season} />
          ))}
        </Section>

        <Section title={`Similar to '${series?.name}'`}>
          {simSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </Section>

        <Section title="Recommended Series">
          {" "}
          {recSeries?.map((seriesItem) => (
            <SeriesItem key={seriesItem?.id} seriesItem={seriesItem} />
          ))}
        </Section>
      </div>
    </div>
  );
};
