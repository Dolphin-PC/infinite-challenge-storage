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
export interface MemeInterface {
  id: number;
  img_src: string;
  thumnail_src: string;
  alt: string | null;
  tag: string[];
  like_cnt: number;
  download_cnt: number;
}

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
  img_url: string;
  season: SeasonType;
  title: string;
  description: string;
  outline: string;
  actor: string[];
  view_url: string;
}

export interface EpisodeInterface {
  key: string;
  img_src: string;
  title: string;
  air_time: string;
  air_date: string;
  desc: string;
  actor: string[];
}

export type SeasonType = "season1" | "season2" | "season3";
