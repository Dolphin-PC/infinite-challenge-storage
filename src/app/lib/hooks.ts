import { useEffect, useState } from "react";
import { getInitialColorMode, setColorMode } from "./util";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { DebouncedState, useDebouncedCallback } from "use-debounce";

export const useDarkMode = (): [boolean, Function] => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    const mode = getInitialColorMode();
    setChecked(mode === "dark");
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let check = event.target.checked;
    setChecked(check);
    setColorMode(check ? "dark" : "light");
  };

  return [checked, handleChange];
};

export const useSearch = (): {
  searchParams: ReadonlyURLSearchParams;
  handleSearch: DebouncedState<(term: string) => void>;
  searchText: string | null;
} => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchText = searchParams.get("search");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    term ? params.set("search", term) : params.delete("search");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return { searchParams, handleSearch, searchText };
};
