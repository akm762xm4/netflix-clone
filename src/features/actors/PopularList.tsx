import { usePopularActorsQuery } from "./actorsApi";
import { PopularActorItem } from "./PopularItem";
export const PopularActorsList = () => {
  const { data: actors } = usePopularActorsQuery();

  return (
    <div className="md:p-6 p-2">
      <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
        Popular Actors
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5">
        {actors?.map((actor: any) => (
          <PopularActorItem key={actor?.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};
