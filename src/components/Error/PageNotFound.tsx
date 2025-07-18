import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-4 h-[89vh] justify-center items-center bg-[#000000] text-[#F5F5F1] text-3xl md:text-5xl">
      <span className="flex ">
        Page Not Found
        <span className="text-[#E50914] px-4 text-3xl md:text-5xl">!</span>
      </span>
      <Link className="text-[#E50914] md:text-3xl text-xl" to={"/"}>
        Navigate to Home
      </Link>
    </div>
  );
};
