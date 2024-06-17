import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  getTestBed,
  inject,
} from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { ActivatedRoute, Router } from "@angular/router";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const fakeActivatedRoute = {
    snapshot: { outlet: {} },
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
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
    expect(component.title).toEqual("Home Page")
  });
  it("should be able to navigate to `/`", fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    router.navigate(["/"]).then(() => {
      expect(router.url).toEqual("/");
    });
  }));
});
