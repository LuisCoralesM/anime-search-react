import { IFetchObject } from "../utils/fetchApi";

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Images2 {
  image_url?: any;
  small_image_url?: any;
  medium_image_url?: any;
  large_image_url?: any;
  maximum_image_url?: any;
}

export interface Trailer {
  youtube_id?: any;
  url?: any;
  embed_url?: any;
  images: Images2;
}

export interface Title {
  type: string;
  title: string;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface To {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Prop {
  from: From;
  to: To;
}

export interface Aired {
  from: Date | string | null;
  to: Date | string | null;
  prop: Prop;
  string: string;
}

export interface Broadcast {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
}

export interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Licensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface IAnimeObject {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Theme[];
  demographics: Demographic[];
}

export interface IContext {
  listData: IApiResponse | undefined;
  singleData: IAnimeObject | undefined;
  getAnime: (term: string) => Promise<IFetchObject>;
  setContextListData: (data: IApiResponse) => void;
  setContextSingleData: (data: IAnimeObject) => void;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface IApiResponse {
  pagination: Pagination;
  data: IAnimeObject[];
}

export interface ISingleAnimeProps {
  data: IAnimeObject | undefined;
}
