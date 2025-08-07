import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact-home.component.html',
  styleUrl: './contact-home.component.css'
})
export class ContactHomeComponent {

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
    alert('Üzenet elküldve! (Itt később bekötheted az API-t vagy email küldést)');
  }
}