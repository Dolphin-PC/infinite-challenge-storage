'use client'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { ListResType, MemeType, SearchInterface } from '../../../lib/types'
import { ReactNode, memo, useEffect } from 'react'
import { useSpyScroll } from '../../lib/hooks'
import NothingSearch from '../../components/NothingSearch'
import { useSetRecoilState } from 'recoil'
import { StateDrawerOpen, StateImageCard } from '@/app/(front-end)/lib/atoms'
import clsx from 'clsx'
import { ImageCard_Drawer } from './DrawerDetail'
import { fetcher, makeUrlParam } from '@/app/lib/util'
import useSWRInfinite from 'swr/infinite'
import { Toast } from '../../components/Toasts'

export function ImageCardWrapper({
  searchParams
}: {
  searchParams: SearchInterface
}) {
  const {
    data: memeInfos,
    size,
    setSize,
    isLoading
  } = useSWRInfinite<ListResType<MemeType[]>>(
    (pageIndex: number, previousPageData: ListResType<MemeType[]>) => {
      if (previousPageData && !previousPageData.data.length) return null

      return makeUrlParam('/api/meme', {
        page: pageIndex + 1,
        search: searchParams.search
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
  }, [isBottom, setSize, size, setIsBottom])

  if (isLoading)
    return (
      <>
        <ImageCard_Skeleton count={10} />
        <Toast message="로딩 중입니다." init_show={true} />
      </>
    )

  let totalCnt = memeInfos?.[0]?.tot_cnt
  if (totalCnt == 0) return <NothingSearch />
  return (
    <div>
      <Typography variant="caption">총 {totalCnt}개</Typography>
      <StackLayout>
        {memeInfos
          ?.flatMap((ele) => ele.data)
          .map((meme, i) => {
            return (
              <ImageCard key={i} data={meme} searchText={searchParams.search} />
            )
          })}
      </StackLayout>
      <ImageCard_Drawer />
    </div>
  )
}

const ImageCard = memo(function ImageCard({
  data,
  searchText
}: {
  data: MemeType
  searchText: string | undefined
}) {
  const setDrawerOpen = useSetRecoilState(StateDrawerOpen)
  const setImageCardState = useSetRecoilState(StateImageCard)
  // const { addParams } = useParameter();

  function handleClick() {
    setImageCardState(data)
    setDrawerOpen(true)
    // addParams("key", data.card_key);
  }
  return (
    <Card className="w-5/12 md:w-3/12" onClick={handleClick}>
      <CardMedia image={data.img_src} sx={{ height: 200 }} />
      <CardContent>
        {data.tag.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            className="m-1"
            color={
              searchText && tag.includes(searchText) ? 'primary' : 'default'
            }
          />
        ))}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  )
})

const ImageCard_Skeleton = memo(function ImageCard_Skeleton({
  count = 3
}: {
  count: number
}) {
  return (
    <StackLayout>
      {Array(count)
        .fill(0)
        .map((v, i) => (
          <Card key={i} className="w-5/12 md:w-3/12">
            <Skeleton variant="rectangular" height={200} className="w-full" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="rectangular" width={210} height={30} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={50} height={30} />
              <Skeleton variant="rectangular" width={50} height={30} />
            </CardActions>
          </Card>
        ))}
    </StackLayout>
  )
})

const StackLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      gap={3}
      flexWrap="wrap"
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch">
      {children}
    </Stack>
  )
}
