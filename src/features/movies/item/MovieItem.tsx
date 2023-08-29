import { MovieBrief } from "../types"
import { useNavigate } from "react-router-dom"
import movieLogo from "../../../assets/movie.png"
interface MovieItemProps {
  movie: MovieBrief
}
export const MovieItem = ({ movie }: MovieItemProps) => {
  const navigate = useNavigate()
  let releaseYear = new Date(movie.release_date).getFullYear()
  return (
    <div
      className={`${
        !movie?.backdrop_path || !movie?.poster_path ? "hidden" : "flex"
      } md:bg-[#564d4d88] bg-none select-none flex-col items-center shrink-0 overflow-hidden md:p-2 p-0 rounded-md`}
    >
      <span>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
              : movieLogo
          }
          alt="Error 404"
          className={`rounded-md cursor-pointer md:w-60 md:h-84 w-32 h-54 ${
            movie.poster_path ? "" : "py-[53.5px]"
          }`}
          onClick={() => navigate(`/movies/${movie.id}`)}
        />
      </span>
      <span className="pt-2 flex-shrink text-[#f5f5f1] ">
        <button
          onClick={() => navigate(`/movies/${movie.id}`)}
          className="hover:underline decoration-[#f5f5f1] md:text-md text-xs grow hidden md:block"
        >
          {movie.title.length > 24
            ? movie.title.slice(0, 19).concat("...")
            : movie.title}{" "}
          ({releaseYear})
        </button>
      </span>
    </div>
  )
}
