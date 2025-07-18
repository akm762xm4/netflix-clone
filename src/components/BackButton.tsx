import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute right-2 top-20 z-20 bg-[#0e0e0e4b] hover:bg-[#1c1c1c] text-[#e50914] p-2 rounded-full shadow-lg transition-all duration-200 backdrop-blur-md"
      aria-label="Go Back"
    >
      <ArrowLeftIcon className=" stroke-1 stroke-[#e50914] md:w-8 md:h-8 w-5 h-5" />
    </button>
  );
};
