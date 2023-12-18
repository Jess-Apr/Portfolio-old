import { atom } from "recoil";

export const menuState = atom<string>({
  key: "menuState",
  default: "intro",
});
