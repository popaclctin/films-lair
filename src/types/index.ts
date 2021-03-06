export type FilmType = {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  overview: string | null;
  runtime: number | null;
  budget: number;
  revenue: number;
  popularity: number;
  vote_average: number;
  vote_count: number;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  tagline: string | null;
  genres: { id: number; name: string }[];
};

export type FilmsType = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export type ActorType = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type CreditsType = {
  cast: ActorType[];
};
