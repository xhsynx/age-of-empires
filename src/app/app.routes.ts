import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UnitComponent } from "./components/unit/unit.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "units", component: UnitComponent },
  { path: "**", redirectTo: "home" },
];
