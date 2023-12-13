import { STATUS_CODE } from "@/app/lib/data";
import { API_RES_MemeType } from "@/app/lib/types";
import { fetcher } from "@/app/lib/util";
import { NextResponse } from "next/server";

/**
 * /api/meme/${id}
 * @param id
 * @returns
 */
export async function memeByOne(id: number | string) {
  return await fetcher("/api/meme/" + id)
    .then((res: API_RES_MemeType) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}
