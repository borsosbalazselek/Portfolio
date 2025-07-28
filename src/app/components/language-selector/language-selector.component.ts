import { Component, Input,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: false,
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLang = 'hu';
  dropdownOpen = false;
  modalOpen = false;

  constructor (private translate: TranslateService){}

  isShrunk: boolean = false;
  isDarkMode: boolean = false;



  languages = [
    { code: 'hu', flag: 'assets/flags/hu.png', desc:'languageselector.hu'  },
    { code: 'en', flag: 'assets/flags/en.png', desc:'languageselector.en' }
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }



  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  switchLang(langCode: string) {
    this.currentLang = langCode;
    this.closeModal(); // a váltás után bezárjuk
    this.translate.use(langCode);
  }

  getFlag(langCode: string): string {
    const lang = this.languages.find(l => l.code === langCode);
    return lang ? lang.flag : '';
  }
}

