import { useNavigate } from "react-router-dom"
import { ActorBrief } from "../types"
interface PropTypes {
  actor: ActorBrief
}
export const PopularActorItem = ({ actor }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div
      className={
        !actor.profile_path ? "hidden" : "flex flex-col items-center gap-2"
      }
    >
      <span>
        <img
          src={`https://image.tmdb.org/t/p/w780${actor?.profile_path}`}
          className="w-56 rounded-md"
        />
      </span>
      <button
        onClick={() => navigate(`/actors/${actor?.id}`)}
        className="flex flex-col items-center text-s text-[#f5f5f1] hover:underline decoration-[#f5f5f1]"
      >
        {actor?.name}
      </button>
    </div>
  )
}
