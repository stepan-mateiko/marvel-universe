import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import EnterPage from "./index";

describe("EnterPage", () => {
  test("sets a specific document title and renders category links", () => {
    render(
      <MemoryRouter>
        <EnterPage setId={() => {}} />
      </MemoryRouter>
    );

    expect(document.title).toBe("Marvel Universe | Choose a Category");
    expect(screen.getByText("Characters")).toBeInTheDocument();
    expect(screen.getByText("Comics")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Series")).toBeInTheDocument();
  });
});
