import { createReducer, on } from "@ngrx/store";
import { Unit } from "../models/unit";
import { loadUnits, loadUnitsFailure, loadUnitsSuccess } from "./unit.actions";

export enum STATUS {
  "pending",
  "loading",
  "error",
  "success",
}

export interface UnitState {
  units: Unit[];
  error: string | null;
  status: STATUS;
}

export const initialState: UnitState = {
  units: [],
  error: null,
  status: STATUS.pending,
};

export const unitReducer = createReducer(
  initialState,
  on(loadUnits, (state) => ({ ...state, status: STATUS.loading })),
  on(loadUnitsSuccess, (state, { units }) => ({
    ...state,
    units: units,
    error: null,
    status: STATUS.success,
  })),
  on(loadUnitsFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
