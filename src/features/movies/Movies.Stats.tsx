import { formatNumber } from "../../utility/formatNumber";
import { subtract } from "../../utility/subtract";
import {
  StarIcon,
  HandThumbUpIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";

import { MovieDetail } from "./";
import companyLogo from "../../assets/companyLogo.jpg";

interface PropTypes {
  movie?: MovieDetail;
}

export const MovieStats = ({ movie }: PropTypes) => {
  const stats = [
    {
      label: "Budget",
      value: formatNumber(movie?.budget, 2),
      icon: <CurrencyDollarIcon className="w-5 h-5 text-green-500" />,
    },
    {
      label: "Revenue",
      value: formatNumber(movie?.revenue, 2),
      icon: <CurrencyDollarIcon className="w-5 h-5 text-green-300" />,
    },
    {
      label: "Break-even",
      value: subtract(movie?.revenue, movie?.budget),
      icon: <CurrencyDollarIcon className="w-5 h-5 text-green-200" />,
    },
    {
      label: "Ratings",
      value: `${movie?.vote_average} (${movie?.vote_count})`,
      icon: <StarIcon className="w-5 h-5 text-yellow-400" />,
    },
    {
      label: "Popularity",
      value: movie?.popularity,
      icon: <HandThumbUpIcon className="w-5 h-5 text-blue-400" />,
    },
    {
      label: "Runtime",
      value: `${movie?.runtime} mins`,
      icon: <ClockIcon className="w-5 h-5 text-yellow-200" />,
    },
  ];

  return (
    <div className="flex flex-col md:gap-6 gap-3 md:mt-6 mt-3 p-3 md:p-6">
      {/* PRODUCTION COMPANIES */}
      <div>
        <h3 className="text-xl md:text-3xl font-semibold text-white mb-3">
          Production Companies
        </h3>
        <div className="flex overflow-x-auto gap-4 ">
          {movie?.production_companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center min-w-[100px] max-w-[100px] text-center bg-white/20 p-2 rounded"
            >
              <div className="w-20 h-10 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={
                    company.logo_path
                      ? `https://image.tmdb.org/t/p/w200${company.logo_path}`
                      : companyLogo
                  }
                  alt={company.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xs mt-auto">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MOVIE STATS */}
      <div>
        <h3 className="text-xl md:text-3xl font-semibold text-white mb-4">
          Movie Stats
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-black/60 rounded-xl p-4 text-[#f5f5f1]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-1 items-start justify-start"
            >
              <div className="flex items-center gap-2 md:text-sm text-xs font-medium">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
              <div className="md:text-base text-xs font-semibold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
