import { atom } from "recoil";
import { MemeType, MemeLifeInterface } from "../../lib/types";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      // setSelf -> Callbacks to set or reset the value of the atom.
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      // onSet -> Subscribe to changes in the atom value.
      onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const StateDrawerOpen = atom<boolean>({
  key: "state_drawer_open",
  default: false,
});

export const StateImageCard = atom<MemeType | null>({
  key: "state_image_card",
  default: null,
  effects: [({ onSet, setSelf }: any) => {}],
});

export const StateColorMode = atom<"light" | "dark">({
  key: "state_color_mode",
  default: "light",
  effects: [localStorageEffect("theme")],
});
