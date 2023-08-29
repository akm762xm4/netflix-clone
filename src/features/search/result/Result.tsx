import { useParams } from "react-router-dom"
import { useSearchAllQuery } from "../api/searchApi"
import { Loader } from "../../../components/Loader/Loader"
import { MovieItem } from "../../movies/item/MovieItem"
import { SeriesItem } from "../../series/item/SeriesItem"
import { NoSearchRelated } from "../../../components/Error/NoSearchRelated"
import { PopularActorItem } from "../../actors/popular/PopularItem"
export const Results = () => {
  const { q } = useParams()
  const { data: results, isLoading, isFetching } = useSearchAllQuery(q)
  console.log("Results::", results)

  if (
    results?.movies.length === 0 &&
    results.tv.length === 0 &&
    results.actors.length === 0
  ) {
    return <NoSearchRelated q={q} />
  }
  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <>
      <span className={!results?.movies.length ? "hidden" : "block"}>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          "<span className="text-[#E50914]">{q}</span>" in Movies
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2">
          {results?.movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </span>
      <span className={!results?.tv.length ? "hidden" : "block"}>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          "<span className="text-[#E50914]">{q}</span>" Series
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2">
          {results?.tv.map((series) => (
            <SeriesItem key={series.id} seriesItem={series} />
          ))}
        </div>
      </span>
      <span className={!results?.actors.length ? "hidden" : "block"}>
        <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
          "<span className="text-[#E50914]">{q}</span>" Actor
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-2">
          {results?.actors.map((actor) => (
            <PopularActorItem key={actor.id} actor={actor} />
          ))}
        </div>
      </span>
    </>
  )
}
