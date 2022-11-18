import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
    {path: 'catalog', component: CatalogPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'basket', component: BasketPageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
