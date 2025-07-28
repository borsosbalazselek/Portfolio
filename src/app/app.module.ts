import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeToogleComponent } from './components/theme-toogle/theme-toogle.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ExperienceHomeComponent } from './components/experience-home/experience-home.component';
import { EducationHomeComponent } from './components/education-home/education-home.component';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';
import { ImageGalleryHomeComponent } from './components/image-gallery-home/image-gallery-home.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { ContactHomeComponent } from './components/contact-home/contact-home.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        ExperienceComponent,
        EducationComponent,
        ProjectsComponent,
        ContactComponent,
        LanguageSelectorComponent,
        FooterComponent,
        ScrollToTopComponent,
        ParticleBackgroundComponent,
        HeaderComponent,
        ThemeToogleComponent,
        TooltipComponent,
        ExperienceHomeComponent,
        EducationHomeComponent,
        ProjectsHomeComponent,
        ImageGalleryHomeComponent,
        HeroHomeComponent,
        ContactHomeComponent
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
