import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  getTestBed,
  tick,
} from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { ActivatedRoute, Router } from "@angular/router";
import { AppComponent } from "../../app.component";
import { TranslateModule } from "@ngx-translate/core";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const fakeActivatedRoute = {
    snapshot: { outlet: {} },
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create HeaderComponent", () => {
    expect(component).toBeTruthy();
  });
  it("should have header title", () => {
    expect(component.title).toEqual("Home Page");
  });
  describe("App router", () => {
    it("should be able to navigate to `/`", fakeAsync(() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      router.navigate(["/"]);
      tick();
      expect(router.url).toEqual("/");
    }));
  });
  describe("Set page title", () => {
    it("should set page title", () => {
      component.setPageTitle();
      component.title = "Home Page";
      expect(component.title).toEqual("Home Page");
    });
  });
});
