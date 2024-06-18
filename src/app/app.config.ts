import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { unitReducer } from "./store/units/unit.reducer";
import { UNIT_REDUCER } from "./store/models/unit";
import { reduce } from "rxjs";
import { TranslateLoader, TranslateModule, TranslateStore } from "@ngx-translate/core";
import { HttpClient, HttpHandler, provideHttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reduce),
    provideState({ name: UNIT_REDUCER, reducer: unitReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
    importProvidersFrom(
      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      })
    ),
    TranslateStore,
    HttpClient,
    provideHttpClient()
  ],
};
