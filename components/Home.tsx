import getMasterData from "@/masterData/server";
import { List, Task } from "@/masterData/shared/types";
import styles from "./Home.module.css";
import Link from "next/link";

export const Home = () => {
  const { lists } = getMasterData();

  // const allTasks: Task[] = lists.reduce((acc: Task[], current: List) => {
  //   return [...acc, ...current.tasks];
  // }, []);

  return (
    <div className={styles.wrapper}>
      <h1>All</h1>
      {lists.map((list) => {
        const { tasks } = list;
        const hasTasks = tasks.length > 0;

        return (
          <ul className={styles.list}>
            <li>
              <h2>
                <Link href={`/list/${list.id}`}>{list.name}</Link>
              </h2>
              {hasTasks ? (
                <ul>
                  {list.tasks.map((task) => (
                    <li
                      className={styles.item}
                      key={`allTasks.task.${task.id}`}
                    >
                      {task.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.emptyListText}>
                  {"No tasks in this list :("}
                </p>
              )}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
