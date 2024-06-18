import { Component, model } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadUnits } from "../../store/units/unit.actions";
import { unitSelector } from "../../store/units/unit.selectors";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { Unit } from "../../store/models/unit";
import { FormsModule } from "@angular/forms";
import { NavigationExtras, Router } from "@angular/router";
import { UnitService } from "../../services/unit.service";
import { Params } from "../../store/models/params";

@Component({
  selector: "app-unit",
  standalone: true,
  imports: [
    MatSliderModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatTableModule,
    FormsModule,
  ],
  templateUrl: "./unit.component.html",
  styleUrl: "./unit.component.scss",
})
export class UnitComponent {
  Object = Object;
  woodCheckbox = model(false);
  foodCheckbox = model(false);
  goldCheckbox = model(false);
  woodSliderValue = 0;
  foodSliderValue = 0;
  goldSliderValue = 0;
  all = "all";
  dark = "dark";
  feudal = "feudal";
  castle = "castle";
  imperial = "imperial";
  params: Params = {
    age: "all",
  };
  displayedColumns: string[] = ["id", "name", "age", "cost"];
  dataSource: Unit[] = [];

  constructor(
    private store: Store,
    private router: Router,
    private unitService: UnitService
  ) {}
  ngOnInit() {
    this.store.dispatch(loadUnits({ units: this.unitService.fetchAllUnits() }));
    this.store.select(unitSelector).subscribe((res) => {
      let units = res.units;
      this.dataSource = units;
    });
  }
  navigateUnitDetailPage(row: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        unit: row,
      },
    };
    this.router.navigateByUrl("unit-detail", navigationExtras);
  }
  ageFilterChange(event: any) {
    this.params.age = event.value;
    this.store.dispatch(
      loadUnits({ units: this.unitService.fetchAllUnits(this.params) })
    );
  }
  costFilterChange() {
    if (this.foodCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Food: this.foodSliderValue,
      };
    }
    if (this.woodCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Wood: this.woodSliderValue,
      };
    }
    if (this.goldCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Gold: this.goldSliderValue,
      };
    }
    this.store.dispatch(
      loadUnits({ units: this.unitService.fetchAllUnits(this.params) })
    );
  }
  woodCheckboxChange() {
    if (!this.woodCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Wood: undefined,
      };
    } else {
      this.params.cost = {
        ...this.params.cost,
        Wood: this.woodSliderValue,
      };
    }
    this.store.dispatch(
      loadUnits({ units: this.unitService.fetchAllUnits(this.params) })
    );
  }
  foodCheckboxChange() {
    if (!this.foodCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Food: undefined,
      };
    } else {
      this.params.cost = {
        ...this.params.cost,
        Food: this.foodSliderValue,
      };
    }
    this.store.dispatch(
      loadUnits({ units: this.unitService.fetchAllUnits(this.params) })
    );
  }
  goldCheckboxChange() {
    if (!this.goldCheckbox()) {
      this.params.cost = {
        ...this.params.cost,
        Gold: undefined,
      };
    } else {
      this.params.cost = {
        ...this.params.cost,
        Gold: this.goldSliderValue,
      };
    }
    this.store.dispatch(
      loadUnits({ units: this.unitService.fetchAllUnits(this.params) })
    );
  }
}
