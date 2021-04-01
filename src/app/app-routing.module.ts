import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {DashboardComponent} from './exchange/dashboard/dashboard.component';
import {ProfileComponent} from './exchange/account/profile/profile.component';
import {ListComponent} from './nft/list/list.component';
import {ManageComponent} from './nft/manage/manage.component';
import {DonationsComponent} from './donations/donations.component';
import {TeamComponent} from './team/team.component';
import {LiquidityComponent} from './liquidity/liquidity.component';
import {VetBillsListComponent} from './vetbills/list/list.component';
import {AddComponent} from './vetbills/add/add.component';
import {ViewComponent} from './vetbills/view/view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'donations', component: DonationsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'liquidity-locked', component: LiquidityComponent },
  { path: 'in-need', component: VetBillsListComponent,
    children: [
      { path: '', component: VetBillsListComponent },
      { path: ':id/:name', component: ViewComponent },
      { path: 'new', component: AddComponent }
    ]
  },
  { path: 'exchange', component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account', component: ProfileComponent }
    ]
  },
  { path: 'nft', component: ListComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'manage', component: ManageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
