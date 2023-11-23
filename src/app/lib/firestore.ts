import {
  DocumentData,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../../firebase.config";
import { DataType } from "./types";

const db = getFirestore(app);

const collections = {
  meme_life: collection(db, "meme_life"),
};

export const getData = async (): Promise<DataType[]> => {
  const querySnapshot = await getDocs(collections.meme_life);
  const res: DataType[] = querySnapshot.docs.map((doc: DocumentData) =>
    doc.data(),
  );

  return res;
};
