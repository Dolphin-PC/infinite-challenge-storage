// "use client";

import { QueryFunction } from "@tanstack/react-query";
import {
  MemeLifeInterface,
  PageType,
  SearchInterface,
  SearchType,
} from "./types";

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

/**
 * 페이지 객체 생성
 * @param currentPage - 현재 페이지 번호
 * @param totalLength - 데이터의 전체 길이
 * @param limit       - 데이터 제한 개수
 * @returns PageType
 */
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

export const useInfiniteQueryOptions = {
  initialPageParam: 1,
  getNextPageParam: (lastPage, allPages) => lastPage.page.nextPage,
  staleTime: 1000 * 60 * 60,
};

// export const fetcher = async (url: string, searchParams: SearchInterface) => {
//   let params = Object.entries(searchParams)
//     .map(([key, value]) => key + "=" + value)
//     .join("&");
//   url += "?" + params;
//   return fetch(url).then((r) => r.json());
// };
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * 클립보드 텍스트 복사
 * @param str 복사할 텍스트
 * @returns
 */
export async function copyString(str: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(str);

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function getImageUrltoObject(img_src: string): Promise<Blob> {
  const response = await fetch(img_src, {});

  const blobImage = await response.blob();
  return blobImage;
}

export async function downloadImage(
  imageSrc: string,
  nameOfDownload: string = "my-image.png",
): Promise<boolean> {
  try {
    const blobImage = await getImageUrltoObject(imageSrc);

    const href = URL.createObjectURL(blobImage);

    const anchorElement = document.createElement("a");
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;

    document.body.appendChild(anchorElement);
    anchorElement.click();

    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export function makeImageFileName(key: string, src: string) {
  let ext = src.split(".").at(-1)?.split("?")[0];

  if (!["png", "jpg", "gif"].includes(ext || "")) ext = "";

  return key + "." + ext;
}

export function kakaoInit() {
  window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  console.log("kakao init");
}
export function kakaoShare(data: MemeLifeInterface) {
  const { card_key } = data;
  let params = [`key=${card_key}`];
  const SITE_URL = process.env.NEXT_PUBLIC_HOME_SITE_URL;
  const SITE_PORT = process.env.NEXT_PUBLIC_HOME_SITE_PORT;

  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "무도 짤",
      description: data.alt,
      imageUrl: data.img_src,
      link: {
        mobileWebUrl: `${SITE_URL}:${SITE_PORT}/meme_life?` + params.join("&"),
        webUrl: `${SITE_URL}:${SITE_PORT}/meme_life?` + params.join("&"),
      },
    },
  });
}

/**
 * api 호출용 문자열 생성
 * @param url api pathname
 * @param prmObj api parameter
 * @returns
 */
export function makeUrlParam(url: string, prmObj: SearchInterface) {
  let prm: string[] = [];
  Object.entries(prmObj).forEach(([key, value]) => {
    if (value) {
      prm.push(key + "=" + value);
    }
  });

  return [url, prm.join("&")].join("?");
}
