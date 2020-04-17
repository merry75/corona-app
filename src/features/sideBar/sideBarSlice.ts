import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { SortDirection, SortDirectionType } from "react-virtualized";
import { RootState } from "../../app/store";
import { Status } from "../countries/countriesTypes";

interface SideBarState {
  filterBy: Status;
  sortBy: string;
  sortDirection: SortDirectionType;
  timelineDate: string; // ISO format
  isTableVisibleOnMobile: boolean;
}

const initialState: SideBarState = {
  filterBy: Status.Confirmed,
  sortBy: Status.Confirmed,
  sortDirection: SortDirection.DESC,
  timelineDate: moment().format(),
  isTableVisibleOnMobile: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<Status>) => {
      state.filterBy = action.payload;
    },
    setTimelineDate: (state, action: PayloadAction<string>) => {
      state.timelineDate = action.payload;
    },
    sort: (
      state,
      action: PayloadAction<{
        sortBy: string;
        sortDirection: SortDirectionType;
      }>
    ) => {
      state.sortBy = action.payload.sortBy;
      state.sortDirection = action.payload.sortDirection;
    },
    toggleTableVisibility: (state) => {
      state.isTableVisibleOnMobile = !state.isTableVisibleOnMobile;
    },
  },
});

// Selectors

export const selectSortBy = (state: RootState) => state.sideBar.sortBy;
export const selectSortDirection = (state: RootState) =>
  state.sideBar.sortDirection;
export const selectTimelineDate = (state: RootState) =>
  state.sideBar.timelineDate;
export const selectFilterBy = (state: RootState) => state.sideBar.filterBy;
export const selectIsTableVisibleOnMobile = (state: RootState) =>
  state.sideBar.isTableVisibleOnMobile;

export const selectMomentTimelineDate = createSelector(
  [selectTimelineDate],
  (timelineDate: string) => moment(timelineDate)
);

export const {
  setFilterType,
  setTimelineDate,
  sort,
  toggleTableVisibility,
} = sideBarSlice.actions;
export default sideBarSlice.reducer;