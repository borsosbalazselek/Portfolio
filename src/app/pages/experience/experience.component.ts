import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXPERIENCES, Experience } from './experience.data';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    standalone: false
})
export class ExperienceComponent implements OnInit {
  
  experiences: Experience[] = EXPERIENCES;
  
  constructor(private router: Router) {}

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




