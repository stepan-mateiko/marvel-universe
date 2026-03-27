import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Dashboard from "./index";

describe("Dashboard", () => {
  test("renders items from API response", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        data: {
          results: [
            {
              id: 101,
              name: "Hulk",
              stories: { available: 10 },
              thumbnail: { path: "http://img", extension: "jpg" },
            },
          ],
        },
      }),
    });

    render(
      <MemoryRouter>
        <Dashboard element="character" />
      </MemoryRouter>
    );

    expect(await screen.findByText("Hulk")).toBeInTheDocument();
  });
});
