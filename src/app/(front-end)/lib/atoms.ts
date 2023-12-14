import { atom } from "recoil";
import { MemeType, MemeLifeInterface } from "../../lib/types";

export const StateDrawerOpen = atom<boolean>({
  key: "state_drawer_open",
  default: false,
});

export const StateImageCard = atom<MemeType | null>({
  key: "state_image_card",
  default: null,
  effects: [({ onSet, setSelf }: any) => {}],
});
