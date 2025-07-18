export interface SeriesBrief {
  first_air_date: string
  backdrop_path: string
  id: number
  name: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  media_type?: string
}
export interface SeriesDetail {
  adult: boolean
  backdrop_path: string
  first_air_date: string
  id: number
  name: string
  number_of_episodes: number
  number_of_seasons: number
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
  }[]
  seasons: SeasonsBrief[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}

export interface SeasonsBrief {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: string
  vote_average: number
}
