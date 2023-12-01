// "use client";

import { PageType } from "./types";

// 초기 테마를 설정하는 함수
export function setInitialColorMode(): void {
  //현재 테마 모드
  setColorMode(getInitialColorMode());
}

export function setColorMode(mode: "light" | "dark"): void {
  const element = document.body;
  if (mode === "dark") {
    localStorage.setItem("theme", "dark");
    element.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    element.classList.remove("dark");
  }
}

// 로컬스토리지 or 시스템모드 에서 'theme' 값 가져오기
export function getInitialColorMode(): "light" | "dark" {
  const persistedPreferenceMode = window.localStorage.getItem("theme");
  const hasPersistedPreference =
    typeof persistedPreferenceMode === "string" &&
    ("dark" === persistedPreferenceMode || "light" === persistedPreferenceMode);

  if (hasPersistedPreference) return persistedPreferenceMode;

  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof preference.matches === "boolean";

  if (hasMediaQueryPreference) {
    return preference.matches ? "dark" : "light";
  }

  return "light";
}

export const getPageObj = (
  currentPage?: number,
  totalLength: number = 0,
  limit: number = 5,
): PageType => {
  let nextPage = undefined;
  if (currentPage) {
    if (currentPage * limit < totalLength) {
      nextPage = currentPage + 1;
    }
  }
  return {
    nextPage: nextPage,
    totalPage: Math.ceil(totalLength / limit),
    totalCnt: totalLength,
  };
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useInfiniteQueryOptions = {
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) => lastPage.page.nextPage,
  staleTime: 1000 * 60 * 60,
};
