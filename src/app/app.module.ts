import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ShopLogoSvgComponent } from 'src/assets/svg/shopLogo/shopLogo.component';
import { SearchComponent } from './components/header/search/search.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { BasketComponent } from './components/header/basket/basket.component';
import { SearchSvgComponent } from 'src/assets/svg/search/search.component';
import { BusketSvgComponent } from 'src/assets/svg/busket/busket.component';
import { EntrySvgComponent } from 'src/assets/svg/entry/entry.component';
import { AngularLogoSvgComponent } from 'src/assets/svg/angularLogo/angularLogo.component';
import { BurgerComponent } from './components/header/burger/burger.component';
import { BurgerService } from './components/header/burger/burger.service';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { MainSliderService } from './services/main-slider.service';
import { HttpClientModule } from '@angular/common/http';
import { MainSliderComponent } from './pages/main-page/main-slider/main-slider.component';
import { GameComponent } from './pages/game/game.component';
import { SliderArrowSvgComponent } from 'src/assets/svg/sliderArrow/sliderArrow.component';
import { GamesService } from './services/games.service';
import { GameSliderComponent } from './pages/game/game-slider/game-slider.component';
import { BackArrowSvgComponent } from 'src/assets/svg/backArrow/backArrow.component';
import { BusketService } from './services/busket.service';

@NgModule({
  declarations: [
    //======SVG======
    ShopLogoSvgComponent,
    SearchSvgComponent,
    AngularLogoSvgComponent,
    EntrySvgComponent,
    BusketSvgComponent,
    SliderArrowSvgComponent,
    BackArrowSvgComponent,
    //======SVG-END======
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LogoComponent,
    SearchComponent,
    AuthComponent,
    BasketComponent,
    BurgerComponent,
    FooterComponent,
    AboutPageComponent,
    CatalogPageComponent,
    BasketPageComponent,
    ProfilePageComponent,
    MainPageComponent,
    MainSliderComponent,
    GameComponent,
    GameSliderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule, HttpClientModule, LightgalleryModule],
  providers: [BurgerService, MainSliderService, GamesService, BusketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
