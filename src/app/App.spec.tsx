import { render, wait } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { COUNTRIES_URL, HISTORICAL_URL } from "../api/corona";
import {
  countriesByName,
  mockCountriesFetches,
} from "../features/countries/countries.mock";
import App from "./App";
import { store } from "./store";

describe("App", () => {
  it("should fetch countries on load and store it", async () => {
    mockCountriesFetches();

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await wait(() => {
      expect(fetch).toHaveBeenNthCalledWith(1, COUNTRIES_URL);
      expect(fetch).toHaveBeenNthCalledWith(2, HISTORICAL_URL);
    });

    expect(store.getState().countries).toEqual({
      countriesByName,
      error: null,
      loading: "idle",
    });
  });
});