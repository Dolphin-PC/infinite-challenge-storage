"use client";
import { EpisodeInterface } from "@/app/lib/types";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function EpisodeTab({
  seasonList,
}: {
  seasonList: EpisodeInterface[];
}) {
  const [tab, setTab] = useState(0);
  const [tabCount, setTabCount] = useState(seasonList.length);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    seasonList.forEach((season, i) => {
      const tabPanel = document.getElementById(`tab-panel-${i}`);
      if (i == tab) {
        tabPanel?.classList.remove("hidden");
      } else {
        tabPanel?.classList.add("hidden");
      }
    });
  }, [tab, seasonList]);

  useEffect(() => {
    if (tabCount != seasonList.length) {
      setTab(0);
      setTabCount(seasonList.length);
    }
  }, [tabCount, seasonList]);
  return (
    <Tabs value={tab} onChange={handleChange}>
      {seasonList.map((season, i) => {
        return <Tab key={i} label={season.info.title} />;
      })}
      {/* <Tab label="Item Two" aria-controls={`tabpanel-${tab}`} />
      <Tab label="Item Three" aria-controls={`tabpanel-${tab}`} /> */}
    </Tabs>
  );
}
