import { useState } from "react";
import fallbackImg from "../assets/movie.png";

interface PropTypes {
  image: string;
}

export const Image = ({ image }: PropTypes) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const blurImage = `https://image.tmdb.org/t/p/w92${image}`;
  const fullImage = `https://image.tmdb.org/t/p/original${image}`;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      {/* Blurred low-res preview */}
      {!loaded && !error && (
        <img
          src={blurImage}
          alt="blur preview"
          className="absolute w-full h-full object-cover blur-md scale-105"
        />
      )}

      {/* Main image */}
      <img
        src={error ? fallbackImg : fullImage}
        alt="Movie Asset"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
