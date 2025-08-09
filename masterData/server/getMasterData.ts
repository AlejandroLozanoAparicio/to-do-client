import { fetchMasterData } from "@/masterData/shared/fetchMasterData";
import { MasterData } from "../shared/types";

let masterData: MasterData | undefined = undefined;

export const initializeMasterData = async () => {
  const response = await fetchMasterData();

  masterData = response?.data;
};

export const getMasterData = (): MasterData => {
  if (!masterData) {
    throw Error("[MASTER DATA SERVER] Was not initialized");
  }

  return masterData;
};
