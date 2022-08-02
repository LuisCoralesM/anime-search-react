import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home view", () => {
  test("renders the view", async () => {
    render(<Home />);

    expect(await screen.findByText("Search for your fave anime"));
  });
});
