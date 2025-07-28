import { Component, OnInit, Renderer2  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'myportfolio';

  constructor(private translate: TranslateService, private renderer: Renderer2) {
    translate.setDefaultLang('hu');
  }
  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
  }
  
}
