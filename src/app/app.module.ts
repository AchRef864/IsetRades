import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormationComponent } from './formation/formation.component';
import { ErasmusplusComponent } from './erasmusplus/erasmusplus.component';
import { ProjetsComponent } from './projets/projets.component';
import { EvennementComponent } from './evennement/evennement.component';
import { ContactComponent } from './contact/contact.component';
import { BureauComponent } from './bureau/bureau.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutUsComponent,
    FormationComponent,
    ErasmusplusComponent,
    ProjetsComponent,
    EvennementComponent,
    ContactComponent,
    BureauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
