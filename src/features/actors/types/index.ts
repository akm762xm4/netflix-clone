export interface ActorBrief {
  character: string
  id: number
  original_name?: string
  name?: string
  profile_path: string
  media_type: string
}
export interface ActorDetail {
  biography: string
  birthday: string
  deathday: string
  gender: number
  id: number
  media_type: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
}
export interface ActorImage {
  profile_info: string
}
