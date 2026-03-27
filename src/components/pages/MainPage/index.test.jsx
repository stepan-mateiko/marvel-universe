import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import MainPage from "./index";

describe("MainPage", () => {
  test("sets title for default category", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({ data: { results: [] } }),
    });

    render(
      <MemoryRouter>
        <MainPage setId={() => {}} />
      </MemoryRouter>
    );

    expect(document.title).toBe("Marvel Universe | Characters");
    expect(
      await screen.findByText(/Or discover other random characters/i)
    ).toBeInTheDocument();
  });
});
