import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import _ from "lodash";
import { Moment } from "moment";
import { SortDirection, SortDirectionType } from "react-virtualized";
import * as CoronaAPI from "../../api/corona";
import { RootState } from "../../app/store";
import { SHORT_DATE_FORMAT } from "../../common/constants/global";
import { Nullable } from "../../genericTypes";
import {
  selectMomentTimelineDate,
  selectSortBy,
  selectSortDirection,
} from "../sideBar/sideBarSlice";
import {
  CountriesByName,
  Country,
  Status,
  TotalByCountry,
} from "./countriesTypes";

// Async actions

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => await CoronaAPI.getCountries()
);

// Slice

interface CountriesState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  countriesByName: CountriesByName;
  error: Nullable<SerializedError>;
}

const initialState: CountriesState = {
  loading: "idle",
  countriesByName: {},
  error: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<CountriesByName>) => {
          if (state.loading === "pending") {
            state.loading = "idle";
          }

          state.countriesByName = action.payload;
        }
      )
      .addCase(fetchCountries.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

// Selectors

export const selectCountriesByName = (state: RootState) =>
  state.countries.countriesByName;

export const selectCountries = createSelector(
  [selectCountriesByName],
  (countriesByName: CountriesByName) => Object.values(countriesByName)
);

export const selectCountriesByTimelineDate = createSelector(
  [selectCountries, selectMomentTimelineDate],
  (countries: Country[], timelineDate: Moment) => {
    const date: string = timelineDate.format(SHORT_DATE_FORMAT);

    return countries.filter((country: Country) => {
      return (
        country.timeline.active[date] ||
        country.timeline.confirmed[date] ||
        country.timeline.deaths[date] ||
        country.timeline.recovered[date]
      );
    });
  }
);

export const selectSortedCountriesByTimelineDate = createSelector(
  [
    selectCountriesByTimelineDate,
    selectMomentTimelineDate,
    selectSortBy,
    selectSortDirection,
  ],
  (
    countries: Country[],
    timelineDate: Moment,
    sortBy: string,
    sortDirection: SortDirectionType
  ) => {
    const date: string = timelineDate.format(SHORT_DATE_FORMAT);
    const isSortByStatus = Object.values(Status as any).includes(sortBy);

    return _.orderBy(
      countries,
      (country: Country) => {
        if (isSortByStatus) {
          return country.timeline[sortBy as Status][date] || 0;
        }

        return country[sortBy as keyof Country];
      },
      sortDirection === SortDirection.ASC ? "asc" : "desc"
    ).map((country, index) => ({ ...country, index: index + 1 }));
  }
);

export const selectSumDataByTimelineDate = createSelector(
  [selectCountriesByTimelineDate, selectMomentTimelineDate],
  (countries: Country[], timelineDate: Moment) => {
    const defaultValues: TotalByCountry = {
      active: 0,
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    };
    const date: string = timelineDate.format(SHORT_DATE_FORMAT);

    return countries.reduce((total: TotalByCountry, country: Country) => {
      return {
        active: total.active + (country.timeline.active[date] || 0),
        confirmed: total.confirmed + (country.timeline.confirmed[date] || 0),
        deaths: total.deaths + (country.timeline.deaths[date] || 0),
        recovered: total.recovered + (country.timeline.recovered[date] || 0),
      };
    }, defaultValues);
  }
);

export const selectlCountriesByTimelineFC = createSelector(
  [selectCountriesByTimelineDate],
  (countries: Country[]) => {
    const featuerCollection: GeoJSON.FeatureCollection<
      GeoJSON.Point,
      Country
    > = {
      type: "FeatureCollection",
      features: countries.map((country) => {
        const feature: GeoJSON.Feature<GeoJSON.Point, Country> = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              country.coordinates.longitude,
              country.coordinates.latitude,
            ],
          },
          properties: country,
        };

        return feature;
      }),
    };

    return featuerCollection;
  }
);

export default countriesSlice.reducer;