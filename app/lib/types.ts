/**
 * @deprecated to MemeInterface
 */
export interface MemeLifeInterface {
  card_key: string;
  href: string;
  thumnail_src: string;
  alt: string;
  tag: string[];
  img_src: string;
  like_cnt: number;
  download_cnt: number;
}
export type MemeType = {
  id: number;
  img_src: string;
  thumnail_src: string;
  alt: string | null;
  tag: string[];
  like_cnt: number;
  download_cnt: number;
  tot_cnt?: number;
};

export type API_RES_MemeType = { data: MemeType | null };

export type PromiseDataType = {
  data: MemeLifeInterface[];
  page: PageType;
};

export type PageType = {
  nextPage: number | undefined;
  totalPage: number | null;
  totalCnt: number;
};

export type DataType = {
  title: string;
  img_src: string;
  create_time: {
    seconds: number;
    nanoseconds: number;
  };
  update_time: {
    seconds: number;
    nanoseconds: number;
  };
};

/**
 * @deprecated
 */
export type SearchType = {
  searchParams?: {
    search?: string;
    page?: string;
    limit?: string;
    season?: string;
  };
};

export interface SearchInterface {
  search?: string;
  page?: string | number;
  limit?: string;
  season?: string;
}

export interface TagInterface {
  searchText: string;
  priority: number;
}

// export interface EpisodeInterface {
//   info: {
//     season: string;
//     title: string;
//     description: string;
//     outline: string;
//     actor: string[];
//   };
//   episode_info: EpisodeInfoInterface[];
// }

// export interface EpisodeInfoInterface {}

export interface SeasonInterface {
  season: string;
  title: string | null;
  description: string | null;
  outline: string | null;
  img_src: string;
  view_url: string | null;
  actor: string[];
}

export interface EpisodeInterface {
  season: string;
  id: number;
  title: string | null;
  description: string | null;
  air_date: string | null;
  air_time: string | null;
  img_src: string;
  actor: string[];
}

export type SeasonType = "season1" | "season2" | "season3";

export type ListResType<T> = { data: T; tot_cnt: number };
