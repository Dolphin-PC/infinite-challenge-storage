export interface MemeLifeInterface {
  key: string;
  href: string;
  thumnail_src: string;
  alt: string;
  tag: string[];
  img_src: string;
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

export type SearchType = {
  searchParams?: {
    search?: string;
    page?: string;
    limit?: string;
    season?: string;
  };
};

export interface TagInterface {
  searchText: string;
  priority: number;
}

export interface EpisodeInterface {
  info: {
    season: string;
    title: string;
    description: string;
    outline: string;
    actor: string[];
  };
  episode_info: EpisodeInfoInterface[];
}

export interface EpisodeInfoInterface {
  title: string;
  actor: string[];
  air_date: string;
}
