export type PromiseDataType = {
  data: DataType[];
  page: PageType;
};

export type PageType = {
  nextPage: number | undefined;
  totalPage: number | null;
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
  };
};
