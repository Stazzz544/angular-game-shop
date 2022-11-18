import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LogoComponent } from './header/logo/logo.component';
import { ShopLogoSvgComponent } from 'src/assets/svg/shopLogo/shopLogo.component';
import { SearchComponent } from './header/search/search.component';
import { AuthComponent } from './header/auth/auth.component';
import { BasketComponent } from './header/basket/basket.component';
import { SearchSvgComponent } from 'src/assets/svg/search/search.component';
import { BusketSvgComponent } from 'src/assets/svg/busket/busket.component';
import { EntrySvgComponent } from 'src/assets/svg/entry/entry.component';
import { AngularLogoSvgComponent } from 'src/assets/svg/angularLogo/angularLogo.component';
import { BurgerComponent } from './header/burger/burger.component';
import { BurgerService } from './header/burger/burger.service';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
    SearchComponent,
    AuthComponent,
    BasketComponent,
    //======SVG======
    ShopLogoSvgComponent,
    SearchSvgComponent,
    AngularLogoSvgComponent,
    EntrySvgComponent,
    BusketSvgComponent,
    BurgerComponent,
    FooterComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
