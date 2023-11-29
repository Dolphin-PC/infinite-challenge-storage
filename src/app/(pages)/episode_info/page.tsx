import SeasonSelect from "@/app/components/SeasonSelect";
import { getEpisodeInfo } from "@/app/lib/firestore";
import { EpisodeInfoInterface, SearchType } from "@/app/lib/types";
import { Divider, Paper, Skeleton, Stack, Typography } from "@mui/material";
import EpisodeTab from "./EpisodeTab";

export default async function page({ searchParams }: SearchType) {
  const data = await getEpisodeInfo(searchParams?.search, searchParams?.season);

  return (
    <div className="w-full">
      <SeasonSelect />
      {/* 상세정보 */}
      <EpisodeTab seasonList={data} />
      <Divider className="mb-4 " />

      <div id="tab-panel-container">
        {data.map((d, i) => {
          const { info, episode_info } = d;
          return (
            <div key={info.season} id={`tab-panel-${i}`}>
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">{info.title}</Typography>
                <div className="flex w-full">
                  <Skeleton variant="rounded" width={200} height={300} />
                  <div className="pl-4">
                    <small>{info.description}</small>
                    <div className="mt-4 flex">
                      <div className="w-3/12">
                        <p>개요</p>
                        <p>출연</p>
                      </div>
                      <div className="w-9/12">
                        <p>{info.outline}</p>
                        <p>{info.actor.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Divider className="mb-4 mt-4" />

                {/* 에피소드 */}
                <Typography variant="h5">에피소드</Typography>
                <Stack
                  flexWrap="wrap"
                  direction="row"
                  rowGap={1}
                  className="w-full"
                >
                  {episode_info.map((episode) => {
                    return <EpisodeCard key={episode.air_date} {...episode} />;
                  })}
                </Stack>
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const EpisodeCard = (props: EpisodeInfoInterface) => {
  return (
    <div className="flex w-full lg:w-6/12">
      <div className="w-6/12">
        <Skeleton variant="rounded" height={100} className="w-full" />
        <Typography variant="body2">출연 : {props.actor.join(", ")}</Typography>
      </div>
      <div className="w-6/12 pl-4">
        <Typography variant="h6">{props.title}</Typography>
        <small>방영일 : {props.air_date}</small>
      </div>
    </div>
  );
};
