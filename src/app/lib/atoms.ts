import { atom } from "recoil";
import { MemeLifeInterface } from "./types";

export const StateDrawerOpen = atom<boolean>({
  key: "state_drawer_open",
  default: false,
});
export const StateImageCard = atom<MemeLifeInterface | null>({
  key: "state_image_card",
  default: null,
});
