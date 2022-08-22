import "@testing-library/jest-dom";

import React from "react";

import { listDataMock } from "../../tests/mocks/listDataMock";
import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import AnimeList from "./AnimeList";

describe("AnimeList component", () => {
  it("renders the AnimeList component", async () => {
    render(<AnimeList listData={listDataMock} />);

    screen.getByText("Naruto");
    screen.getAllByText("Boruto: Naruto ...");
  });
});
