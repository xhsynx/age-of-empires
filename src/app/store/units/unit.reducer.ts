import { createReducer, on } from "@ngrx/store";
import { Unit } from "../models/unit";
import { loadUnits } from "./unit.actions";

export enum STATUS {
  "pending",
  "loading",
  "error",
  "success",
}

export interface UnitState {
  units: Unit[];
  status: STATUS;
}

export const initialState: UnitState = {
  units: [],
  status: STATUS.pending,
};

export const unitReducer = createReducer(
  initialState,
  on(loadUnits, (state, { units }) => ({
    ...state,
    units: units,
    status: STATUS.success,
  }))
);
