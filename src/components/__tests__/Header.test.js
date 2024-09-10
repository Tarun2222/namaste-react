import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Head from "../Head";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );
  const buttons = screen.getByRole("button", { name: "Login" });
  expect(buttons).toBeInTheDocument();
});

it("Should render header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Head />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const LogoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(LogoutBtn).toBeInTheDocument();
});
