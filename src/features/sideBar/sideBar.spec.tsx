import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react";
import moment, { Moment } from "moment";
import React from "react";
import { Provider } from "react-redux";
import { store as initialStore, storeConfig } from "../../app/store";
import { countriesByName } from "../countries/countries.mock";
import { Status } from "../countries/countriesTypes";
import { SideBar } from "./SideBar";

describe("SideBar", () => {
  const date: Moment = moment("2020-04-20T00:00:00");
  let store: any;

  beforeEach(() => {
    const initialState = initialStore.getState();
    store = configureStore({
      ...storeConfig,
      preloadedState: {
        ...initialState,
        countries: {
          ...initialState.countries,
          countriesByName: countriesByName,
        },
        sideBar: {
          ...initialState.sideBar,
          timelineDate: date.format(),
        },
      },
    });
  });

  it("should display total counts and allow to filter by them", () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

    const [
      confirmedLabel,
      recoveredLabel,
      deathsLabel,
      activeLabel,
    ] = getAllByTestId("total-count-label");
    const [
      confirmedValue,
      recoveredValue,
      deathsValue,
      activeValue,
    ] = getAllByTestId("total-count-value");

    expect(confirmedLabel).toHaveTextContent("Confirmed");
    expect(confirmedValue).toHaveTextContent("1,035,300");

    expect(recoveredLabel).toHaveTextContent("Recovered");
    expect(recoveredValue).toHaveTextContent("185,861");

    expect(deathsLabel).toHaveTextContent("Deaths");
    expect(deathsValue).toHaveTextContent("70,732");

    expect(activeLabel).toHaveTextContent("Active");
    expect(activeValue).toHaveTextContent("778,707");

    // Check that Confirmed filter selected by default
    expect(store.getState().sideBar.filterBy).toEqual(Status.Confirmed);
    // Check that filtering by Recovered works
    fireEvent.click(recoveredLabel);
    expect(store.getState().sideBar.filterBy).toEqual(Status.Recovered);
    // Check that filtering by Deaths works
    fireEvent.click(deathsLabel);
    expect(store.getState().sideBar.filterBy).toEqual(Status.Deaths);
    // Check that filtering by Active works
    fireEvent.click(activeLabel);
    expect(store.getState().sideBar.filterBy).toEqual(Status.Active);
  });

  it("should handle timeline changes", () => {
    const { getAllByTestId, getByLabelText } = render(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );
    const prevDay = date.clone().subtract(1, "day");

    const [
      confirmedLabel,
      recoveredLabel,
      deathsLabel,
      activeLabel,
    ] = getAllByTestId("total-count-label");
    const [
      confirmedValue,
      recoveredValue,
      deathsValue,
      activeValue,
    ] = getAllByTestId("total-count-value");
    // Check that default date is correct
    expect(getByLabelText(date.format("LL"))).toBeInTheDocument();
    fireEvent.change(getByLabelText(date.format("LL")), {
      target: { value: prevDay.dayOfYear() },
    });
    expect(getByLabelText(prevDay.format("LL"))).toBeInTheDocument();

    expect(confirmedLabel).toHaveTextContent("Confirmed");
    expect(confirmedValue).toHaveTextContent("1,007,804");

    expect(recoveredLabel).toHaveTextContent("Recovered");
    expect(recoveredValue).toHaveTextContent("182,011");

    expect(deathsLabel).toHaveTextContent("Deaths");
    expect(deathsValue).toHaveTextContent("68,845");

    expect(activeLabel).toHaveTextContent("Active");
    expect(activeValue).toHaveTextContent("756,948");
  });
});