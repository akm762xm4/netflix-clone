import { useNavigate } from "react-router-dom"
import { SeriesBrief } from "../types"
import movieLogo from "../../../assets/movie.png"
interface PropTypes {
  seriesItem: SeriesBrief
}
export const SeriesItem = ({ seriesItem }: PropTypes) => {
  const navigate = useNavigate()
  let releaseYear = new Date(seriesItem.first_air_date).getFullYear()
  return (
    <div className="md:bg-[#564d4d88] bg-none items-center select-none flex flex-col shrink-0 md:p-2 p-0 rounded-md">
      <span>
        <img
          src={
            seriesItem.poster_path
              ? `https://image.tmdb.org/t/p/w780${seriesItem.poster_path}`
              : movieLogo
          }
          alt="Error 404"
          className={`${
            seriesItem.poster_path ? "" : "py-[60px]"
          } rounded-md cursor-pointer md:w-60 md:h-84 w-32 h-54`}
          onClick={() => navigate(`/series/${seriesItem.id}`)}
        />
      </span>
      <span className="pt-2 hidden md:block flex-shrink text-[#f5f5f1] ">
        <button
          onClick={() => navigate(`/series/${seriesItem.id}`)}
          className="hover:underline decoration-[#f5f5f1]"
        >
          {seriesItem.name.length > 24
            ? seriesItem.name.slice(0, 19).concat("...")
            : seriesItem.name}{" "}
          ({releaseYear})
        </button>
      </span>
    </div>
  )
}
