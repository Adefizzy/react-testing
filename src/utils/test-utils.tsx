import { cleanup, render, RenderOptions } from "@testing-library/react";
import {ReactElement} from 'react'
import { DummyProvider } from "../providers/DummyProvider";


afterEach(() => {
  cleanup();
});

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
  ) => render(ui, {wrapper: DummyProvider, ...options})
  


export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };