import { useEffect, useState } from "react";
import { getInitialColorMode, setColorMode } from "./util";

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
