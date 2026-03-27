import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Search from "./index";

describe("Search", () => {
  test("fetches and displays search results", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        data: {
          results: [
            {
              id: 1,
              name: "Iron Man",
              thumbnail: { path: "http://img", extension: "jpg" },
            },
          ],
        },
      }),
    });

    render(
      <MemoryRouter>
        <Search element="character" />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/search characters/i);
    await userEvent.type(input, "iron");
    await userEvent.click(screen.getByRole("button", { name: /search character/i }));

    expect(await screen.findByText("Iron Man")).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
  });
});
