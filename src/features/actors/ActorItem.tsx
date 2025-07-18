import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ActorBrief } from "./";
import fallbackImg from "../../assets/movie.png";

interface PropTypes {
  actor: ActorBrief;
  role?: string;
}

export const ActorItem = ({ actor, role }: PropTypes) => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!actor?.profile_path) return null;

  const fullImage = `https://image.tmdb.org/t/p/w780${actor.profile_path}`;
  const blurImage = `https://image.tmdb.org/t/p/w92${actor.profile_path}`;

  return (
    <div className="flex flex-col items-center bg-[#1b1b1b] p-3 rounded-xl w-36 sm:w-40 hover:shadow-lg transition-all duration-300">
      {/* Image Block */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md mb-3">
        {!loaded && !error && (
          <img
            src={blurImage}
            alt="loading blur"
            className="absolute w-full h-full object-cover blur-sm scale-105"
          />
        )}
        <img
          src={error ? fallbackImg : fullImage}
          alt={actor.original_name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          onClick={() => navigate(`/actors/${actor.id}`)}
          className={`w-full h-full object-cover rounded-lg cursor-pointer transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Text Block */}
      <div className="text-center text-white">
        <button
          onClick={() => navigate(`/actors/${actor.id}`)}
          className="text-sm sm:text-base font-medium hover:underline"
        >
          {actor.original_name}
        </button>
        {actor.character && (
          <>
            <p className="text-xs text-gray-400">as</p>
            <p className="text-sm italic text-gray-300 line-clamp-1">
              {role || actor.character}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
