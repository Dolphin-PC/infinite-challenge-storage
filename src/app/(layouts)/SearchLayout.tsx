import SearchBar from "@/app/components/SearchBar";
import { Stack } from "@mui/material";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Stack gap={2}>
        <SearchBar />
        {children}
      </Stack>
    </div>
  );
}
