import { IProjectProps } from "@/constants/project";
import { atom } from "recoil";

export const projectFilterState = atom<string[] | []>({
  key: 'projectFilterState',
  default: [],
});

export const isOpenProjectState = atom<IProjectProps | undefined>({
  key: 'isOpenProjectState',
  default: undefined,
});