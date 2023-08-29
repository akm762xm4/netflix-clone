import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
export const SearchForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const onSubmit = (formValues: any) =>
    navigate(`search/${formValues.searchTerm}`)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-1 rounded-md bg-[#ffffff7e]"
    >
      <input
        {...register("searchTerm")}
        className="rounded-md border-0 px-[0.3rem] py-[0.12rem] leading-3 bg-transparent focus:outline-none"
        type="text hidden md:block"
        autoComplete="off"
        required
      />
      <button
        className="p-1 border-l-2 border-[#221f1f]"
        onClick={() => handleSubmit(onSubmit)}
      >
        <MagnifyingGlassIcon className="w-6 h-6 p-[0.10rem] text-[#221f1f]" />
      </button>
    </form>
  )
}
