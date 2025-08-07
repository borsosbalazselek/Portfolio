import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  isShrunk = false;
  fadeOutMenu = false;

  constructor(private router: Router) {}

  toggleMenu() {
    if (this.menuOpen) {
      this.startFadeOut();
    } else {
      this.menuOpen = true;
    }
  }

  startFadeOut() {
    this.fadeOutMenu = true;
    setTimeout(() => {
      this.menuOpen = false;
      this.fadeOutMenu = false;
    }, 300);
  }

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollTop = window.scrollY;
  if (!this.isShrunk && scrollTop > 60) {
    this.isShrunk = true;
  } else if (this.isShrunk && scrollTop < 30) {
    this.isShrunk = false;
  }
}

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
    }
  }

  jumpTo(sectionId: string, event: Event): void{
    this.router.navigate([sectionId]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const navInner = document.querySelector('.nav-inner');
    const isHamburger = target.closest('.hamburger');
    const isthemetoogle = target.classList.contains('icon');
    const islangoptionmodal = target.classList.contains('lang-option');
    const isNavInner = navInner?.contains(target);
    const isNavLink = target.classList.contains('nav-link') || target.closest('.nav-link');

    if (this.menuOpen && !isHamburger && !isNavInner && !isNavLink && !isthemetoogle&& !islangoptionmodal) {
      this.startFadeOut();
    }
  }
}