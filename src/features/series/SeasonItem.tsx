import { SeasonsBrief } from "./";
import { useState } from "react";
import movieLogo from "../../assets/movie.png";

interface PropTypes {
  season: SeasonsBrief;
  seriesId: any;
}

export const SeasonItem = ({ season }: PropTypes) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const posterPath = season.poster_path;
  const fullImg = `https://image.tmdb.org/t/p/w780${posterPath}`;
  const blurImg = `https://image.tmdb.org/t/p/w92${posterPath}`;
  const showFallback = imgError || !posterPath;

  return (
    <div className="flex flex-col shrink-0">
      <span className="flex justify-center relative w-48 h-72">
        {/* Blur background */}
        {!imgLoaded && !showFallback && (
          <img
            src={blurImg}
            alt="blur"
            className="absolute w-full h-full object-cover blur-md scale-105"
          />
        )}

        {/* Actual Image */}
        <img
          src={showFallback ? movieLogo : fullImg}
          alt={season.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-48 h-72 object-cover rounded-md transition-opacity duration-500 ease-in-out ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Episodes Badge */}
        <span className="absolute bottom-0 font-normal text-sm md:text-md bg-[#0e0e0ec8] p-2 rounded-md mb-2 text-[#F5F5F1]">
          {season.episode_count} Episodes
        </span>
      </span>

      {/* Name */}
      <div className="text-center text-[#F5F5F1] font-normal text-lg mt-2">
        {season.name}
      </div>
    </div>
  );
};
