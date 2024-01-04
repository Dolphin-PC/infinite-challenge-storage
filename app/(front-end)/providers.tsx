'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { SWRDevTools } from 'swr-devtools'
import { RecoilRoot, useRecoilState } from 'recoil'
import { StateColorMode } from './lib/atoms'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { dark_theme, getDesignTokens, light_theme } from './style/mui.theme'
import { Theme, ThemeProvider } from '@mui/material'

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
  const [theme, setTheme] = useState<Theme>(light_theme)

  useEffect(() => {
    if (colorMode == 'dark') setTheme(dark_theme)
    else setTheme(light_theme)
  }, [colorMode])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
