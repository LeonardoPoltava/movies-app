export interface SearchType {
  backdrop_path: string,
  first_air_date?: string,
  release_date?: string,
  id: number,
  name?: string,
  title?: string,
  original_name: string,
  overview: string,
  media_type: string,
  popularity: number,
  poster_path: string,
  profile_path: string,
  genres: [{ id: number, name: string }],
  adult: boolean,
  gender: number,
  character: string,
  department: string,
  job: string,
  known_for_department: string,
}
