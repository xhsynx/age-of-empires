import { Injectable } from "@angular/core";
import UnitsData from "../mock/age-of-empires-units";
import { Params } from "../store/models/params";
import { Unit } from "../store/models/unit";
@Injectable({
  providedIn: "root",
})
export class UnitService {
  constructor() {}

  fetchAllUnits(params?: Params): Unit[] {
    let units: Unit[] = UnitsData.units as Unit[];
    if (params) {
      if (params.age) {
        if (params.age == "all") {
          units = units.filter(
            (u) =>
              u.age?.toLocaleLowerCase() !== params.age?.toLocaleLowerCase()
          ) as Unit[];
        } else {
          units = units.filter(
            (u) => u.age?.toLocaleLowerCase() == params.age?.toLocaleLowerCase()
          ) as Unit[];
        }
      }
      if (params.cost) {
        if (params.cost.Wood || params.cost.Wood == 0) {
          units = units.filter(
            (u) => u.cost?.Wood == params.cost?.Wood
          ) as Unit[];
        }
        if (params.cost.Food || params.cost.Food == 0) {
          units = units.filter(
            (u) => u.cost?.Food == params.cost?.Food
          ) as Unit[];
        }
        if (params.cost.Gold || params.cost.Gold == 0) {
          units = units.filter(
            (u) => u.cost?.Gold == params.cost?.Gold
          ) as Unit[];
        }
      }
      return units;
    } else {
      return UnitsData.units as Unit[];
    }
  }
}
