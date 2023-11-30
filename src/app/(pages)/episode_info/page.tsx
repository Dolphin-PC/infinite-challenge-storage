import SeasonSelect from "@/app/(pages)/episode_info/SeasonSelect";
import { getSeasonInfo } from "@/app/lib/firestore";
import { SearchType } from "@/app/lib/types";
import { Paper, Skeleton, Typography } from "@mui/material";
import EpisodeTab from "./EpisodeTab";
import { EpisodeWrapper } from "./EpisodeCard";
import { Divider_2_4 } from "@/app/components/Dividers";

export default async function page({ searchParams }: SearchType) {
  const seasonInfo = await getSeasonInfo(searchParams?.season);

  return (
    <div className="w-full">
      <SeasonSelect url_season={searchParams?.season} />
      {/* 상세정보 */}
      <EpisodeTab seasonInfo={seasonInfo} />

      <div id="tab-panel-container">
        {seasonInfo.map((_season, i) => {
          const { season, actor, description, outline, title } = _season;
          return (
            <div key={i} id={`tab-panel-${i}`}>
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">{title}</Typography>
                <Divider_2_4 />
                <div className="flex w-full">
                  <Skeleton variant="rounded" width={200} height={300} />
                  <div className="pl-4">
                    <small>{description}</small>
                    <div className="mt-4 flex">
                      <div className="w-3/12">
                        <p>개요</p>
                        <p>출연</p>
                      </div>
                      <div className="w-9/12">
                        <p>{outline}</p>
                        <p>{actor.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>

              {/* 에피소드 */}
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">에피소드</Typography>

                <Divider_2_4 />
                {/* <Suspense fallback={<p>loading...</p>}> */}
                <EpisodeWrapper season={season} search={searchParams?.search} />
                {/* </Suspense> */}
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
