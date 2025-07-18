import { useNavigate } from "react-router-dom";
import { SeriesBrief } from "./";
import movieLogo from "../../assets/movie.png";
import { useState } from "react";

interface PropTypes {
  seriesItem: SeriesBrief;
}

export const SeriesItem = ({ seriesItem }: PropTypes) => {
  const navigate = useNavigate();
  const releaseYear = new Date(seriesItem.first_air_date).getFullYear();

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const posterPath = seriesItem.poster_path;
  const fullImg = `https://image.tmdb.org/t/p/w780${posterPath}`;
  const blurImg = `https://image.tmdb.org/t/p/w92${posterPath}`;
  const showFallback = imgError || !posterPath;

  return (
    <div className="group items-center select-none flex flex-col shrink-0 bg-transparent md:bg-[#1a1a1a88] rounded-xl md:p-2 p-0 transition-transform hover:scale-[1.015] duration-300">
      {/* Image Wrapper */}
      <div className="relative overflow-hidden rounded-md w-32 h-48 md:w-60 md:h-84 bg-[#0e0e0e]">
        {!imgLoaded && !showFallback && (
          <img
            src={blurImg}
            alt="blur-preview"
            className="absolute w-full h-full object-cover blur-md scale-105"
          />
        )}

        <img
          src={showFallback ? movieLogo : fullImg}
          alt={seriesItem.name}
          loading="lazy"
          onClick={() => navigate(`/series/${seriesItem.id}`)}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover rounded-md cursor-pointer transition-opacity duration-500 ease-in-out ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Title */}
      <div className="pt-2 hidden md:block text-[#f5f5f1] text-center">
        <button
          onClick={() => navigate(`/series/${seriesItem.id}`)}
          className="hover:underline decoration-[#f5f5f1] text-sm font-medium truncate"
        >
          {seriesItem.name.length > 28
            ? seriesItem.name.slice(0, 24).concat("...")
            : seriesItem.name}{" "}
          ({releaseYear})
        </button>
      </div>
    </div>
  );
};
