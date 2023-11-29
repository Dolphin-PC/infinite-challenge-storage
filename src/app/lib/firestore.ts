const isLocal = true;

import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import {
  DataType,
  EpisodeInterface,
  MemeLifeInterface,
  PageType,
  PromiseDataType,
} from "./types";
import { mock_data } from "./mock_data";
import { DATA_LIMIT } from "./data";
import { getPageObj } from "./util";
import { app } from "../../../firebase.config.js";

const db = getFirestore(app);

const collections = {
  meme_life: collection(db, "meme_life"),
  episode_info: collection(db, "episode_info"),
};

export const getMemeLife = async (
  searchText?: string,
  pageParam?: number,
): Promise<PromiseDataType> => {
  // const querySnapshot = await getDocs(collections.meme_life);
  let data: MemeLifeInterface[] = [];

  if (isLocal) {
    data = mock_data.meme_life;
  } else {
    // data = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  if (searchText) {
    data = data.filter((e) => e.alt.includes(searchText));
  }

  let page: PageType = getPageObj(pageParam, data.length, DATA_LIMIT);
  if (pageParam) {
    data = data.slice((pageParam - 1) * DATA_LIMIT, pageParam * DATA_LIMIT);
  }

  return { data, page };
};
export const getEpisodeInfo = async (searchText?: string, season?: string) => {
  // const querySnapshot = await getDocs(collections.episode_info);
  let res: EpisodeInterface[] = [];

  if (isLocal) {
    res = mock_data.episode_info;
  } else {
    // res = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  if (season) {
    res = res.filter((r) => r.info.season == season);
  }

  if (searchText) {
    res = res.map((i) => {
      let { info, episode_info } = i;
      let filter_episode_info = episode_info.filter((epi) => {
        if (epi.title.includes(searchText)) return true;
        if (epi.actor.join("").includes(searchText)) return true;

        return false;
      });

      return { info, episode_info: filter_episode_info };
    });
  }

  return res;
};
