import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
})
export class ContactComponent implements OnInit {

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
