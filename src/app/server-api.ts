import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const BASE_URL = "https://api.themoviedb.org/3"
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ["movie", "tv", "actor"],
})
