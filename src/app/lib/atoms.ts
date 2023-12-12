import { atom } from "recoil";
import { MemeInterface, MemeLifeInterface } from "./types";

export const StateDrawerOpen = atom<boolean>({
  key: "state_drawer_open",
  default: false,
});

export const StateImageCard = atom<MemeInterface | null>({
  key: "state_image_card",
  default: null,
  effects: [({ onSet, setSelf }: any) => {}],
});
