import React from "react";
import { render, fireEvent, waitFor, screen } from "../tests/utils";
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
  test("renders the view", async () => {
    const { input } = setup();
    expect(input).toBeTruthy();
  });

  test("writes in the input field", async () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: "naruto" } });

    expect(input.value).toBe("naruto");
  });

  test("search button disabled and then enabled after writing in input", async () => {
    const { input, button } = setup();

    fireEvent.change(input, { target: { value: "" } });
    expect(button.disabled).toBe(true);

    fireEvent.change(input, { target: { value: "naruto" } });
    expect(button.disabled).toBe(false);
  });

  // mock api somehow
  // test("search for an anime", async () => {
  //   const { input, button } = setup();

  //   fireEvent.change(input, { target: { value: "naruto" } });
  //   fireEvent.click(button);

  //   expect(screen.getByText("searching")).toBeTruthy();
  // });
});