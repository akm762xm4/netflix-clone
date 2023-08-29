import { Loader } from "../../../components/Loader/Loader"
import { useSeriesActorsQuery } from "../../series/api/seriesApi"
import { ActorItem } from "../item/ActorItem"
export const SeriesActorsList = ({ id }: any) => {
  const { data: actors, isLoading, isFetching } = useSeriesActorsQuery(id)
  actors && console.log("Actors::", actors)

  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
      Cast
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2 px-2">
        {actors?.map((actor: any) => (
          <ActorItem
            role={actor?.roles[0]?.character}
            key={actor?.id}
            actor={actor}
          />
        ))}
      </div>
    </div>
  )
}
