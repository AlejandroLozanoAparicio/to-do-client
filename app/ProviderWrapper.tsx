import { MasterDataProvider } from "@/masterData/client/MasterDataProvider";
import getMasterData from "@/masterData/server";
import React from "react";

export const ProviderWrapper = ({ children }: React.PropsWithChildren) => {
  const masterData = getMasterData();

  return (
    <MasterDataProvider masterData={masterData}>{children}</MasterDataProvider>
  );
};
