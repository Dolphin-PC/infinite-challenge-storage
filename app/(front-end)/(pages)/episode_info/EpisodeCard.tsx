'use client'
import { EpisodeInterface, ListResType } from '@/app/lib/types'
import { Paper, Skeleton, Stack, Typography } from '@mui/material'
import { useSpyScroll } from '@/app/(front-end)/lib/hooks'
import { memo, useEffect } from 'react'
import Image from 'next/image'
import { Divider_2_4 } from '@/app/(front-end)/components/Dividers'
import useSWRInfinite from 'swr/infinite'
import { fetcher, makeUrlParam } from '@/app/lib/util'
import { DATA_LIMIT } from '@/app/lib/data'
import { Toast } from '../../components/Toasts'
export const EpisodeWrapper = ({
  season,
  search
}: {
  season: string
  search?: string
}) => {
  const {
    data: episodeDataList,
    isLoading,
    size,
    setSize,
    isValidating
  } = useSWRInfinite<ListResType<EpisodeInterface[]>>(
    (page: number, previousPageData: ListResType<EpisodeInterface[]>) => {
      if (previousPageData && previousPageData.data.length < DATA_LIMIT)
        return null

      return makeUrlParam('/api/episode/list', {
        page: page + 1,
        season,
        search
      })
    },
    fetcher,
    { revalidateFirstPage: false }
  )

  const { isBottom, setIsBottom } = useSpyScroll('layout')
  useEffect(() => {
    if (isBottom) {
      setSize(size + 1)
      setIsBottom(false)
    }
  }, [isBottom])

  const dataCount = episodeDataList?.flatMap((ele) => ele.data).length

  if (dataCount == 0)
    return <Typography>검색결과가 존재하지 않습니다.</Typography>
  return (
    <Stack
      flexWrap="wrap"
      direction="row"
      rowGap={1}
      className="w-full"
      id={`episode-${season}-container`}>
      {isLoading
        ? Array(2)
            .fill(0)
            .map((_, i) => <EpisodeCard_Skeleton key={i} />)
        : episodeDataList
            ?.flatMap((ele) => ele.data)
            .map((episode, i) => {
              return <EpisodeCard key={i} data={episode} />
            })}

      <Toast init_show={isValidating} message="로딩 중입니다." />
    </Stack>
  )
}

const EpisodeCard = memo(function EpisodeCard({
  data
}: {
  data: EpisodeInterface
}) {
  return (
    <div className="w-full lg:w-6/12">
      <Paper className="m-2 flex flex-wrap p-2">
        <div className="w-6/12">
          <Image
            width={300}
            height={300}
            className="mb-2 w-full"
            src={data.img_src}
            alt={data.description ?? ''}
            priority
          />
          {/* <Skeleton variant="rounded" height={100} className="mb-2 w-full" /> */}
        </div>
        <div className="w-6/12 pl-4">
          <Typography variant="h6">{data.title}</Typography>
          <Typography variant="subtitle2">
            방영일 : {data.air_date}, {data.air_time}
          </Typography>
          <Divider_2_4 />
          <Typography className="line-clamp-4">{data.description}</Typography>
        </div>
        <div className="w-full">
          <Typography variant="body2">
            출연 : {data.actor.join(', ')}
          </Typography>
        </div>
      </Paper>
    </div>
  )
})

const EpisodeCard_Skeleton = () => {
  return (
    <div className="w-full lg:w-6/12">
      <Paper className="m-2 flex flex-wrap p-2">
        <div className="w-6/12">
          {/* <Divider_2_4 /> */}
          <Skeleton height={300} variant="rounded" />
        </div>
        <div className="w-6/12 pl-4">
          <Typography variant="h6">
            <Skeleton variant="text" />
          </Typography>
          <Typography variant="subtitle2">
            <Skeleton variant="text" />
          </Typography>
          <Divider_2_4 />
          <Typography className="line-clamp-4">
            <Skeleton variant="text" />
          </Typography>
        </div>
        <div className="w-full">
          <Typography variant="body2">
            <Skeleton variant="text" />
          </Typography>
        </div>
      </Paper>
    </div>
  )
}
