import { IFetchObject, IFetchSingleObject } from "../types";
import { API_URL, API_URL_ANIME } from "./apiUrl";

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

export async function getTopAnime(): Promise<IFetchObject> {
  try {
    const getResponse = await fetch(`${API_URL}top/anime`);

    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    return { data: undefined, ok: false };
  }
}

export async function getCurrentSeasonAnime(): Promise<IFetchObject> {
  try {
    const getResponse = await fetch(`${API_URL}seasons/now`);

    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    return { data: undefined, ok: false };
  }
}
