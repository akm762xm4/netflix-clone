import { ActorBrief } from "../../actors";
import { MovieBrief } from "../../movies";
import { SeriesBrief } from "../../series/types";

export interface SearchResponse {
  movies: MovieBrief[];
  tv: SeriesBrief[];
  actors: ActorBrief[];
}
