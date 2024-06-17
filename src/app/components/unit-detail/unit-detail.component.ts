import { Location, LowerCasePipe, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Unit } from "../../store/models/unit";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-unit-detail",
  standalone: true,
  imports: [MatGridListModule,LowerCasePipe,UpperCasePipe],
  templateUrl: "./unit-detail.component.html",
  styleUrl: "./unit-detail.component.scss",
})
export class UnitDetailComponent {
  Object = Object;
  unit: any = {};
  constructor(private location: Location) {
    const { unit } = this.location.getState() as any || undefined;
    this.unit = unit as Unit;
  }
}
