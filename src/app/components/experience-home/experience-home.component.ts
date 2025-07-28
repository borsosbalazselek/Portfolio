import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-home',
  standalone: false,
  templateUrl: './experience-home.component.html',
  styleUrl: './experience-home.component.css'
})
export class ExperienceHomeComponent {
  
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
    

  
  

  experiences = [
    {
      years: '2024-',
      company: 'experience.company1',
      title: 'experience.title1',
      description1: 'experience.description11',
      description2: 'experience.description12',
      description3: 'experience.description13'
    },
    {
      years: '2024',
      company: 'experience.company2',
      title: 'experience.title2',
      description1: 'experience.description21',
      description2: 'experience.description22',
      description3: 'experience.description23'
    },
    {
      years: '2022–2024',
      company: 'experience.company3',
      title: 'experience.title3',
      description1: 'experience.description31',
      description2: 'experience.description32',
      description3: 'experience.description33'
    }
  ];
}

