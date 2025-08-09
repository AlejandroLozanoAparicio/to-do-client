"use client";

import { useContext } from "react";
import { MasterDataContext } from "./MasterDataProvider";

export const useMasterData = () => {
  const masterData = useContext(MasterDataContext);

  if (!masterData) {
    throw Error("[MASTER DATA CLIENT] Was not initialized");
  }

  return masterData;
};
