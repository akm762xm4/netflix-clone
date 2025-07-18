import { api } from "../../app/server-api";
import { ActorBrief } from "../actors";
import { MovieBrief } from "../movies";
import { SeriesBrief } from "../series";
import { SearchResponse } from "./";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJmMWFlMzk3MmUzZTQ4YzRkZmQ2ZjVjZWJlNmY4NSIsInN1YiI6IjYzOWM2ZWRlZDJiMjA5MDA3ZGViNTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fsvvo7tdUOIjzeJPjdMPzWHZlDuQGofT2TcLVsSHVRA";
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};
const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    searchAll: builder.query<SearchResponse, any>({
      query: (q) => ({
        url: `/search/multi`,
        params: {
          query: q,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
        headers,
      }),
      transformResponse: (res: any) => {
        const movies = res?.results?.filter(
          (movie: MovieBrief) => movie?.media_type === "movie"
        );
        const tv = res?.results?.filter(
          (tv: SeriesBrief) => tv?.media_type === "tv"
        );
        const actors = res?.results?.filter(
          (actor: ActorBrief) => actor?.media_type === "person"
        );
        return { movies, tv, actors };
      },
      providesTags: ["movie", "tv", "actor"],
    }),
  }),
});
export const { useSearchAllQuery } = searchApi;
