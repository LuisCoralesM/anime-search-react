import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";

describe("Nav component", () => {
  test("renders the nav", async () => {
    render(<Nav />);

    expect(await screen.findByText("My Anime App")).toBeTruthy();
  });
});
