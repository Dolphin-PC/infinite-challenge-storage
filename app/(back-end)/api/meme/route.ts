import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import {
  MemeType,
  MemeLifeInterface,
  PageType,
  ListResType,
} from "@/app/lib/types";
import { offset_limit, prismaClient } from "@/app/(back-end)/lib/db";
import { getPageObj } from "@/app/lib/util";
import { DATA_LIMIT } from "@/app/lib/data";

export async function GET(
  request: Request,
): Promise<NextResponse<ListResType<MemeType[]>>> {
  const searchParams = new URL(request.url).searchParams;
  const searchText: string | null = searchParams.get("search");
  const pageNumber: number = Number(searchParams.get("page")) || 1;

  const condition = {
    where: {
      alt: {
        contains: searchText ?? "",
      },
    },
    skip: (pageNumber - 1) * DATA_LIMIT,
    take: DATA_LIMIT,
  };

  let rows: MemeType[] = await prismaClient.meme_info.findMany(condition);
  let rowCount = await prismaClient.meme_info.count({ where: condition.where });

  return NextResponse.json({ data: rows, tot_cnt: rowCount });
}
