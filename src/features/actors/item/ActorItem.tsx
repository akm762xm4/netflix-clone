import { useNavigate } from "react-router-dom"
import { ActorBrief } from "../types"
interface PropTypes {
  actor: ActorBrief
  role?: any
}
export const ActorItem = ({ actor, role }: PropTypes) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${
        !actor.profile_path ? "hidden" : "flex"
      } flex-col items-center gap-2 `}
    >
      <span>
        <img
          src={`https://image.tmdb.org/t/p/w780${actor?.profile_path}`}
          className="w-32 rounded-md"
        />
      </span>
      <span className="flex flex-col items-center text-xs md:text-md text-[#f5f5f1]">
        <button
          onClick={() => navigate(`/actors/${actor.id}`)}
          className="hover:underline decoration-[#f5f5f1] "
        >
          {actor.original_name}
        </button>
        <div>as</div>
        <div>{role ? role : actor.character}</div>
      </span>
    </div>
  )
}
