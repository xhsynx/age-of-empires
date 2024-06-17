import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnitComponent } from "./unit.component";
import { StoreModule } from "@ngrx/store";
import { BrowserPlatformLocation } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UnitComponent", () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitComponent, StoreModule.forRoot(),BrowserAnimationsModule],
      providers:[BrowserPlatformLocation,]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have units array", () => {
    expect(component.dataSource.length).toBeGreaterThanOrEqual(0);
  });
  it("should have navigateUnitDetailPage function", () => {
    expect(component.navigateUnitDetailPage).toBeDefined()
  });
  it("should have ageFilterChange function", () => {
    expect(component.ageFilterChange).toBeDefined()
  });
  it("should have costFilterChange function", () => {
    expect(component.costFilterChange).toBeDefined()
  });
  it("should have woodCheckboxChange function", () => {
    expect(component.woodCheckboxChange).toBeDefined()
  });
  it("should have foodCheckboxChange function", () => {
    expect(component.foodCheckboxChange).toBeDefined()
  });
  it("should have goldCheckboxChange function", () => {
    expect(component.goldCheckboxChange).toBeDefined()
  });
});
