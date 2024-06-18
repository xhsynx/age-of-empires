import { Component } from "@angular/core";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title: string = "Home Page";
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");
    this.setPageTitle();
  }
  setPageTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == "/units") {
          this.translateService.get("unit.title").subscribe((res: string) => {
            this.title = res;
          });
        } else if (this.router.url == "/unit-detail") {
          this.translateService
            .get("unit_detail.title")
            .subscribe((res: string) => {
              this.title = res;
            });
        } else {
          this.translateService.get("home.title").subscribe((res: string) => {
            this.title = res;
          });
        }
      }
    });
  }
}
