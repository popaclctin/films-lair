export type Film = {
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
};

export type Films = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};
