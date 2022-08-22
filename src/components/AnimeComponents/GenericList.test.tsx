import "@testing-library/jest-dom";

import React from "react";

import { listDataMock } from "../../tests/mocks/listDataMock";
import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import GenericList from "./GenericList";

describe("GenericList component", () => {
  it("renders the GenericList component", async () => {
    render(<GenericList animeData={listDataMock} />);

    screen.getByText("Naruto");
    screen.getAllByText("Boruto: Naruto ...");
  });
});
