"use client";

import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { custom_theme } from "./style/mui.theme";
import { SWRDevTools } from "swr-devtools";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SWRDevTools>
        <ThemeProvider theme={custom_theme}>{children}</ThemeProvider>
      </SWRDevTools>
    </QueryClientProvider>
  );
}
