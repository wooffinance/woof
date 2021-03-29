import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { DashboardComponent } from './exchange/dashboard/dashboard.component';
import { TokensComponent } from './exchange/tokens/tokens.component';
import { ProfileComponent } from './exchange/account/profile/profile.component';
import { ManageComponent } from './nft/manage/manage.component';
import { ListComponent } from './nft/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DonationsComponent } from './donations/donations.component';
import { TeamComponent } from './team/team.component';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { LiquidityComponent } from './liquidity/liquidity.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComingSoonComponent,
    DashboardComponent,
    TokensComponent,
    ProfileComponent,
    ManageComponent,
    ListComponent,
    DonationsComponent,
    TeamComponent,
    LiquidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
