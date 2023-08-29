import { api } from "../../../app/server-api"
import { ActorBrief, ActorImage } from "../../actors/types"
import { SeriesBrief, SeriesDetail } from "../types"
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJmMWFlMzk3MmUzZTQ4YzRkZmQ2ZjVjZWJlNmY4NSIsInN1YiI6IjYzOWM2ZWRlZDJiMjA5MDA3ZGViNTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fsvvo7tdUOIjzeJPjdMPzWHZlDuQGofT2TcLVsSHVRA"
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
}
const seriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    nowSeries: builder.query<SeriesBrief[], void>({
      query: () => ({
        url: `/tv/airing_today`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results
      },
    }),
    popularSeries: builder.query<SeriesBrief[], void>({
      query: () => ({
        url: `/tv/popular`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results
      },
    }),
    topSeries: builder.query<SeriesBrief[], void>({
      query: () => ({
        url: `/tv/top_rated`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results
      },
    }),
    upcomingSeries: builder.query<SeriesBrief[], void>({
      query: () => ({
        url: `/tv/on_the_air`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results
      },
    }),
    similarSeries: builder.query<SeriesBrief[], any>({
      query: (id) => ({
        url: `/tv/${id}/similar`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.results
      },
    }),
    recommendedSeries: builder.query<SeriesBrief[], any>({
      query: (id) => ({
        url: `/tv/${id}/recommendations`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.results
      },
    }),
    seriesInfo: builder.query<SeriesDetail, any>({
      query: (id) => ({
        url: `/tv/${id}`,
        headers,
      }),
    }),
    seriesImages: builder.query<ActorImage[], any>({
      query: (id) => ({
        url: `tv/${id}/images`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.backdrops.slice(0, 8)
      },
    }),
    actors: builder.query<ActorBrief[], number>({
      query: (id) => ({
        url: `/tv/${id}/credits`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.cast.slice(0, 12)
      },
    }),
    seriesActors: builder.query({
      query: (id) => ({
        url: `/tv/${id}/aggregate_credits`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.cast.slice(0, 12)
      },
    }),
  }),
})
export const {
  useNowSeriesQuery,
  usePopularSeriesQuery,
  useTopSeriesQuery,
  useUpcomingSeriesQuery,
  useSimilarSeriesQuery,
  useSeriesInfoQuery,
  useSeriesImagesQuery,
  useActorsQuery,
  useSeriesActorsQuery,
  useRecommendedSeriesQuery,
} = seriesApi
