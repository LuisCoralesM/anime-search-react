import "@testing-library/jest-dom";

import React from "react";

import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import { Footer } from "./Footer";

describe("Results view", () => {
  test("renders the Results view", async () => {
    render(<Footer />);

    expect(await screen.findByText("This is a footer")).toBeInTheDocument();
  });
});
