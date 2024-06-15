import { createAction, props } from "@ngrx/store";
import { Unit } from "../models/unit";

export const loadUnits = createAction(
  "[Unit API] Load Units Success",
  props<{ units: Unit[] }>()
);
