import React from "react";
import { render, fireEvent, waitFor, screen } from "../../tests/utils";
import "@testing-library/jest-dom";
import Nav from "./Nav";

describe("Nav component", () => {
  it("renders the nav", async () => {
    render(<Nav />);

    screen.getByText("My Anime App");
  });

  it("search on the nav bar", async () => {
    render(<Nav />);

    const input = screen.getByLabelText("search");
    fireEvent.change(input, { target: { value: "naruto" } });
    fireEvent.submit(input);

    screen.getByTestId("loader");
  });
});
