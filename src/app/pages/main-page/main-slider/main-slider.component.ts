import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISliderData } from 'src/app/services/main-slider.interface';
import { MainSliderService } from 'src/app/services/main-slider.service';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
    
  @ViewChild('mainSlider') mainSlider: SwiperComponent | undefined;

  inicialSliderConfigValue = {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 500,
    },
  }

  config: SwiperOptions = this.inicialSliderConfigValue

  mainSliderData = new BehaviorSubject<ISliderData[]>([
    {
      id: 0,
      title: '',
      img: '',
    },
  ]); // Важно! Без инициализационного значения слайдер не запускает autoplay и карусель!!!!

  constructor(private mainSliderService: MainSliderService) {}

  ngOnInit() {
    this.mainSliderService
      .getMainSliderData()
      .subscribe((res) => this.mainSliderData.next(res));
  }
  ngAfterViewInit() {
    this.mainSliderData.subscribe((val) => {
      if (val.length > 0) {
        this.config = this.inicialSliderConfigValue // Фикс при возврате с другой страницы, чтобы не было задвоения
        this.mainSlider?.swiperRef.autoplay.start();
      }
    });
  }
  ngOnDestroy() {
    this.mainSlider?.swiperRef.destroy(true, true)
  }


  slideNext() {
    this.mainSlider?.swiperRef.slideNext(400);
  }
  slidePrev() {
    this.mainSlider?.swiperRef.slidePrev(400);
  }
}
