import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'contact', component: ContactComponent,
    },
    {
      path: 'home',
      loadComponent: () => import('./pages/home/home.component').then((com)=> com.HomeComponent)
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
      path: '**', redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
