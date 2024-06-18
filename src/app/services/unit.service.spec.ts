import { Params } from "../store/models/params";
import { UnitService } from "./unit.service";

describe("Unit service", () => {
  let unitService: UnitService;

  beforeEach(() => {
    unitService = new UnitService();
  });
  it("returns the units", () => {
    const units = unitService.fetchAllUnits();
    expect(units).not.toBeNull();
  });
  it("returns the units with params", () => {
    let params: Params = {
      age: "feudal",
      cost: {
        Food: 10,
        Gold: 21,
        Wood: 15,
      },
    };
    const units = unitService.fetchAllUnits(params);
    expect(units).not.toBeNull();
  });
});
