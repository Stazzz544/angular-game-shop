import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISliderData } from 'src/app/services/main-slider.interface';
import { MainSliderService } from 'src/app/services/main-slider.service';
import SwiperCore, {
  Keyboard,
  Virtual,
  SwiperOptions,
  Autoplay,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Keyboard, Virtual, Autoplay]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent implements OnInit {
  @ViewChild('mainSlider') mainSlider!: SwiperComponent;

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    scrollbar: { draggable: false },
    autoplay: {
      delay: 2000,
    },
  };

  mainSliderData = new BehaviorSubject<ISliderData[]>([]);

  constructor(private mainSliderService: MainSliderService) {}

  ngOnInit() {
    this.mainSliderService
      .getMainSliderData()
      .subscribe((res) => this.mainSliderData.next(res));
    console.log(this.mainSliderData);
    
    this.mainSlider.swiperRef.autoplay.start();
  }

  slideNext() {
    this.mainSlider.swiperRef.slideNext(400);
  }
  slidePrev() {
    this.mainSlider.swiperRef.slidePrev(400);
  }
}
