import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UnitComponent } from "./unit.component";
import { StoreModule } from "@ngrx/store";
import { BrowserPlatformLocation } from "@angular/common";

describe("UnitComponent", () => {
  let component: UnitComponent;
  let fixture: ComponentFixture<UnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitComponent, StoreModule.forRoot()],
      providers:[BrowserPlatformLocation]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
