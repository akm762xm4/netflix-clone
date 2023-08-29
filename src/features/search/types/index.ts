import { ActorBrief } from "../../actors/types"
import { MovieBrief } from "../../movies/types"
import { SeriesBrief } from "../../series/types"

export interface SearchResponse {
  movies: MovieBrief[]
  tv: SeriesBrief[]
  actors: ActorBrief[]
}
