import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadUnits } from "../../store/units/unit.actions";
import { unitSelector } from "../../store/units/unit.selectors";

@Component({
  selector: "app-unit",
  standalone: true,
  imports: [],
  templateUrl: "./unit.component.html",
  styleUrl: "./unit.component.scss",
})
export class UnitComponent {
  public allUnits$ = this.store.select(unitSelector);
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUnits());
  }
}
