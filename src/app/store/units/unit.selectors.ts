import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UnitState, } from "./unit.reducer";
import { UNIT_REDUCER } from "../models/unit";

export const unitSelector = createFeatureSelector<UnitState>(UNIT_REDUCER);
export const selectAllUnits = createSelector(
  unitSelector,
  (state: UnitState) => state.units
);
