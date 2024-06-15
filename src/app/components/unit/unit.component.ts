import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadUnits } from "../../store/units/unit.actions";
import { unitSelector } from "../../store/units/unit.selectors";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { Unit } from "../../store/models/unit";
import * as Units from "../../mock/age-of-empires-units.json";
import { STATUS } from "../../store/units/unit.reducer";

const ELEMENT_DATA: Unit[] = [
  {
    id: 1,
    name: "Hydrogen",
    age: "19",
    cost: { Food: 25, Wood: 35 },
  },
  {
    id: 2,
    name: "Hydrogen",
    age: "19",
    cost: { Food: 25, Wood: 35 },
  },
];
@Component({
  selector: "app-unit",
  standalone: true,
  imports: [
    MatSliderModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatTableModule,
  ],
  templateUrl: "./unit.component.html",
  styleUrl: "./unit.component.scss",
})
export class UnitComponent {
  Object = Object;
  displayedColumns: string[] = ["id", "name", "age", "cost"];
  dataSource = ELEMENT_DATA;
  public allUnits$ = this.store.select(unitSelector);
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUnits(Units as any));
    this.allUnits$.subscribe((res) => {
      if (res) {
        console.log(res.units);
      }
    });
  }
}
