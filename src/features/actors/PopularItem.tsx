import { useNavigate } from "react-router-dom";
import { ActorBrief } from "./";
import { useState } from "react";
import fallbackImg from "../../assets/movie.png";

interface PropTypes {
  actor: ActorBrief;
}

export const PopularActorItem = ({ actor }: PropTypes) => {
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const posterPath = actor.profile_path;
  const fullImg = `https://image.tmdb.org/t/p/w780${posterPath}`;
  const blurImg = `https://image.tmdb.org/t/p/w92${posterPath}`;
  const showFallback = imgError || !posterPath;

  if (!posterPath) return null;

  return (
    <div
      onClick={() => navigate(`/actors/${actor.id}`)}
      className="group cursor-pointer flex flex-col bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.015] duration-300"
    >
      {/* Image Wrapper */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[330px] bg-[#0e0e0e]">
        {!imgLoaded && !showFallback && (
          <img
            src={blurImg}
            alt="blur-preview"
            className="absolute w-full h-full object-cover blur-md scale-105"
          />
        )}

        <img
          src={showFallback ? fallbackImg : fullImg}
          alt={actor.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-full  h-full object-cover transition-opacity duration-500 ease-in-out ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Actor Name */}
      <div className="p-3 text-center">
        <h3 className="text-xs md:text-base text-[#f5f5f1] font-semibold group-hover:underline truncate">
          {actor.name}
        </h3>
      </div>
    </div>
  );
};
