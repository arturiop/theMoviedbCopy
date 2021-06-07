export type ResposeDataType<D> = {
  id?: number;
  page: number;
  results: Array<D>;
  total_pages: number;
  total_results: number;
};

export type ReviewsAuthorType = {
  author: string;

  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };

  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type RecomendationsData = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type RequestParams = {
  queryKey: [string, { id: number; path?: string }];
};

export type MovieDataType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: Array<any>;

  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<any>;
  production_countries: Array<any>;

  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<any>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DataImagesMovieType = {
  id: number;
  backdrops: Array<ImageType>;
  posters: Array<ImageType>;
};

export type ImageType = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type VideoDataType = {
  id: number;
  results: Array<VideoType>;
};

export type VideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export type CreditsDataType = {
  id: number;
  cast: CastType[];
  crew: CrewType[];
};

export type CrewType = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type CastType = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
