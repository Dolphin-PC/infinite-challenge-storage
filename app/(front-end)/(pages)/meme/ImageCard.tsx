'use client'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Typography
} from '@mui/material'
import { ListResType, MemeType, SearchInterface } from '../../../lib/types'
import { ReactNode, memo, useEffect } from 'react'
import { useSpyScroll } from '../../lib/hooks'
import NothingSearch from '../../components/NothingSearch'
import { useSetRecoilState } from 'recoil'
import { StateDrawerOpen, StateImageCard } from '@/app/(front-end)/lib/atoms'
import { ImageCard_Drawer } from './ImageCardDetail'
import { fetcher, makeUrlParam } from '@/app/lib/util'
import useSWRInfinite from 'swr/infinite'
import { Toast } from '../../components/Toasts'
import Image from 'next/image'
import clsx from 'clsx'

export function ImageCardWrapper({
  searchParams
}: {
  searchParams: SearchInterface
}) {
  const {
    data: memeInfos,
    size,
    setSize,
    isLoading,
    isValidating
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
      setIsBottom(false)
      setSize(size + 1)
    }
  }, [isBottom])

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
      <small>총 {totalCnt}개</small>
      <StackLayout>
        {memeInfos
          ?.flatMap((ele) => ele.data)
          .map((meme, i) => {
            return (
              <ImageCard key={i} data={meme} searchText={searchParams.search} />
            )
          })}
      </StackLayout>

      {isValidating ? <Toast message="로딩 중입니다." init_show={true} /> : ''}
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

  function handleClick() {
    setImageCardState(data)
    setDrawerOpen(true)
  }
  return (
    <Card className="w-5/12 md:w-3/12" onClick={handleClick}>
      <div className="relative rounded-md w-full h-60 overflow-hidden">
        <Image
          src={data.img_src}
          fill={true}
          sizes="33vw"
          style={{ objectFit: 'cover' }}
          alt={data.alt ?? ''}
          priority={true}
        />
      </div>
      <CardContent className="flex flex-wrap gap-2">
        {data.tag.map((tag) => {
          return (
            <Chip
              key={tag}
              label={tag}
              color={
                searchText && tag.includes(searchText) ? 'primary' : 'default'
              }
            />
          )
        })}
      </CardContent>
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
          </Card>
        ))}
    </StackLayout>
  )
})

const StackLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-wrap gap-3 flex-row justify-start items-stretch">
      {children}
    </div>
  )
}
