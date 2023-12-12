import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { MemeInterface, MemeLifeInterface, PageType } from "@/app/lib/types";
import { offset_limit, prismaClient } from "@/app/lib/db";
import { getPageObj } from "@/app/lib/util";
import { DATA_LIMIT } from "@/app/lib/data";

export async function GET(
  request: Request,
): Promise<NextResponse<{ rows: MemeInterface[]; page: PageType }>> {
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

  let rows: MemeInterface[] = await prismaClient.meme_info.findMany(condition);
  let rowCount = await prismaClient.meme_info.count({ where: condition.where });

  const pageObject = getPageObj(pageNumber, rowCount, DATA_LIMIT);

  return NextResponse.json({ rows, page: pageObject });
}
