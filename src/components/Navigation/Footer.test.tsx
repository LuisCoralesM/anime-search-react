import "@testing-library/jest-dom";

import React from "react";

import { fireEvent, render, screen, waitFor } from "../../tests/utils";
import { Footer } from "./Footer";

describe("Footer component", () => {
  it("renders the Footer", async () => {
    render(<Footer />);

    screen.getByText("This is a footer");
  });
});
