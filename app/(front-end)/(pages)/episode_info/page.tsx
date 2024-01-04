import SeasonSelect from '@/app/(front-end)/(pages)/episode_info/SeasonSelect'
import { SearchInterface } from '@/app/lib/types'
import { Box, Paper, Typography } from '@mui/material'
import EpisodeTab from './EpisodeTab'
import { EpisodeWrapper } from './EpisodeCard'
import { Divider_2_4 } from '@/app/(front-end)/components/Dividers'
import { getSeasonInfoList } from '@/app/(back-end)/lib/services/episodeService'
import SeasonCard from './SeasonCard'

export default async function page({
  searchParams
}: {
  searchParams: SearchInterface
}) {
  const seasonInfo = await getSeasonInfoList(searchParams?.season)

  return (
    <div className="w-full">
      <SeasonSelect url_season={searchParams?.season} />
      {/* 상세정보 */}
      <EpisodeTab seasonInfo={seasonInfo} />

      <div id="tab-panel-container">
        {seasonInfo.map((ssn, i) => {
          return (
            <Box
              key={i}
              id={`tab-panel-${i}`}
              className={i > 0 ? 'hidden' : ''}>
              <SeasonCard seasonInfo={ssn} />

              {/* 에피소드 */}
              <Paper elevation={3} className="mt-2 p-5">
                <Typography variant="h5">에피소드</Typography>

                <Divider_2_4 />
                <EpisodeWrapper
                  season={ssn.season}
                  search={searchParams?.search}
                />
              </Paper>
            </Box>
          )
        })}
      </div>
    </div>
  )
}
