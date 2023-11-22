// 초기 테마를 설정하는 함수
export function setInitialColorMode() {
  // 로컬스토리지 or 시스템모드 에서 'theme' 값 가져오기
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem("theme");
    const hasPersistedPreference = typeof persistedPreferenceMode === "string";

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof preference.matches === "boolean";

    if (hasMediaQueryPreference) {
      return preference.matches ? "dark" : "light";
    }

    return "light";
  }

  //현재 테마 모드
  const currentColorMode = getInitialColorMode();
  const element = document.body;

  if (currentColorMode === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
}
