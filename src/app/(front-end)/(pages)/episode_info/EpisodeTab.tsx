"use client";
import { SeasonInterface } from "@/app/lib/types";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function EpisodeTab({
  seasonInfo,
}: {
  seasonInfo: SeasonInterface[];
}) {
  const [tab, setTab] = useState(0);
  const [tabCount, setTabCount] = useState(seasonInfo.length);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  useEffect(() => {
    seasonInfo.forEach((season, i) => {
      const tabPanel = document.getElementById(`tab-panel-${i}`);
      if (i == tab) {
        tabPanel?.classList.remove("hidden");
      } else {
        tabPanel?.classList.add("hidden");
      }
    });
  }, [tab, seasonInfo]);

  useEffect(() => {
    if (tabCount != seasonInfo.length) {
      setTab(0);
      setTabCount(seasonInfo.length);
    }
  }, [tabCount, seasonInfo]);
  return (
    <Tabs value={tab} onChange={handleChange}>
      {seasonInfo.map((season, i) => {
        return <Tab key={i} label={`${season.title}`} />;
      })}
    </Tabs>
  );
}
