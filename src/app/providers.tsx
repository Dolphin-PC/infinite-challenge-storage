"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SWRConfig } from "swr";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <SWRConfig value={{ suspense: true }}>{children}</SWRConfig> */}
      {children}
    </QueryClientProvider>
  );
}
