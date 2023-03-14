import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BureauComponent } from './bureau/bureau.component';
import { ContactComponent } from './contact/contact.component';
import { ErasmusplusComponent } from './erasmusplus/erasmusplus.component';
import { EvennementComponent } from './evennement/evennement.component';
import { FormationComponent } from './formation/formation.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  { path: "", redirectTo: "about us", pathMatch: 'full' },
  { path: 'about us', component: AboutUsComponent },
  { path: "formation", component: FormationComponent },
  { path: "erasmusplus", component: ErasmusplusComponent },
  { path: "bureau", component: BureauComponent },
  { path: "projets", component: ProjetsComponent },
  { path: "evennement", component: EvennementComponent },
  { path: "contact", component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
