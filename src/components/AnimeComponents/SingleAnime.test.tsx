import React from "react";
import { render, fireEvent, waitFor, screen } from "../../tests/utils";
import "@testing-library/jest-dom";
import SingleAnime from "./SingleAnime";
import { singleDataMock } from "../../tests/mocks/singleDataMock";

describe("SingleAnime component", () => {
  it("renders the SingleAnime component", async () => {
    render(<SingleAnime data={singleDataMock} />);

    screen.getByText("Naruto");
    screen.getByText("Genres: Action - Adventure - Fantasy");
    screen.getByText("Demographics: Shounen");
  });
});
