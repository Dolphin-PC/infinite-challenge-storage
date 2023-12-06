import SeasonSelect from "@/app/(pages)/episode_info/SeasonSelect";
import { getSeasonInfo } from "@/app/lib/firestore";
import { SearchType } from "@/app/lib/types";
import { Paper, Skeleton, Typography } from "@mui/material";
import EpisodeTab from "./EpisodeTab";
import { EpisodeWrapper } from "./EpisodeCard";
import { Divider_2_4 } from "@/app/components/Dividers";
import Image from "next/image";
import { IconLink } from "@/app/lib/icons";

export default async function page({ searchParams }: SearchType) {
  const seasonInfo = await getSeasonInfo(searchParams?.season);

  return (
    <div className="w-full">
      <SeasonSelect url_season={searchParams?.season} />
      {/* 상세정보 */}
      <EpisodeTab seasonInfo={seasonInfo} />

      <div id="tab-panel-container">
        {seasonInfo.map((ssn, i) => {
          return (
            <div
              key={i}
              id={`tab-panel-${i}`}
              className={i > 0 ? "hidden" : ""}
            >
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">{ssn.title}</Typography>
                <Divider_2_4 />
                <div className="flex w-full">
                  <div className="w-3/12">
                    <Image
                      src={ssn.img_url}
                      alt={ssn.season}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      priority
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex w-9/12 flex-col justify-between pl-4">
                    <div>
                      <Typography variant="h5">{ssn.description}</Typography>
                      <div className="mt-4 flex">
                        <div className="mr-4">
                          <Typography variant="h6">개요</Typography>
                          <Typography variant="h6">출연</Typography>
                        </div>
                        <div className="w-9/12">
                          <Typography variant="h6">{ssn.outline}</Typography>
                          <Typography variant="h6">
                            {ssn.actor.join(", ")}
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="flex rounded-lg bg-primary p-3 text-white"
                        href={ssn.view_url}
                        target="_blank"
                      >
                        <div className="mr-2">
                          <IconLink />
                        </div>
                        다시보기 링크
                      </a>
                    </div>
                  </div>
                </div>
              </Paper>

              {/* 에피소드 */}
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">에피소드</Typography>

                <Divider_2_4 />
                <EpisodeWrapper
                  season={ssn.season}
                  search={searchParams?.search}
                />
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
