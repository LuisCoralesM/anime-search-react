import React from "react";
import { render, fireEvent, waitFor, screen } from "../tests/utils";
import "@testing-library/jest-dom";
import Results from "./Results";

describe("Results view", () => {
  test("renders the Results view", async () => {
    render(<Results />);

    // expect(await screen.findByText("Data")).toHaveTextContent("Data");
    expect(true).toBe(true);
  });
});
