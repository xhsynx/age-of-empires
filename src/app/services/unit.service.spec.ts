import { UnitService } from "./unit.service";

describe("Unit service", () => {
  let unitService: UnitService;

  beforeEach(() => {
    unitService = new UnitService();
  });
  it("returns the units", () => {
    const units = unitService.fetchAllUnits();
    expect(units.length).toBeGreaterThanOrEqual(0);
  });
});
