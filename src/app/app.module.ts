import { CustomSerializer } from "./home/store/reducers/index";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { MetaReducer, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { storeFreeze } from "ngrx-store-freeze";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from "@ngrx/router-store";
import { reducers } from "./home/store/reducers";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
