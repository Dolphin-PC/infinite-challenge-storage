import { getEpisodeInfoList } from "@/app/(back-end)/lib/services/episodeService";
import { ListResType, EpisodeInterface } from "@/app/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
): Promise<NextResponse<ListResType<EpisodeInterface[]>>> {
  const season = req.nextUrl.searchParams.get("season");
  const search = req.nextUrl.searchParams.get("search");
  const page = Number(req.nextUrl.searchParams.get("page") || "1");

  const { rows, rowCount } = await getEpisodeInfoList(season, search, page);

  console.log("rows 요청", season);

  return NextResponse.json({ data: rows, tot_cnt: rowCount });
}
