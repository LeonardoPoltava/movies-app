import {CastCrewType} from "../../people/types/cast-crew-type";

interface MoviesGeneral {
  backdrop_path: string,
  first_air_date?: string,
  release_date?: string,
  id: number,
  name?: string,
  title?: string,
  original_name: string,
  overview: string,
  poster_path: string,
  media_type: string,
}

export interface MoviesType extends MoviesGeneral {
  popularity: number,
  profile_path: string
}

export interface MovieOrSeriesType extends MoviesGeneral {
  genres: [{ id: number, name: string }],
  credits: CastCrewType,
}

export interface Genres {
  id: number,
  name: string
}
