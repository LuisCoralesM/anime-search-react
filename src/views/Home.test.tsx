import React from "react";
import { render, fireEvent, waitFor, screen, cleanup } from "../tests/utils";
import "@testing-library/jest-dom";
import Home from "./Home";
import { server } from "../tests/mocks/server";

describe("Home view", () => {
  it("loads the data while showing a spinner", async () => {
    render(<Home />);

    screen.getAllByTestId("loader");
  });
});
