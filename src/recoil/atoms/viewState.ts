import { atom } from "recoil";

export const menuState = atom<string>({
    key: "menuState",
    default: "intro",
});

export const projectState = atom<string>({
    key: "projectState",
    default: "lin",
});

export const imageModalState = atom<number | null>({
    key: "imageModalState",
    default: null,
});
