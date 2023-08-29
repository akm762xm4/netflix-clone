import { useParams } from "react-router-dom"
import {
  useGetActorQuery,
  useActorImagesQuery,
  useActorMoviesQuery,
} from "../api/actorsApi"
import { Image } from "../../../components/Image/Image"
import { MovieItem } from "../../movies/item/MovieItem"
import { MovieBrief } from "../../movies/types"
import { Loader } from "../../../components/Loader/Loader"
import { PageNotFound } from "../../../components/Error/PageNotFound"
import user2 from "../../../assets/user2.png"
export const ActorsInfo = () => {
  const { id } = useParams()
  const {
    data: actor,
    isLoading: isActorLoading,
    isFetching: isActorFetching,
  } = useGetActorQuery(id)
  const {
    data: images,
    isLoading: isImagesLoading,
    isFetching: isImagesFetching,
  } = useActorImagesQuery(id)
  const {
    data: movies,
    isLoading: isMoviesLoading,
    isFetching: isMoviesFetching,
  } = useActorMoviesQuery(id)
  if (
    isActorLoading ||
    isActorFetching ||
    isImagesLoading ||
    isImagesFetching ||
    isMoviesLoading ||
    isMoviesFetching
  ) {
    return <Loader />
  }
  if (!actor || !actor.profile_path) {
    return <PageNotFound />
  }
  return (
    <main className="bg-[#292f33]">
      <div className="flex items-center flex-col md:flex-row  gap-2 p-2 justify-start">
        <span className="shrink-0">
          <img
            src={`${
              actor?.profile_path
                ? `https://image.tmdb.org/t/p/original${actor?.profile_path}`
                : user2
            }`}
            className="w-80 rounded-md"
          />
        </span>

        <span className="text-[#f5f5f1]">
          <span className="bg-[#8c8c8c83] p-[0.15rem] rounded-md text-xs md:text-sm">
            {actor?.known_for_department}
          </span>
          <div className="flex items-baseline justify-start gap-1">
            <span className="text-2xl md:text-3xl font-semibold text-[#e50914]">
              {actor?.name}
            </span>
            {actor.birthday ? (
              actor?.deathday ? (
                <span className="text-xs md:text-md">
                  ({actor.birthday}:{actor.deathday})
                </span>
              ) : (
                <span className="text-xs md:text-md">({actor?.birthday})</span>
              )
            ) : (
              <></>
            )}
          </div>

          <div className="flex gap-2">
            <span>{actor?.gender === 1 ? "Female" : "Male"}</span>
            {actor?.place_of_birth ? (
              <span>,from {actor?.place_of_birth}</span>
            ) : (
              <></>
            )}
          </div>
          {actor?.biography ? (
            <p className="pt-4 text-sm ">
              {actor?.biography.substring(0, 475)}...
            </p>
          ) : (
            <></>
          )}
          <div>{actor?.popularity}</div>
        </span>
      </div>
      <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
        Photos of
        <span className="text-[#E50914]"> {actor.name}</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
          {images?.map((image: any) => (
            <Image key={image?.file_path} image={image?.file_path} />
          ))}
        </div>
      </div>
      <div className="text-xl md:text-3xl font-semibold p-2 text-gray-400">
        Movies
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
          {movies?.map((movie: MovieBrief) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}
