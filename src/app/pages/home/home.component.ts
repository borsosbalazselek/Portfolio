import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent implements OnInit {
  
 

  constructor(private router: Router) {}

  navigateToProducts() {
    this.router.navigate(['/home']);
  }

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