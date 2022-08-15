import React from "react";
import { render, fireEvent, waitFor, screen } from "../../tests/utils";
import "@testing-library/jest-dom";
import AnimeCard from "./AnimeCard";
import { singleDataMock } from "../../tests/mocks/singleDataMock";

describe("Anime Card component", () => {
  test("renders the anime card", () => {
    render(<AnimeCard data={singleDataMock} />);

    expect(screen.getByText("Naruto")).toBeTruthy();
    expect(screen.getByText("Action")).toBeTruthy();
  });
});
