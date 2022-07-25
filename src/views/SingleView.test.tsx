import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleView from "./SingleView";

describe("SingleView view", () => {
  test("renders the single view", async () => {
    render(<SingleView />);

    expect(await screen.findByText("SingleView")).toHaveTextContent(
      "SingleView"
    );
  });
});
