import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDUCATIONS,Education } from './education.data';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrl: './education.component.css',
    standalone: false
})
export class EducationComponent implements OnInit {
  selectedImage: string | null = null;
  galleryVisible = false;
  currentImage: string = '';
  currentGallery: string[] = [];
  currentIndex: number = 0;
  educationList: Education[] = EDUCATIONS;
  
  constructor(private router: Router) {}

  openGallery(eduIndex: number, imageIndex: number) {
    this.currentGallery = this.educationList[eduIndex].images;
    this.currentIndex = imageIndex;
    this.currentImage = this.currentGallery[this.currentIndex];
    this.galleryVisible = true;
  }

  closeGallery() {
    this.galleryVisible = false;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.currentGallery.length) % this.currentGallery.length;
    this.currentImage = this.currentGallery[this.currentIndex];
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.currentGallery.length;
    this.currentImage = this.currentGallery[this.currentIndex];
  }


  openImageModal(image: string) {
    this.selectedImage = image;
  }

  closeImageModal() {
    this.selectedImage = null;
  }
    ngOnInit(): void {
      this.showmenupage();
  }
  showmenupage() {
    const hideIds = ['navhome1', 'navhome2', 'navhome3', 'navhome4', 'navhome5'];
    const showIds = ['navpages1', 'navpages2', 'navpages3', 'navpages4', 'navpages5'];

    hideIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    showIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'inline-block';
    });
  }
}
