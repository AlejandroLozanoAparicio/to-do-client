import { ErrorResponse, GetAllListsResponse } from "./types";

const url = new URL("/api", "http://localhost:4000");

const body = {
  query: `{
    lists {
      id
      name
      position
      tasks {
        id
        title
        description
        subtasks {
          id
          title
          description
        }
      }
    }
  }`,
  variables: null,
};

export const fetchMasterData = async (): Promise<
  GetAllListsResponse | undefined
> => {
  const response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw Error("[GET ALL LISTS] Service failed");
  }

  const data = (await response.json()) as ErrorResponse | GetAllListsResponse;

  if (Object.hasOwn(data, "errors")) {
    throw Error("[GET ALL LISTS] Errors in response");
  }

  return data as GetAllListsResponse;
};
