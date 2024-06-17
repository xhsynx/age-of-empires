import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ActivatedRoute } from "@angular/router";

describe("AppComponent", () => {
  const fakeActivatedRoute = {
    snapshot: { outlet: {} },
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
