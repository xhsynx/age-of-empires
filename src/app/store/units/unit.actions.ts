import { createAction, props } from "@ngrx/store";
import { UNIT_REDUCER, Unit } from "../models/unit";

export const loadUnits = createAction(
  UNIT_REDUCER,
  props<{ units: Unit[] }>()
);
