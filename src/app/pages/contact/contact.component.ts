import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    standalone: false
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}
  navigateToProducts() {
    this.router.navigate(['/contact']);
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

onSubmit() {
  alert('Message service not work at this moment, try it later!');
}
}
