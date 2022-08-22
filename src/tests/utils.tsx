import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { render, RenderOptions } from "@testing-library/react";

function AllTheProviders({ children }: { children: ReactElement }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
