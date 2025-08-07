import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from './projects.data';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    standalone: true,
    imports: [CommonModule, TranslateModule, RouterModule],
})
export class ProjectsComponent implements OnInit {
  
  galleryVisible = false;
currentGallery: string [] = [];
currentIndex: number = 0;
currentImage: string = '';
  

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

openGallery(projectIndex: number, imageIndex: number) {
  const project = this.projects[projectIndex];
  if (!project.images || project.images.length === 0) return;

  this.currentGallery = project.images;
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

projects: Project[] = PROJECTS;
}
