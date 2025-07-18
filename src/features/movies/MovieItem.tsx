import { useNavigate } from "react-router-dom";
import movieLogo from "../../assets/movie.png";
import { MovieBrief } from "./";
import { useState } from "react";

interface MovieItemProps {
  movie: MovieBrief;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  const navigate = useNavigate();
  const releaseYear = new Date(movie.release_date).getFullYear();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const posterBase = "https://image.tmdb.org/t/p";
  const fullPoster = `${posterBase}/w780${movie.poster_path}`;
  const blurPoster = `${posterBase}/w92${movie.poster_path}`;
  const showFallback = imgError || !movie.poster_path;

  return (
    <div
      className={`${
        !movie?.backdrop_path || !movie?.poster_path ? "hidden" : "flex"
      } group relative select-none shrink-0 flex-col items-center overflow-hidden md:w-60 w-32 rounded-xl transition-transform hover:scale-[1.03] hover:brightness-105 md:bg-[#564d4d88]`}
    >
      <span className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
        {/* Blurred Preview */}
        {!imgLoaded && !showFallback && (
          <img
            src={blurPoster}
            alt="Loading preview"
            className="absolute inset-0 w-full h-full object-cover blur-md scale-105"
          />
        )}

        <img
          src={showFallback ? movieLogo : fullPoster}
          alt={movie.title}
          loading="lazy"
          onClick={() => navigate(`/movies/${movie.id}`)}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`transition-opacity duration-500 ease-in-out w-full h-full object-cover cursor-pointer rounded-lg ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>

      {/* Title */}
      <span className="pt-2 text-center text-[#f5f5f1] w-full px-2">
        <button
          onClick={() => navigate(`/movies/${movie.id}`)}
          className="hover:underline decoration-[#f5f5f1] md:text-sm text-xs font-medium line-clamp-2"
        >
          {movie.title.length > 28
            ? movie.title.slice(0, 24).concat("...")
            : movie.title}{" "}
          ({releaseYear})
        </button>
        {movie.vote_average && (
          <span className="absolute top-2 left-2 bg-black/70 text-white md:text-xs text-[10px] p-2 py-1 rounded-full z-10">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        )}
      </span>
    </div>
  );
};
