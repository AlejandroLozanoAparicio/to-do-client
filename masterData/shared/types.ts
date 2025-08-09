export type Subtask = {
  id: number;
  title: string;
  description?: string;
  position: number;
};

export type Task = {
  id: number;
  title: string;
  description?: string;
  position: number;
  subtasks: Subtask[];
};

export type List = {
  id: number;
  name: string;
  position: number;
  tasks: Task[];
};

export type MasterData = { lists: List[] };

export type GetAllListsResponse = {
  data: MasterData;
};

export type ErrorResponse = {
  errors: { message: string }[];
};
