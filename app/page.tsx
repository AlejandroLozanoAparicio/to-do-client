import { Home as HomePage } from "@/components/Home/Home";
import { initializeMasterData } from "@/masterData/server/getMasterData";

export default async function Home() {
  await initializeMasterData();

  return <HomePage />;
}
