import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import {withVegLabel} from "../RestaurantCard";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("ITC Aashirvaad Soul Creations");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with props Data", () => {
    const WrappedRestaurantComponent = withVegLabel(RestaurantCard)
    render(<WrappedRestaurantComponent resData={MOCK_DATA} />);
    const vegLabel = screen.getByText("Veg")
    expect(vegLabel).toBeInTheDocument();
  
  });




