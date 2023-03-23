import {castCrewType} from "../../people/types/cast-crew-type";

export type MoviesType = {
  backdrop_path: string,
  first_air_date?: string,
  release_date?: string,
  id: number,
  name?: string,
  title?: string,
  original_name: string,
  overview: string,
  media_type: string,
};

export type movieOrSeriesType = {
  backdrop_path: string,
  first_air_date?: string,
  release_date?: string,
  genres: [{ id: number, name: string }],
  id: number,
  name?: string,
  title?: string,
  original_name: string,
  overview: string,
  poster_path: string,
  credits: castCrewType
};
