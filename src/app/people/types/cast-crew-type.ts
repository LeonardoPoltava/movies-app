import {castType} from "./cast-type";
import {crewType} from "./crew-type";

export interface castCrewType {
  cast: castType[],
  crew: crewType[]
}

interface personGeneral {
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

export interface personCrew extends personGeneral {
  department?: string;
  job?: string;
}

export interface personCast extends personGeneral {
  character?: string,
  order?: number,
}

export type personParticipate = personCrew & personCast;

export type personType = {
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
    cast: personCast[]
    crew: personCrew[]
  }
}
