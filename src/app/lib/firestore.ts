const isLocal = true;

import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../../firebase.config";
import { DataType } from "./types";
import { mock_data } from "./mock_data";

const db = getFirestore(app);

const collections = {
  meme_life: collection(db, "meme_life"),
};

export const getData = async (): Promise<DataType[]> => {
  const querySnapshot = await getDocs(collections.meme_life);
  let res: DataType[] = [];

  if (isLocal) {
    res = mock_data.meme_life;
  } else {
    res = querySnapshot.docs.map((doc: DocumentData) => doc.data());
  }

  return res;
};
