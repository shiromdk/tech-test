import React from "react";
import { render, screen } from "@testing-library/react";

import AcceptedCard from "./AcceptedCard";

const job = {
  id: 3,
  contact_name: "Han Solo",
  contact_phone: "0498765432",
  contact_email: "han@mailinator.com",
  created_at: "2023-11-18T18:00:11.000Z",
  updated_at: null,
  price: 45,
  description:
    "Aliquam posuere est sit amet libero egestas tempus. Donec ut efficitur sapien. Sed molestie nec lacus malesuada suscipit. Aliquam suscipit nibh at posuere tempor. Etiam a sollicitudin felis. In et enim leo. Morbi vel imperdiet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere auctor elit, id venenatis.",
  status: "new",
  suburb_name: "Manly",
  postcode: "2095",
  category: "Carpentry",
};


describe("Testing Accepted Card", () => {
  it("loads accepted card", () => {
    render(<AcceptedCard job={job} />);
    let element = screen.queryByText("Han Solo")
    expect(element).toBeInTheDocument()
    element = screen.queryByText("Marco Polo")
    expect(element).not.toBeInTheDocument()
    element = screen.queryByText(job.contact_email)
    expect(element).toBeInTheDocument()
    element = screen.queryByText(job.contact_phone)
    expect(element).toBeInTheDocument()
  });
});
