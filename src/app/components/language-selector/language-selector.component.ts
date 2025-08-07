import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  standalone: false,
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent implements OnInit {
  currentLang = 'hu';
  dropdownOpen = false;
  modalOpen = false;

  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {}

  languages = [
    { code: 'hu', flag: 'assets/flags/hu.png', desc: 'languageselector.hu' },
    { code: 'en', flag: 'assets/flags/en.png', desc: 'languageselector.en' }
  ];

  ngOnInit() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && this.languages.find(l => l.code === savedLang)) {
      this.currentLang = savedLang;
      this.translate.use(savedLang);
    } else {
      this.translate.use(this.currentLang); // alapértelmezett hu
    }

    this.translate.onLangChange.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

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
    localStorage.setItem('language', langCode);
        this.translate.use(langCode).subscribe(() => {
      this.cdr.detectChanges(); // 👈 Ezzel frissül mobilon is a template
    });
    this.closeModal();
  }

  getFlag(langCode: string): string {
    const lang = this.languages.find(l => l.code === langCode);
    return lang ? lang.flag : '';
  }
}
