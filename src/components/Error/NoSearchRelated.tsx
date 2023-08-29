import { useNavigate } from "react-router-dom"

export const NoSearchRelated = ({ q }: any) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center bg-[#000000] text-[#F5F5F1] ">
      <div className="text-3xl md:text-5xl">
        No Items Related To " <span className="text-[#E50914]">{q}</span> "
      </div>
      <div className="text-lg md:text-2xl">
        Alternativly you can check for{" "}
        <button
          onClick={() => navigate(`/movies`)}
          className="text-[#E50914] hover:underline decoration-[#F5F5F1]"
        >
          Movies
        </button>{" "}
        or{" "}
        <button
          onClick={() => navigate(`/series`)}
          className="text-[#E50914] hover:underline decoration-[#F5F5F1]"
        >
          Series
        </button>
      </div>
    </div>
  )
}
