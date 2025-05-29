import { formatNumber } from "../../../utility/formatNumber";
import { subtract } from "../../../utility/subtract";
import {
  StarIcon,
  HandThumbUpIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { MovieDetail } from "../types";
import companyLogo from "../../../assets/companyLogo.jpg";
interface PropTypes {
  movie?: MovieDetail;
}
export const MovieStats = ({ movie }: PropTypes) => {
  return (
    <div className="flex  gap-2 flex-col">
      <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
        Production Companies
        <div className="flex items-center overflow-x-scroll md:overflow-hidden overflow-y-hidden gap-4 px-4">
          {movie?.production_companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col gap-2 p-2 justify-between items-center shrink"
            >
              <span className="w-24">
                <img
                  src={`${
                    company.logo_path === null
                      ? companyLogo
                      : `https://image.tmdb.org/t/p/original${company.logo_path} `
                  }`}
                  alt={company.name}
                />
              </span>
              <span className="text-[#f5f5f1] text-center text-xs md:text-sm">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8 items-center justify-around text-md md:text-xl  text-[#f5f5f1] p-3  bg-[#000000]">
        <span className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Budget</span>
            <CurrencyDollarIcon className="w-4 text-green-600" />
          </div>
          <div className="flex items-center gap-2">
            <span>Revenue</span>
            <CurrencyDollarIcon className="w-4 text-green-600" />
          </div>
          <div className="flex items-center gap-2">
            <span>Break-even</span>
            <CurrencyDollarIcon className="w-4 text-green-600" />
          </div>
          <div className="flex items-center gap-1">
            <span>Ratings</span>
            <StarIcon className="w-4 text-yellow-300 " />
          </div>
          <div className="flex items-center gap-2">
            <span>Popularity</span>
            <HandThumbUpIcon className="w-4 text-[#25d3ffe9]" />
          </div>
          <div className="flex items-center gap-2">
            <span>Runtime</span>
            <ClockIcon className="w-4 text-yellow-200   " />
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <div>{formatNumber(movie?.budget, 2)}</div>
          <div>{formatNumber(movie?.revenue, 2)}</div>
          <div>{subtract(movie?.revenue, movie?.budget)}</div>
          <div>
            {movie?.vote_average} ({movie?.vote_count})
          </div>
          <div>{movie?.popularity}</div>
          <div>{movie?.runtime}</div>
        </span>
      </div>
    </div>
  );
};
