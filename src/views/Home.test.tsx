import React from "react";
import { render, fireEvent, waitFor, screen, cleanup } from "../tests/utils";
import "@testing-library/jest-dom";
import Home from "./Home";

const setup = () => {
  const utils = render(<Home />);
  const input = utils.getByPlaceholderText(
    "Search for your fave anime"
  ) as HTMLInputElement;
  const button = utils.getByRole("button") as HTMLButtonElement;

  return { utils, input, button };
};

describe("Home view", () => {
  afterEach(cleanup);

  test("renders the view", async () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  test("search button disabled and then enabled after writing in input", async () => {
    const { input, button } = setup();

    fireEvent.change(input, { target: { value: "" } });
    expect(button.disabled).toBe(true);

    fireEvent.change(input, { target: { value: "naruto" } });
    expect(button.disabled).toBe(false);
  });

  test("search for an anime", async () => {
    const { input, button, utils } = setup();

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.change(input, { target: { value: "naruto" } });
    fireEvent.click(button);

    await waitFor(() => expect(utils.getByTestId("loader")).toBeTruthy());
  });
});
