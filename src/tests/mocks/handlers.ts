import { rest } from "msw";
import { API_URL_ANIME } from "../../utils/apiUrl";
import { listDataMock } from "./listDataMock";
import { singleDataMock } from "./singleDataMock";

export const handlers = [
  rest.get(API_URL_ANIME, (req, res, ctx) => {
    const params = req.params.q;
    return res(ctx.status(200), ctx.json(listDataMock));
  }),
];
