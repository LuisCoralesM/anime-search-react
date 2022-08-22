import { rest } from "msw";
import { API_URL, API_URL_ANIME } from "../../utils/apiUrl";
import { listDataMock } from "./listDataMock";
import { singleDataMock } from "./singleDataMock";

export const handlers = [
  rest.get(API_URL_ANIME + "/:id", (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = { ...singleDataMock, mal_id: id };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(API_URL_ANIME, (req, res, ctx) => {
    const searchParam = req.params.q;

    return searchParam === "naruto"
      ? res(ctx.status(200), ctx.json(listDataMock))
      : res(ctx.status(200), ctx.json(listDataMock));
  }),

  rest.get(API_URL + "top/anime", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(listDataMock));
  }),

  rest.get(API_URL + "seasons/now", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(listDataMock));
  }),
];
