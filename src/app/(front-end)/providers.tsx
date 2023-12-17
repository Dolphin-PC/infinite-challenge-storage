"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  custom_theme,
  dark_theme,
  getDesignTokens,
  getTheme,
  light_theme,
} from "./style/mui.theme";
import { SWRDevTools } from "swr-devtools";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { getInitialColorMode } from "../lib/util";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { StateColorMode } from "./lib/atoms";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  // const [theme, setTheme] = useState<"light" | "dark">("light");
  // useEffect(() => {
  //   setTheme(getInitialColorMode());
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SWRDevTools>
        <RecoilRoot>
          <ThemeWrapper>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </ThemeWrapper>
        </RecoilRoot>
      </SWRDevTools>
    </QueryClientProvider>
  );
}

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, _] = useRecoilState(StateColorMode);

  return (
    <ThemeProvider theme={colorMode == "dark" ? dark_theme : light_theme}>
      {children}
    </ThemeProvider>
  );
};
