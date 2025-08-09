"use client";

import React, { createContext } from "react";
import { MasterData } from "../shared/types";

export const MasterDataContext = createContext<MasterData | undefined>(
  undefined
);

export const MasterDataProvider = ({
  masterData,
  children,
}: React.PropsWithChildren<{
  masterData: MasterData;
}>) => {
  return (
    <MasterDataContext.Provider value={masterData}>
      {children}
    </MasterDataContext.Provider>
  );
};
