import { api } from "../../app/server-api";
import { ActorImage } from "../actors";
import { MovieBrief, MovieDetail } from "./";
// const API_KEY = "79bf1ae3972e3e48c4dfd6f5cebe6f85"
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJmMWFlMzk3MmUzZTQ4YzRkZmQ2ZjVjZWJlNmY4NSIsInN1YiI6IjYzOWM2ZWRlZDJiMjA5MDA3ZGViNTg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fsvvo7tdUOIjzeJPjdMPzWHZlDuQGofT2TcLVsSHVRA";
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

const moviesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    nowMovies: builder.query<MovieBrief[], void>({
      query: () => ({
        url: "/movie/now_playing",
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results;
      },
    }),
    popularMovies: builder.query<MovieBrief[], void>({
      query: () => ({
        url: "/movie/popular",
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results;
      },
    }),
    topMovies: builder.query<MovieBrief[], void>({
      query: () => ({
        url: "/movie/top_rated",
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results;
      },
    }),
    upcomingMovies: builder.query<MovieBrief[], void>({
      query: () => ({
        url: "/movie/upcoming",
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results;
      },
    }),
    discoverMovies: builder.query<MovieBrief[], void>({
      query: () => ({
        url: "/discover/movie?region=India&sort_by=popularity.desc",
        // params: {
        //   include_adult: false,
        //   region: "india",
        //   sort_by: "popularity.desc",
        // },
        headers,
      }),
      transformResponse: (res: any) => {
        return res.results;
      },
    }),
    getMovie: builder.query<MovieDetail, any>({
      query: (id) => ({
        url: `/movie/${id}`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res;
      },
    }),
    similarMovies: builder.query<MovieBrief[], any>({
      query: (id) => ({
        url: `/movie/${id}/similar`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.results;
      },
    }),
    recommendedMovies: builder.query<MovieBrief[], any>({
      query: (id) => ({
        url: `/movie/${id}/recommendations`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res?.results;
      },
    }),
    getImages: builder.query<ActorImage[], any>({
      query: (id) => ({
        url: `/movie/${id}/images`,
        headers,
      }),
      transformResponse: (res: any) => {
        return res.backdrops.slice(0, 8);
      },
    }),
  }),
});
export const {
  useNowMoviesQuery,
  usePopularMoviesQuery,
  useTopMoviesQuery,
  useUpcomingMoviesQuery,
  useDiscoverMoviesQuery,
  useGetMovieQuery,
  useGetImagesQuery,
  useSimilarMoviesQuery,
  useRecommendedMoviesQuery,
} = moviesApi;
