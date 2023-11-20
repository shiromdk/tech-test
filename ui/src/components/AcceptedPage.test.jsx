import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { AcceptedPage } from "./AcceptedPage";
const job = {
  data: [
    {
      id: 1,
      contact_name: "Luke Skywalker",
      contact_phone: "0412345678",
      contact_email: "luke@mailinator.com",
      created_at: "2023-11-19T10:21:10.000Z",
      updated_at: null,
      price: 20,
      description:
        "Integer aliquam pulvinar odio et convallis. Integer id tristique ex. Aenean scelerisque massa vel est sollicitudin vulputate. Suspendisse quis ex eu ligula elementum suscipit nec a est. Aliquam a gravida diam. Donec placerat magna posuere massa maximus vehicula. Cras nisl ipsum, fermentum nec odio in, ultricies dapibus risus. Vivamus neque.",
      status: "new",
      suburb_name: "Sydney",
      postcode: "2000",
      category: "Plumbing",
    },
  ],
  count: 1,
};

describe("AcceptedPage", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.doMock()
  });

  test("renders users when API call succeeds", async () => {
    fetchMock.mockOnce(JSON.stringify(job))
    render(<AcceptedPage />);

    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
  });

  test("renders no results when API call succeeds with zero leads", async () => {
    fetchMock.mockOnce(JSON.stringify({data:[], count:0}))
    render(<AcceptedPage />);

    expect(await screen.findByText("No more results found")).toBeInTheDocument();
  });

  test("renders error when API call fails", async () => {
    fetchMock.mockReject(() => Promise.reject("API error"));
    render(<AcceptedPage />);
    expect(await screen.findByText("No more results found")).toBeInTheDocument();
  });

  
});

describe('Search Bar', ()=>{
  it('search bar should show no more results when searching item that does not exist', async ()=>{
    render(<AcceptedPage />);
    const inputElement = screen.getByPlaceholderText('Search')
    fetchMock.mockOnce(JSON.stringify(job))
    expect(await screen.findByText("Luke Skywalker")).toBeInTheDocument();
    fireEvent.change(inputElement, {target: { value: 'Solilique'}})
    fetchMock.mockOnce(JSON.stringify([]))
  
    expect(await screen.queryByText("Luke Skywalker")).toBeNull()
  })
})
