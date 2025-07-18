import { ActorBrief } from "../actors";
import { MovieBrief } from "../movies";
import { SeriesBrief } from "../series";

export interface SearchResponse {
  movies: MovieBrief[];
  tv: SeriesBrief[];
  actors: ActorBrief[];
}
