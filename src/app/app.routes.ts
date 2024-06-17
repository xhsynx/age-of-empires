import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UnitComponent } from "./components/unit/unit.component";
import { UnitDetailComponent } from "./components/unit-detail/unit-detail.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      documentTitle: "Home Page",
    },
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      documentTitle: "Home Page",
    },
  },
  {
    path: "units",
    component: UnitComponent,
    data: {
      documentTitle: "Units Page",
    },
  },
  {
    path: "unit-detail",
    component: UnitDetailComponent,
    data: {
      documentTitle: "Unit Detail Page",
    },
  },
  {
    path: "**",
    redirectTo: "home",
    data: {
      documentTitle: "Home Page",
    },
  },
];
