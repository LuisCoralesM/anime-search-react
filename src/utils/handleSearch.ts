import { NavigateFunction } from "react-router-dom";
import { IContext } from "../types";

export async function handleSearch(
  e:
    | React.MouseEvent<HTMLButtonElement>
    | React.FormEvent<HTMLDivElement>
    | React.FormEvent<HTMLFormElement>,
  input: string | undefined,
  setHasSearched: React.Dispatch<React.SetStateAction<boolean>>,
  searchContext: IContext,
  navigate: NavigateFunction
) {
  e.preventDefault();

  if (!input) return;

  setHasSearched(true);

  const response = await searchContext.getAnime(input);

  if (!response.data) return;

  searchContext.setContextListData(response.data);
  localStorage.setItem("myData", JSON.stringify(response.data));

  navigate("/list");
}
