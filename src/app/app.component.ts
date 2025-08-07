import { Component, OnInit, Renderer2, AfterViewInit  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements  AfterViewInit {
  title = 'myportfolio';

  constructor(private translate: TranslateService, private renderer: Renderer2) {
    translate.setDefaultLang('hu');
  }
  async ngAfterViewInit() {
    // CSS
    const link = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', 'https://unpkg.com/aos@2.3.4/dist/aos.css');
    this.renderer.appendChild(document.head, link);

    // JS
    await new Promise<void>((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = 'https://unpkg.com/aos@2.3.4/dist/aos.js';
      script.onload = () => resolve();
      script.onerror = () => reject();
      this.renderer.appendChild(document.body, script);
    });

    // Globális AOS elérése
    (window as any).AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }
  
}
