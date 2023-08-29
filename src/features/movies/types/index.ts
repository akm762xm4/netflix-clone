export interface MovieBrief {
  adult: boolean
  backdrop_path: string
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  vote_average: number
  vote_count: number
  media_type?: string
}
export interface MovieDetail {
  adult: boolean
  backdrop_path: string
  budget: number
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  release_date: Date
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}
