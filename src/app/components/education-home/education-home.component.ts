import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education-home',
  standalone:  true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './education-home.component.html',
  styleUrl: './education-home.component.css'
})
export class EducationHomeComponent {

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

  educationList = [
    {
      years: '2021–2024',
      institution: 'educations.institution1',
      degree: 'educations.degree1',
      description: 'educations.description1'
    },
    {
      years: '2022',
      institution: 'educations.institution2',
      degree: 'educations.degree2',
      description: 'educations.description2'
    },
    {
      years: '2015-2019',
      institution: 'educations.institution3',
      degree: 'educations.degree3',
      description: 'educations.description3'
    },
    {
      years: '2017',
      institution: 'educations.institution4',
      degree: 'educations.degree4',
      description: 'educations.description4'
    }
  ];
}
