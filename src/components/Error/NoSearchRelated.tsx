import { useNavigate } from "react-router-dom";

export const NoSearchRelated = ({ q }: any) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 h-[89vh] justify-center items-center bg-[#000000] text-[#F5F5F1] ">
      <div className="text-center text-2xl md:text-4xl">
        No Items Related To <br />" <span className="text-[#E50914]">{q}</span>{" "}
        "
      </div>
      <div className="text-base md:text-2xl text-center">
        Alternativly you can check for
        <br />
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
  );
};
