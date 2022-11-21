import { Component, Input, OnInit, ViewChild } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BehaviorSubject } from 'rxjs';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-game-slider',
  templateUrl: './game-slider.component.html',
  styleUrls: ['./game-slider.component.scss']
})
export class GameSliderComponent implements OnInit {

  @ViewChild('gamePreviewSlider') gamePreviewSlider: SwiperComponent | undefined;
  @Input() imgUrls: string[] | undefined
  
  inicialSliderConfigValue = {
    loop: true,
    speed: 1000,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
      },
  }

  sliderConfig: SwiperOptions = {}

  gamePreviewSliderData = new BehaviorSubject<string[]>([''])

  lightgallerySettings = {
    counter: false,
    plugins: [lgZoom],
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    console.log(this.imgUrls)
    if(this.imgUrls && this.imgUrls?.length  > 0) {

        this.sliderConfig = this.inicialSliderConfigValue
        console.log('config ok')
        this.gamePreviewSlider?.swiperRef.autoplay.start()

    }
  }

  ngOnDestroy() {
    this.gamePreviewSlider?.swiperRef.destroy(true, true)
  }

  
  slideNext() {
    this.gamePreviewSlider?.swiperRef.slideNext(400);
  }
  slidePrev() {
    this.gamePreviewSlider?.swiperRef.slidePrev(400);
  }

}
