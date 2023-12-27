import { STATUS_CODE } from "@/app/lib/data";
import { prismaClient } from "@/app/(back-end)/lib/db";
import { API_RES_MemeType, MemeType } from "@/app/lib/types";
import { STATUS_CODES } from "http";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse<API_RES_MemeType>> {
  const id = params.id;

  let row: MemeType | null = await prismaClient.meme_info.findFirst({
    where: {
      id: {
        equals: Number(id),
      },
    },
  });
  let status = STATUS_CODE.NO_CONTENT;

  if (row) status = STATUS_CODE.OK;
  return NextResponse.json({ data: row }, { status: status });
}
