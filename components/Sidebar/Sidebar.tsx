import styles from "./Sidebar.module.css";
import Link from "next/link";
import getMasterData from "@/masterData/server";

const LIST_URL = "/list";

export const Sidebar = () => {
  const { lists } = getMasterData();

  const sortedLists = lists.sort((a, b) => (a.position < b.position ? -1 : 1));

  return (
    <menu className={styles.sidebar}>
      {sortedLists.map((list) => (
        <li key={`sidebar.list.item.id${list.id}`} className={styles.item}>
          <Link href={`${LIST_URL}/${list.id}`}>{list.name}</Link>
        </li>
      ))}
    </menu>
  );
};
