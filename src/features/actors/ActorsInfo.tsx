import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetActorQuery,
  useActorImagesQuery,
  useActorMoviesQuery,
} from "./actorsApi";
import { Image } from "../../components/Image";
import { MovieItem } from "../movies/MovieItem";
import { MovieBrief } from "../movies";
import { Loader } from "../../components/Loader";
import { PageNotFound } from "../../components/Error/PageNotFound";
import user2 from "../../assets/user.png";
import { BackButton } from "../../components/BackButton";
import { Section } from "../../components/Section";
export const ActorsInfo = () => {
  const { id } = useParams();
  const {
    data: actor,
    isLoading: isActorLoading,
    isFetching: isActorFetching,
  } = useGetActorQuery(id);
  const {
    data: images,
    isLoading: isImagesLoading,
    isFetching: isImagesFetching,
  } = useActorImagesQuery(id);
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isFetching: isMoviesFetching,
  } = useActorMoviesQuery(id);

  // Inside your component
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const actorImgPath = actor?.profile_path;
  const fullImg = `https://image.tmdb.org/t/p/original${actorImgPath}`;
  const blurImg = `https://image.tmdb.org/t/p/w92${actorImgPath}`;
  const showFallback = imgError || !actorImgPath;

  if (
    isActorLoading ||
    isActorFetching ||
    isImagesLoading ||
    isImagesFetching ||
    isMoviesLoading ||
    isMoviesFetching
  ) {
    return <Loader />;
  }
  if (!actor || !actor.profile_path) {
    return <PageNotFound />;
  }
  return (
    <main className="bg-[#292f33]">
      <BackButton />
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-6">
        {/* Image section with blur + fallback */}
        <div className="relative w-56 h-[330px] rounded-md overflow-hidden shrink-0">
          {!imgLoaded && !showFallback && (
            <img
              src={blurImg}
              alt="blur"
              className="absolute w-full h-full object-cover blur-md scale-105"
            />
          )}
          <img
            src={showFallback ? user2 : fullImg}
            alt={actor.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Bio Details */}
        <div className="text-[#f5f5f1] max-w-3xl space-y-2">
          <span className="bg-[#8c8c8c83] px-2 py-[2px] rounded text-xs md:text-sm inline-block">
            {actor?.known_for_department}
          </span>

          <div className="text-2xl md:text-3xl font-semibold text-[#e50914]">
            {actor?.name}
          </div>

          {actor?.birthday && (
            <div className="text-sm text-gray-300">
              {actor.birthday}
              {actor?.deathday && ` - ${actor.deathday}`}
            </div>
          )}

          <div className="text-sm text-gray-400">
            {actor?.gender === 1 ? "Female" : "Male"}
            {actor?.place_of_birth && `, from ${actor?.place_of_birth}`}
          </div>

          {actor?.biography && (
            <p className="text-sm pt-2 text-[#dcdcdc] leading-relaxed">
              {actor.biography.substring(0, 475)}...
            </p>
          )}

          <div className="text-xs text-gray-500">
            ⭐ Popularity: {actor?.popularity}
          </div>
        </div>
      </div>
      <div className="md:p-6 p-2 md:space-y-8 space-y-4S">
        <Section title={`Photos of ${actor.name}`}>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {images?.map((image: any) => (
              <Image key={image?.file_path} image={image?.file_path} />
            ))}
          </div>
        </Section>

        <Section title={`${actor.name}'s Movies`}>
          {movies?.map((movie: MovieBrief) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Section>
      </div>
    </main>
  );
};
