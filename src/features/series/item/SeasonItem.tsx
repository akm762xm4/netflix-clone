import { SeasonsBrief } from "../types"

interface PropTypes {
  season: SeasonsBrief
  seriesId: any
}
export const SeasonItem = ({ season, seriesId }: PropTypes) => {
  return (
    <div className="flex flex-col shrink-0">
      <span className="flex justify-center relative">
        <img
          src={`https://image.tmdb.org/t/p/w780${season.poster_path}`}
          className="w-48 h-72 rounded-md"
        />
        <span className="absolute bottom-0 font-normal text-sm md:text-md  bg-[#0e0e0ec8] p-2 rounded-md mb-2 text-[#F5F5F1] ">
          {season.episode_count} Episodes
        </span>
      </span>
      <div className="text-center text-[#F5F5F1] font-normal text-lg">
        {season.name}
      </div>
    </div>
  )
}
