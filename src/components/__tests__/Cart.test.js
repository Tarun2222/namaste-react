import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import RestaurantMenu from "../../components/RestaurantMenu";
import Head from "../../components/Head";
import Cart from "../../components/Cart";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

beforeEach(async () => {
  // Setup common rendering logic for all tests
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Head />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
});


it("should render the RestaurantMenu component", () => {
  // Check if the accordion header is rendered
  expect(screen.getByText("Items at 99 (12)")).toBeInTheDocument();
});

it("should expand the accordion to show food items", () => {
  const accordionHeader = screen.getByText("Items at 99 (12)");
  fireEvent.click(accordionHeader);

  // Check if 12 food items are displayed
  expect(screen.getAllByTestId("foodItems").length).toBe(12);
});

it("should add items to the cart", () => {
  const accordionHeader = screen.getByText("Items at 99 (12)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);

  // Check if 1 item is added to the cart
  expect(screen.getByText("1")).toBeInTheDocument();
});

it("should increment the item count in the cart", () => {
  const accordionHeader = screen.getByText("Items at 99 (12)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  // Check if 2 items are added to the cart
  expect(screen.getByText("3")).toBeInTheDocument();
});

it("should clear the cart", () => {
  const accordionHeader = screen.getByText("Items at 99 (12)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Check if cart is cleared
  expect(screen.getByText("Cart is Empty Add item to cart")).toBeInTheDocument();
});

it("should verify food items before and after clearing the cart", () => {
  const accordionHeader = screen.getByText("Items at 99 (12)");
  fireEvent.click(accordionHeader);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  // Check if the food item count increased
  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Verify food item count after clearing cart
  expect(screen.getAllByTestId("foodItems").length).toBe(12);
});
