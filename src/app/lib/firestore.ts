const isLocal = true;

import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../../firebase.config";
import { DataType, PageType, PromiseDataType } from "./types";
import { mock_data } from "./mock_data";
import { DATA_LIMIT } from "./data";
import { getPageObj } from "./util";

const db = getFirestore(app);

const collections = {
  meme_life: collection(db, "meme_life"),
  episode_info: collection(db, "episode_info"),
};

export const getMemeLife = async (
  searchText?: string,
  pageParam?: number,
): Promise<PromiseDataType> => {
  const querySnapshot = await getDocs(collections.meme_life);
  let data: DataType[] = [];

  if (isLocal) {
    data = mock_data.meme_life;
  } else {
    data = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  if (searchText) {
    data = data.filter((e) => e.title.includes(searchText));
  }

  let page: PageType = getPageObj(pageParam, data.length, DATA_LIMIT);
  if (pageParam) {
    data = data.slice((pageParam - 1) * DATA_LIMIT, pageParam * DATA_LIMIT);
  }

  return { data, page };
};
export const getEpisodeInfo = async (
  searchText?: string,
): Promise<DataType[]> => {
  const querySnapshot = await getDocs(collections.episode_info);
  let res: DataType[] = [];

  if (isLocal) {
    res = mock_data.episode_info;
  } else {
    res = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  if (searchText) {
    res = res.filter((e) => e.title.includes(searchText));
  }

  return res;
};
