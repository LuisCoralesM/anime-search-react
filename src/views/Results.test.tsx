import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "./Results";

describe("Results view", () => {
  test("renders the Results view", async () => {
    render(<Results />);

    expect(await screen.findByText("Results")).toHaveTextContent("Results");
  });
});
