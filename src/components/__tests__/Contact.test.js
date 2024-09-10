import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";

describe("Contact Us", ()=> {

  test("Should load Contact Us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
