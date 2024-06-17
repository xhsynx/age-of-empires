import { Component } from "@angular/core";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title: string = "Home Page";
  constructor(private router: Router) {
    this.setPageTitle();
  }
  setPageTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == "/units") {
          this.title = "Units Page";
        } else if (this.router.url == "/unit-detail") {
          this.title = "Unit Detail Page";
        } else {
          this.title = "Home Page";
        }
      }
    });
  }
}
