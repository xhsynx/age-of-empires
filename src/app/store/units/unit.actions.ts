import { createAction, props } from "@ngrx/store";
import { Unit } from "../models/unit";

export const loadUnits = createAction("[Unit Page] Load Units");
export const loadUnitsSuccess = createAction(
  "[Unit API] Load Units Success",
  props<{ units: Unit[] }>()
);
export const loadUnitsFailure = createAction(
  "[Unit API] Load Units Failure",
  props<{ error: string }>()
);
