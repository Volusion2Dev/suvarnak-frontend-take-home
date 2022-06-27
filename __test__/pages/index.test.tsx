import React from "react";
import { fireEvent, render } from "@testing-library/react";

import App from "@src/pages";

describe("Site preview", () => {
  it("Clicking the add button adds a spacer and hides the two buttons around the spacer", () => {
    const { getAllByTestId, queryByTestId } = render(<App />);

    expect(getAllByTestId("add-button").length).toBe(6);

    fireEvent.click(getAllByTestId("add-button")[1]);

    expect(getAllByTestId("add-button").length).toBe(4);
    expect(queryByTestId("spacer")).toBeTruthy();
  });

  it("Adds the spacer when it's at the end of the block list", () => {
    const { getAllByTestId, queryByTestId } = render(<App />);

    expect(getAllByTestId("add-button").length).toBe(6);

    fireEvent.click(getAllByTestId("add-button")[5]);

    expect(getAllByTestId("add-button").length).toBe(5);
    expect(queryByTestId("spacer")).toBeTruthy();
  });

  it("Removes blocks when you click the remove button", () => {
    const { getAllByTestId, queryByTestId } = render(<App />);

    expect(queryByTestId("header")).toBeTruthy();
    expect(getAllByTestId("remove-button").length).toBe(3);

    fireEvent.click(getAllByTestId("remove-button")[0]);

    expect(queryByTestId("header")).toBeFalsy();
  });

  it("Adds blocks when you click them in the sidebar", () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(<App />);

    expect(queryAllByTestId("header").length).toBe(1);

    fireEvent.click(getAllByTestId("add-button")[0]);
    fireEvent.click(getByTestId("block-add-header"));

    expect(queryAllByTestId("header").length).toBe(2);
  });
});
