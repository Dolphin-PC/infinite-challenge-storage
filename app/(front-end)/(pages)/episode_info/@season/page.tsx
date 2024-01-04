import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { getSeasonInfoList } from '@/app/(back-end)/lib/services/episodeService'
import { SearchInterface } from '@/app/lib/types'
import { Divider_2_4 } from '@/app/(front-end)/components/Dividers'
import { EpisodeWrapper } from '../EpisodeCard'
import EpisodeTab from '../EpisodeTab'
import SeasonCard from '../SeasonCard'

export default async function SeasonEpisodeBox({
  searchParams
}: {
  searchParams: SearchInterface
}) {
  const seasonInfo = await getSeasonInfoList(searchParams?.season)

  return (
    <>
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
                  search={searchParams.search}
                />
              </Paper>
            </Box>
          )
        })}
      </div>
    </>
  )
}
