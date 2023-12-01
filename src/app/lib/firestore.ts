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
  SeasonInterface,
} from "./types";
import { mock_data } from "./mock_data";
import { DATA_LIMIT } from "./data";
import { getPageObj } from "./util";
import { app } from "../../../firebase.config.js";
import { parseArgs } from "util";

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
export const getSeasonInfo = async (season?: string) => {
  let seasonInfo: SeasonInterface[] = [];
  if (isLocal) {
    seasonInfo = mock_data.season_info;
  } else {
  }

  if (season) {
    seasonInfo = seasonInfo.filter((_s) => _s.season === season);
  }

  return seasonInfo;
};
export const getEpisodeInfo = async (
  season: string,
  searchText?: string,
  pageParam?: number,
) => {
  // const querySnapshot = await getDocs(collections.episode_info);
  let episodeInfo: EpisodeInterface[] = [];

  if (isLocal) {
    episodeInfo = mock_data.episode_info;
  } else {
    // res = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  episodeInfo = episodeInfo.filter((_e) => _e.season === season);

  if (searchText) {
    episodeInfo = episodeInfo.filter((_e) => {
      if (_e.actor.join("").includes(searchText)) return true;
      if (_e.title.includes(searchText)) return true;
      return false;
    });
  }

  let page: PageType = getPageObj(pageParam, episodeInfo.length, DATA_LIMIT);
  if (pageParam) {
    episodeInfo = episodeInfo.slice(
      (pageParam - 1) * DATA_LIMIT,
      pageParam * DATA_LIMIT,
    );
  }

  return { episodeInfo, page };
};
