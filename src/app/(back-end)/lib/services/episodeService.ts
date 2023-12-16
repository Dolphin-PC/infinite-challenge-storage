import { SeasonInterface } from "@/app/lib/types";
import { prismaClient } from "../db";
import { DATA_LIMIT } from "@/app/lib/data";

/**
 * 시즌 정보 목록 조회
 * @param season
 * @returns
 */
export const getSeasonInfoList = async (
  season?: string,
): Promise<SeasonInterface[]> => {
  const rows = await prismaClient.season_info.findMany({
    where: {
      season: {
        equals: season,
      },
    },
  });

  return rows;
};

/**
 * 해당 시즌의 에피소드 목록 조회
 * @param season
 * @param search
 * @param pageNumber
 */
export const getEpisodeInfoList = async (
  season: string | null,
  search: string | null,
  pageNumber: number,
) => {
  if (!season) season = "";
  if (!search) search = "";
  if (!pageNumber) pageNumber = 1;

  const condition = {
    where: {
      season: {
        contains: season,
      },
      AND: {
        OR: [{ actor: { has: search } }, { title: { contains: search } }],
      },
    },
    skip: (pageNumber - 1) * DATA_LIMIT,
    take: DATA_LIMIT,
  };
  let rows = await prismaClient.episode_info.findMany(condition);
  let rowCount = await prismaClient.episode_info.count(condition);

  return { rows, rowCount };
};
