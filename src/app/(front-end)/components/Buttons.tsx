import { ReactNode, memo, useEffect, useState } from 'react'
import {
  copyString,
  downloadImage,
  getImageUrltoObject,
  kakaoInit,
  kakaoShare
} from '../../lib/util'
import { AutoToasts, ToastsPortal } from './Toasts'
import { Button, Typography } from '@mui/material'
import Script from 'next/script'
import { MemeType, MemeLifeInterface } from '../../lib/types'

export const ButtonUrlCopy = ({ url }: { url: string }): ReactNode => {
  const [show, setShow] = useState(false)

  function handleClick() {
    copyString(url).then((is) => {
      if (is) setShow(true)
    })
  }
  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      <ToastsPortal>
        {show && (
          <AutoToasts severity="success" setShow={setShow}>
            <Typography variant="body1">URL이 복사되었습니다.</Typography>
          </AutoToasts>
        )}
      </ToastsPortal>
      <div className="flex flex-col items-center">
        {/* link icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4v2Zm-3-4v-2h8v2H8Zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17h-4Z"
          />
        </svg>
        <p className="m-1">URL복사</p>
      </div>
    </Button>
  )
}

export const ButtonDownLoad = ({
  img_src,
  file_name
}: {
  img_src: string
  file_name: string
}): ReactNode => {
  const [show, setShow] = useState(false)

  async function handleClick() {
    downloadImage(img_src, file_name).then((is) => {
      if (is) setShow(true)
    })
  }
  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      <ToastsPortal>
        {show && (
          <AutoToasts severity="success" setShow={setShow}>
            <Typography variant="body1">다운로드가 완료되었습니다.</Typography>
          </AutoToasts>
        )}
      </ToastsPortal>
      <div className="flex flex-col items-center">
        {/* download icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20H6Z"
          />
        </svg>
        <p className="m-1">다운로드</p>
      </div>
    </Button>
  )
}

declare global {
  interface Window {
    Kakao: any
  }
}
export const ButtonKakaoShare = ({ data }: { data: MemeType }): ReactNode => {
  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
        onLoad={kakaoInit}></Script>
      <Button
        variant="contained"
        color="primary"
        onClick={() => kakaoShare(data)}>
        <div className="flex flex-col items-center">
          {/* kakao talk icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 3c5.8 0 10.501 3.664 10.501 8.185c0 4.52-4.701 8.184-10.5 8.184a13.51 13.51 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866c0-4.52 4.7-8.185 10.5-8.185Zm5.908 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.472.472 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413l1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155Zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944Zm-5.857-1.091l.696-1.708l.638 1.707H9.093Zm2.523.487l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474a.696.696 0 0 0-.653.447l-1.662 4.075a.472.472 0 0 0 .874.357l.332-.813h2.07l.298.8a.472.472 0 1 0 .884-.33l-.345-.926ZM8.294 9.302a.472.472 0 0 0-.471-.472H4.578a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14a.472.472 0 0 0 .472-.472Z"
            />
          </svg>
          <p className="m-1">공유하기</p>
        </div>
      </Button>
    </>
  )
}
