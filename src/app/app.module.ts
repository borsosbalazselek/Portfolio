import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToogleComponent } from './components/theme-toogle/theme-toogle.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ declarations: [
        AppComponent,
        LanguageSelectorComponent,
        ScrollToTopComponent,
        ParticleBackgroundComponent,
        HeaderComponent,
        FooterComponent,
        ThemeToogleComponent,
        TooltipComponent
    ],
    bootstrap: [AppComponent], imports: [
        BrowserModule,
        AppRoutingModule,
        NgxTypedJsModule,
        FormsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
