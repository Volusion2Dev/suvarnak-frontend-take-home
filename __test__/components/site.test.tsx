import React from "react";
import { render } from "@testing-library/react";

import Site from "@src/components/site";

describe("Site preview", () => {
  it("renders the footer", () => {
    const { queryByTestId } = render(
      <Site
        activeIndex={-1}
        blockList={["footer"]}
        removeBlock={() => null}
        setActiveIndex={() => null}
      />
    );

    expect(queryByTestId("header")).toBeFalsy();
    expect(queryByTestId("footer")).toBeTruthy();
  });

  it("renders all blocks", () => {
    const { queryByTestId } = render(
      <Site
        activeIndex={-1}
        blockList={["header", "hero", "footer"]}
        removeBlock={() => null}
        setActiveIndex={() => null}
      />
    );

    expect(queryByTestId("header")).toBeTruthy();
    expect(queryByTestId("hero")).toBeTruthy();
    expect(queryByTestId("footer")).toBeTruthy();
  });
});
