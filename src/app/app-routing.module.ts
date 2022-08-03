import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { PasseTempsComponent } from './passe-temps/passe-temps.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'formations', component: FormationsComponent},
  {path: 'passe-temps', component: PasseTempsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
