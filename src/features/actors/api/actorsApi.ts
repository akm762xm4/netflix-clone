import { api } from "../../../app/server-api"
import { MovieBrief } from "../../movies/types"
import { ActorBrief, ActorDetail, ActorImage } from "../types"
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJmMWFlMzk3MmUzZTQ4YzRkZmQ2ZjVjZWJlNmY4NSIsInN1YiI6IjYzOWM2ZWRlZDJiMjA5MDA3ZGViNTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fsvvo7tdUOIjzeJPjdMPzWHZlDuQGofT2TcLVsSHVRA"
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
}
const actorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getActors: builder.query<ActorBrief[], number>({
      query: (id) => ({
        url: `/movie/${id}/credits`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.cast.slice(0, 10)
      },
    }),
    getActor: builder.query<ActorDetail, any>({
      query: (id) => ({
        url: `/person/${id}`,
        headers,
      }),
    }),
    popularActors: builder.query<ActorBrief[], void>({
      query: () => ({
        url: `/person/popular`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results
      },
    }),
    actorMovies: builder.query<MovieBrief[], any>({
      query: (id) => ({
        url: `/person/${id}/movie_credits`,
        headers,
      }),
      transformResponse: (res: any) => {
        let movies = res.cast
        let response = [...movies].sort((a, b) => b.popularity - a.popularity)
        return response.slice(0, 12)
      },
    }),
    actorImages: builder.query<ActorImage[], any>({
      query: (id) => ({
        url: `/person/${id}/images`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.profiles.slice(0, 8)
      },
    }),
  }),
})
export const {
  useGetActorsQuery,
  useGetActorQuery,
  usePopularActorsQuery,
  useActorMoviesQuery,
  useActorImagesQuery,
} = actorsApi
