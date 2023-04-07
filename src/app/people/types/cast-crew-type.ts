import {CastType} from "./cast-type";
import {CrewType} from "./crew-type";

export interface CastCrewType {
  cast: CastType[],
  crew: CrewType[]
}

interface PersonGeneral {
  adult: false
  backdrop_path: string
  credit_id: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title:  string,
  overview: string,
  popularity:number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  name: string,
  first_air_date: string,
}

export interface PersonCrew extends PersonGeneral {
  department?: string;
  job?: string;
}

export interface PersonCast extends PersonGeneral {
  character?: string,
  order?: number,
}

export type PersonParticipate = PersonCrew & PersonCast;

export type PersonType = {
  adult: boolean,
  also_known_as: string[],
  biography: string,
  birthday: string,
  deathday: null | string
  gender: 2
  homepage: null
  id: number,
  imdb_id: string,
  known_for_department: string,
  name: string,
  place_of_birth: string,
  popularity: number,
  profile_path: string,
  movie_credits: {
    cast: PersonCast[]
    crew: PersonCrew[]
  }
}
