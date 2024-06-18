import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

describe("AppComponent", () => {
  const fakeActivatedRoute = {
    snapshot: { outlet: {} },
  } as ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,TranslateModule.forRoot(),],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();
  });

  it("should create AppComponent", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
