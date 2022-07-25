export interface IFetchObject {
  data?: any;
  ok: boolean;
}

// Get response from API
export async function fetchApi(
  url: string,
  method: string,
  body: {}
): Promise<IFetchObject> {
  try {
    const getResponse = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return {
      data: await getResponse.json(),
      ok: getResponse.ok,
    };
  } catch (error) {
    return { ok: false };
  }
}
