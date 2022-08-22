import "@testing-library/jest-dom";

import React from "react";

import { singleDataMock } from "../../tests/mocks/singleDataMock";
import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import AnimeCard from "./AnimeCard";

describe("Anime Card component", () => {
  it("renders the anime card", () => {
    render(<AnimeCard data={singleDataMock} />);

    screen.getByText("Naruto");
    screen.getByText("Action");
  });
});
