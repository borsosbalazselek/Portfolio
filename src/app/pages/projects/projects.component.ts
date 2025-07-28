import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PROJECTS, Project } from './projects.data';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    standalone: false
})
export class ProjectsComponent implements OnInit {
  
  galleryVisible = false;
currentGallery: string [] = [];
currentIndex: number = 0;
currentImage: string = '';
  
  constructor(private router: Router) {}
  navigateToProducts() {
    this.router.navigate(['/projects']);
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
