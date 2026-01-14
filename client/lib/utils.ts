import { DUMMY_GENRES } from "@/data/dummy-genres";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGenreSlugByName = (name: string) => {
  return DUMMY_GENRES.find((g) => g.name.toLowerCase() === name.toLowerCase())
    ?.slug;
};
