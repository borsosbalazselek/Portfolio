import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule,NgxTypedJsModule],
  templateUrl: './hero-home.component.html',
  styleUrl: './hero-home.component.css'
})
export class HeroHomeComponent implements OnInit {
  
  typedStrings: string[] = ['...'];
  langChangeSub: Subscription | undefined;
  constructor(public translate: TranslateService) {}
  ngOnInit() {
    this.loadTypedStrings();
  
    this.langChangeSub = this.translate.onLangChange.subscribe(() => {
      this.loadTypedStrings();
    });
  }
  async loadTypedStrings() {
    const translations = this.translate.get([
      'home.typedtext1',
      'home.typedtext2',
      'home.typedtext3'
    ]).subscribe(translations => {
      this.typedStrings = [
        translations['home.typedtext1'],
        translations['home.typedtext2'],
        translations['home.typedtext3']
      ];
    });
  }


}
