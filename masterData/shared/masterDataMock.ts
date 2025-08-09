import { GetAllListsResponse } from "./types";

export const masterDataMock: GetAllListsResponse = {
  data: {
    lists: [
      {
        id: 2,
        name: "groceries",
        position: 1,
        tasks: [
          {
            id: 2,
            title: "carrots",
            description: "1kg",
            position: 2,
            subtasks: [
              {
                id: 1,
                title: "subtask super interesting title",
                description: "subtask super interesting description",
                position: 1,
              },
              {
                id: 3,
                title: "subtask super interesting title",
                description: undefined,
                position: 2,
              },
              {
                id: 4,
                title: "subtask super interesting title",
                description: undefined,
                position: 3,
              },
            ],
          },
          {
            id: 4,
            title: "idk smth",
            description: "2kg",
            position: 4,
            subtasks: [],
          },
          {
            id: 1,
            title: "zanahorias",
            description: "1kg",
            position: 1,
            subtasks: [],
          },
          {
            id: 3,
            title: "potatoes",
            description: "2kg",
            position: 3,
            subtasks: [],
          },
        ],
      },
      {
        id: 3,
        name: "daily",
        position: 2,
        tasks: [],
      },
    ],
  },
};
