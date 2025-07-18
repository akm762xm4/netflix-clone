import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formValues: any) => {
    const trimmed = formValues.searchTerm.trim();
    if (!trimmed) return;
    navigate(`/search/${trimmed}`);
    reset(); // Clear input
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="group flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-md px-2 py-[2px] focus-within:ring-2 focus-within:ring-[#e50914] transition-all duration-200"
      aria-label="Search form"
    >
      <input
        {...register("searchTerm")}
        type="text"
        placeholder="Search..."
        autoComplete="off"
        className="md:w-28 w-20 md:group-focus-within:w-44 group-focus-within:w-32 bg-transparent text-[#f5f5f5] placeholder:text-[#bcbcbc] px-2 py-1 text-sm transition-all duration-300 ease-in-out outline-none"
        required
      />
      <button
        type="submit"
        aria-label="Search"
        className="p-1 hover:scale-110 transition-transform"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-[#f5f5f5]" />
      </button>
    </form>
  );
};
