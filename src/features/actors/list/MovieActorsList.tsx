import { Loader } from "../../../components/Loader/Loader"
import { useGetActorsQuery } from "../api/actorsApi"
import { ActorItem } from "../item/ActorItem"
export const ActorsList = ({ id }: any) => {
  const { data: actors, isLoading, isFetching } = useGetActorsQuery(id)
  if (isLoading || isFetching) {
    return <Loader />
  }
  return (
    <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
      Cast
      <div className="grid  md:grid-cols-6 grid-cols-3 gap-2 px-2">
        {actors?.map((actor) => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  )
}
