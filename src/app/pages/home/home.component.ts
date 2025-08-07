import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactHomeComponent } from '../../components/contact-home/contact-home.component';
import { EducationHomeComponent } from '../../components/education-home/education-home.component';
import { ProjectsHomeComponent } from '../../components/projects-home/projects-home.component';
import { ExperienceHomeComponent } from '../../components/experience-home/experience-home.component';
import { ImageGalleryHomeComponent } from '../../components/image-gallery-home/image-gallery-home.component';
import { HeroHomeComponent } from '../../components/hero-home/hero-home.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: true,
    imports: [CommonModule, RouterModule,TranslateModule ,HeroHomeComponent,ImageGalleryHomeComponent,ExperienceHomeComponent, ProjectsHomeComponent, ContactHomeComponent, EducationHomeComponent],
})
export class HomeComponent implements OnInit {
  

  ngOnInit() {

    this.showmenupage();
    
  }

  showmenupage() {
    const hideIds = ['navhome1', 'navhome2', 'navhome3', 'navhome4', 'navhome5'];
    const showIds = ['navpages1', 'navpages2', 'navpages3', 'navpages4', 'navpages5'];

    hideIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'inline-block';
    });

    showIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }
  




  
}