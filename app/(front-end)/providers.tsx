'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import { SWRDevTools } from 'swr-devtools'
import { RecoilRoot, useRecoilState } from 'recoil'
import { StateColorMode } from './lib/atoms'
import { ThemeProvider } from 'styled-components'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { dark_theme, light_theme } from './style/mui.theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <SWRDevTools>
        <RecoilRoot>
          <AppRouterCacheProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </AppRouterCacheProvider>
        </RecoilRoot>
      </SWRDevTools>
    </QueryClientProvider>
  )
}

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, _] = useRecoilState(StateColorMode)

  return (
    <ThemeProvider theme={colorMode == 'dark' ? dark_theme : light_theme}>
      {children}
    </ThemeProvider>
  )
}
