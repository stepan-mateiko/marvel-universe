import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import ItemPage from "./index";

jest.mock("../../Information", () => () => <div>Mock Information</div>);

describe("ItemPage", () => {
  test("sets document title based on fetched item", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => ({
        data: {
          results: [
            {
              name: "Spider-Man",
              urls: [],
            },
          ],
        },
      }),
    });

    render(
      <MemoryRouter initialEntries={["/character/101"]}>
        <Routes>
          <Route path="/character/:id" element={<ItemPage setId={() => {}} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText("Mock Information")).toBeInTheDocument();
    await waitFor(() => {
      expect(document.title).toBe(
        "Marvel Universe | Character | Spider-Man"
      );
    });
  });
});
