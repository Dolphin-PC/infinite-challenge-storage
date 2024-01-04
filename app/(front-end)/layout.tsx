import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style/globals.css'
import Sidenav from './components/layout/Sidenav'
import {
  getInitialColorMode,
  setColorMode,
  setInitialColorMode
} from '../lib/util'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Providers from './providers'
import { ReactNode } from 'react'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '무한도전 저장소',
    default: '무한도전 저장소'
  },
  description: '우리가 사랑한 무한도전 정보를 모아둔 저장소 사이트입니다.'
}

// body태그에 "dark" class 추가 여부 함수
const ScriptTag = () => {
  const codeToRunOnClient = `(function() {
    ${getInitialColorMode.toString()}
    ${setInitialColorMode.toString()}
    ${setColorMode.toString()}
    (${setInitialColorMode})()
  })()`
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="kr">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ScriptTag />
        <Providers>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <Sidenav />
            </div>
            <div id="layout" className="flex-grow md:overflow-scroll">
              {props.children}
            </div>
          </div>
          <div id="toast"></div>
          <div id="loading"></div>
        </Providers>
      </body>
    </html>
  )
}
