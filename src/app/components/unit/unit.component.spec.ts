import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnitComponent } from "./unit.component";
import { StoreModule } from "@ngrx/store";
import { BrowserPlatformLocation } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Params } from "../../store/models/params";
import { NavigationExtras } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

describe("UnitComponent", () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitComponent, StoreModule.forRoot(), BrowserAnimationsModule,TranslateModule.forRoot(),],
      providers: [BrowserPlatformLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create UnitComponent", () => {
    expect(component).toBeTruthy();
  });
  it("should have units array", () => {
    expect(component.dataSource.length).toBeGreaterThanOrEqual(0);
  });
  describe("navigateUnitDetailPage", () => {
    it("should have navigateUnitDetailPage function", () => {
      let navigationExtras: NavigationExtras = {
        state: {
          unit: {},
        },
      };
      expect(
        component.navigateUnitDetailPage(navigationExtras)
      ).toBeUndefined();
    });
  });
  describe("ageFilterChange", () => {
    it("Updates age when ageFilterChange change", () => {
      component.params = { age: "all" };
      component.ageFilterChange({ value: "all" });
      expect(component.params.age).toEqual("all");
    });
  });
  describe("costFilterChange", () => {
    it("Updates cost.Food when foodCheckbox() returns true", () => {
      component.params = { cost: { Food: 0 } };
      component.foodCheckbox.set(true);
      component.costFilterChange();
      expect(component.params.cost).toEqual({ Food: 0 });
    });
    it("Updates cost.Wood when woodCheckbox() returns true", () => {
      component.params = { cost: { Wood: 0 } };
      component.woodCheckbox.set(true);
      component.costFilterChange();
      expect(component.params.cost).toEqual({ Wood: 0 });
    });
    it("Updates cost.Gold when goldCheckbox() returns true", () => {
      component.params = { cost: { Gold: 0 } };
      component.goldCheckbox.set(true);
      component.costFilterChange();
      expect(component.params.cost).toEqual({ Gold: 0 });
    });
  });
  describe("woodCheckboxChange", () => {
    it("Filter units when woodCheckbox returns true", () => {
      component.params = { cost: { Wood: 0 } };
      component.woodCheckbox.set(true);
      component.woodSliderValue = 0;
      component.woodCheckboxChange();
      expect(component.params.cost).toEqual({ Wood: 0 });
    });
    it("Filter units when woodCheckbox returns false", () => {
      component.params = { cost: { Wood: undefined } };
      component.woodCheckbox.set(false);
      component.woodSliderValue = 0;
      component.woodCheckboxChange();
      expect(component.params.cost).toEqual({ Wood: undefined });
    });
  });
  describe("foodCheckboxChange", () => {
    it("Filter units when foodCheckboxChange returns true", () => {
      component.params = { cost: { Food: 0 } };
      component.foodCheckbox.set(true);
      component.foodSliderValue = 0;
      component.foodCheckboxChange();
      expect(component.params.cost).toEqual({ Food: 0 });
    });
    it("Filter units when foodCheckboxChange returns false", () => {
      component.params = { cost: { Food: undefined } };
      component.foodCheckbox.set(false);
      component.foodSliderValue = 0;
      component.foodCheckboxChange();
      expect(component.params.cost).toEqual({ Food: undefined });
    });
  });
  describe("goldCheckboxChange", () => {
    it("Filter units when goldCheckboxChange returns true", () => {
      component.params = { cost: { Gold: 0 } };
      component.goldCheckbox.set(true);
      component.goldSliderValue = 0;
      component.goldCheckboxChange();
      expect(component.params.cost).toEqual({ Gold: 0 });
    });
    it("Filter units when goldCheckboxChange returns false", () => {
      component.params = { cost: { Gold: undefined } };
      component.goldCheckbox.set(false);
      component.goldSliderValue = 0;
      component.goldCheckboxChange();
      expect(component.params.cost).toEqual({ Gold: undefined });
    });
  });
});
