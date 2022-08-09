import { IAnimeObject, IApiResponse } from "../types";
import { API_URL_ANIME } from "./apiUrl";

export interface IFetchObject {
  data: IApiResponse | undefined;
  ok: boolean;
}

export interface IFetchSingleObject {
  data: { data: IAnimeObject } | undefined;
  ok: boolean;
}

export async function getAnime(term: string): Promise<IFetchObject> {
  try {
    const getResponse = await fetch(`${API_URL_ANIME}?q=${term}`);

    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    return { data: undefined, ok: false };
  }
}

export async function getAnimeById(id: number): Promise<IFetchSingleObject> {
  try {
    const getResponse = await fetch(`${API_URL_ANIME}/${id}`);

    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    return { data: undefined, ok: false };
  }
}
