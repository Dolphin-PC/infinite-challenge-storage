import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getInitialColorMode, setColorMode } from "./util";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { DebouncedState, useDebouncedCallback } from "use-debounce";
import { TagInterface } from "./types";
import { useRecoilState } from "recoil";

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
  handleSearch: Function;
  searchText: string | null;
  setSearchText: Dispatch<SetStateAction<string | null>>;
} => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchText, setSearchText] = useState(searchParams.get("search"));

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
      setSearchText(term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { searchParams, handleSearch, searchText, setSearchText };
};

type KeyTypes = "key" | "season" | "search";
export const useParameter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function addParams(key: KeyTypes, value: string) {
    const params = new URLSearchParams(searchParams);

    params.set(key, value);
    replace(`${pathname}?${params.toString()}`);
  }

  function removeParams(key: KeyTypes) {
    const params = new URLSearchParams(searchParams);

    params.delete(key);
    replace(`${pathname}?${params.toString()}`);
  }

  function getValue(key: KeyTypes) {
    const params = new URLSearchParams(searchParams);

    return params.get(key);
  }

  return { addParams, removeParams, getValue };
};

/**
 * 스크롤바닥 감지
 * @param eleId : 감지대상 ele ID
 * @returns {
 * isBottom : Boolean
 * }
 */
export const useSpyScroll = (
  eleId: string,
): { isBottom: Boolean; setIsBottom: Function } => {
  const [isBottom, setIsBottom] = useState(false);

  const detectBottom = useDebouncedCallback((event) => {
    const { clientHeight, scrollHeight, scrollTop } = event.target;

    setIsBottom(clientHeight === scrollHeight - scrollTop);
  }, 300);

  useEffect(() => {
    const ele = document.getElementById(eleId) || document.body;

    ele.addEventListener("scroll", detectBottom);
    return () => {
      ele.removeEventListener("scroll", detectBottom);
    };
  }, [eleId, detectBottom]);

  return { isBottom, setIsBottom };
};

export const useRecentSearch = (): {
  tags: TagInterface[];
  addTag: Function;
  deleteTag: Function;
} => {
  "use client";

  const pathname = usePathname();
  const [tags, setTags] = useState<TagInterface[]>([]);
  const [localKey, setLocalKey] = useState<string>("");

  useEffect(() => setLocalKey(`recent_search_${pathname}`), [pathname]);

  const handleTags = async (newTags: TagInterface[]) => {
    if (newTags.length > 5) {
      newTags.splice(0, 1);
    }
    localStorage.setItem(localKey, JSON.stringify(newTags));
    setTags(newTags);
  };

  useEffect(() => {
    const getTagDatas = JSON.parse(localStorage.getItem(localKey) || "[]");
    setTags(getTagDatas);
  }, [localKey]);

  const addTag = (searchText: string): void => {
    if (searchText == "") return;

    const dupArr = tags.filter((tag) => tag.searchText === searchText);

    const newTag: TagInterface = {
      searchText: searchText,
      priority: new Date().getTime(),
    };

    // 중복된 검색어가 없다면
    if (dupArr.length == 0) {
      handleTags([...tags, newTag]);
    } else {
      const filteredTags = tags.filter((tag) => tag.searchText !== searchText);
      handleTags([...filteredTags, newTag]);
    }
  };

  const deleteTag = (searchText: string): void => {
    const shiftTags = tags.filter((tag) => tag.searchText !== searchText);
    handleTags(shiftTags);
  };

  return { tags, addTag, deleteTag };
};
