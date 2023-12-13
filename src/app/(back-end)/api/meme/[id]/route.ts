import { STATUS_CODE } from "@/app/lib/data";
import { prismaClient } from "@/app/(back-end)/lib/db";
import { MemeInterface } from "@/app/lib/types";
import { STATUS_CODES } from "http";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse<{ row: MemeInterface | null }>> {
  const id = params.id; // 'a', 'b', or 'c'

  let row: MemeInterface | null = await prismaClient.meme_info.findFirst({
    where: {
      id: {
        equals: Number(id),
      },
    },
  });
  let status = STATUS_CODE.NO_CONTENT;
  if (row) status = STATUS_CODE.OK;
  return NextResponse.json({ row }, { status: status });
}
