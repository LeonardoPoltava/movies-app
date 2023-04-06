import {castCrewType} from "../../people/types/cast-crew-type";

interface moviesGeneral {
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

export interface MoviesType extends moviesGeneral {
  popularity: number,
  profile_path: string
}

export interface movieOrSeriesType extends moviesGeneral {
  genres: [{ id: number, name: string }],
  credits: castCrewType,
}

export interface Genres {
  id: number,
  name: string
}
