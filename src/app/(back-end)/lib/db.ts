import pkg from "pg";
import { DATA_LIMIT } from "../../lib/data";
import { PrismaClient } from "@prisma/client";

// export const prismaClient = new PrismaClient({ log: ["info", "query"] });
export const prismaClient = new PrismaClient();

/**
 *
 * @param current_page 현재 페이지 번호
 * @param limit 데이터 제한 개수
 * @returns
 */
export function offset_limit(
  current_page: number | null,
  limit: number = DATA_LIMIT,
) {
  if (current_page) return ` OFFSET ${current_page - 1 * limit} limit ${limit}`;
  return "";
}

export function get_row_count() {}
