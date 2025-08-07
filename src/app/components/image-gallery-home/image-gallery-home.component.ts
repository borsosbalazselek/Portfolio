import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-image-gallery-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './image-gallery-home.component.html',
  styleUrl: './image-gallery-home.component.css'
})
export class ImageGalleryHomeComponent implements OnInit,OnDestroy {
  imageInterval: any;
  currentImageIndex = 0;
  galleryImages: string[] = [
    '/assets/images/imagegallery/control_systems_light.png',
    '/assets/images/imagegallery/iot_solutions_light.png',
    '/assets/images/imagegallery/embedded_systems_light.png',
    '/assets/images/imagegallery/automation_engineering_light.png',
    '/assets/images/imagegallery/robotics_engineering_light.png',
    '/assets/images/imagegallery/autonomous_systems_light.png',
    '/assets/images/imagegallery/ai_programming_training_light.png',
    '/assets/images/imagegallery/graphics_3d_light.png',
    '/assets/images/imagegallery/game_dev_tech_design_light.png',
    '/assets/images/imagegallery/fullstack_dark.png'
    
  ];
  galleryTexts: { title: string, description1: string, description2: string, description3: string }[] = [
    { title: 'home.introtitle1', description1: 'home.introtext11', description2: 'home.introtext12', description3: 'home.introtext13' },
    { title: 'home.introtitle2', description1: 'home.introtext21', description2: 'home.introtext22', description3: 'home.introtext23' },
    { title: 'home.introtitle3', description1: 'home.introtext31', description2: 'home.introtext32', description3: 'home.introtext33' },
    { title: 'home.introtitle4', description1: 'home.introtext41', description2: 'home.introtext42', description3: 'home.introtext43' },
    { title: 'home.introtitle5', description1: 'home.introtext51', description2: 'home.introtext52', description3: 'home.introtext53' },
    { title: 'home.introtitle6', description1: 'home.introtext61', description2: 'home.introtext62', description3: 'home.introtext63' },
    { title: 'home.introtitle7', description1: 'home.introtext71', description2: 'home.introtext72', description3: 'home.introtext73' },
    { title: 'home.introtitle8', description1: 'home.introtext81', description2: 'home.introtext82', description3: 'home.introtext83' },
    { title: 'home.introtitle9', description1: 'home.introtext91', description2: 'home.introtext92', description3: 'home.introtext93' },
    { title: 'home.introtitle10', description1: 'home.introtext101', description2: 'home.introtext102', description3: 'home.introtext103' }
  ];

ngOnInit(): void {
  this.imageInterval = setInterval(() => {
    this.triggerTextAnimation(); // csak animáció vált, nem indexeltetés!
  }, 5000);

}

  ngOnDestroy() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }

  }
  triggerTextAnimation() {
    const textElement = document.querySelector('.gallery-text') as HTMLElement;
    const imageElement = document.querySelector('.gallery-image img') as HTMLElement;
  
    if (textElement && imageElement) {
      // Fade-out először
      textElement.classList.remove('fade-in');
      textElement.classList.add('fade-out');
  
      imageElement.classList.remove('fade-in');
      imageElement.classList.add('fade-out');
  
      // 500ms múlva váltjuk a képet és szöveget fade-in-re
      setTimeout(() => {
        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');
  
        imageElement.classList.remove('fade-out');
        imageElement.classList.add('fade-in');
  
        // FONTOS: a kép index váltása is itt legyen, hogy a fade-out vége után legyen az új tartalom
        this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
      }, 500); // ugyanannyi, mint az animáció időtartama
    }
  }

}
