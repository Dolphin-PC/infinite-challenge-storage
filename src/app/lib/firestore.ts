const isLocal = process.env.NEXT_PUBLIC_ENVIRONMENT == "LOCAL";

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
  SeasonType,
} from "./types";
import { mock_data } from "../(front-end)/lib/mock_data";
import { DATA_LIMIT } from "./data";
import { getPageObj } from "./util";
import { app } from "../../../firebase.config.js";
import { parseArgs } from "util";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

const collections = {
  meme_life: collection(db, "meme_life"),
  season_info: collection(db, "season_info"),
  episode_info: {
    season1: collection(db, "episode_info_season1"),
    season2: collection(db, "episode_info_season2"),
    season3: collection(db, "episode_info_season3"),
  },
};

/**
 * @deprecated
 * @param searchText
 * @param pageParam
 * @returns
 */
export const getMemeLife = async (
  searchText?: string,
  pageParam?: number,
): Promise<PromiseDataType> => {
  let data: MemeLifeInterface[] = [];

  if (isLocal) {
    data = mock_data.meme_life;
  } else {
    const querySnapshot = await getDocs(collections.meme_life);
    data = querySnapshot.docs.map((doc: DocumentData) => doc.data());
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

// /**
//  * @deprecated
//  * @param key
//  * @returns
//  */
// export const getMemeLifeByKey = async (
//   key: string,
// ): Promise<MemeLifeInterface> => {
//   let data: MemeLifeInterface;

//   if (isLocal) {
//     data = mock_data.meme_life.filter((meme) => meme.card_key == key)[0];
//   } else {
//     const querySnapshot = await getDocs(collections.meme_life);
//     // data = querySnapshot.docs.map((doc: DocumentData) => doc.data());
//   }

//   return data;
// };
export const getSeasonInfo = async (season?: string) => {
  let seasonInfo: SeasonInterface[] = [];
  if (isLocal) {
    seasonInfo = mock_data.season_info;
  } else {
    const querySnapshot = await getDocs(collections.season_info);
    seasonInfo = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  if (season) {
    seasonInfo = seasonInfo.filter((_s) => _s.season === season);
  }

  return seasonInfo;
};
export const getEpisodeInfo = async (
  season: SeasonType,
  searchText?: string,
  pageParam?: number,
) => {
  let episodeInfo: EpisodeInterface[] = [];

  if (isLocal) {
    episodeInfo = mock_data.episode[season];
  } else {
    const querySnapshot = await getDocs(collections.episode_info[season]);
    episodeInfo = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

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

export async function getImageDownloadUrl() {
  getDownloadURL(ref(storage, "meme_life/image/1002.jpg"))
    .then((url) => {
      console.log(url);
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = "blob";
      // xhr.onload = (event) => {
      //   const blob = xhr.response;
      // };
      // xhr.open("GET", url);
      // xhr.send();
    })
    .catch((error) => {
      // Handle any errors
    });
}
