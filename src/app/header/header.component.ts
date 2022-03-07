import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from 'chomsky';
import { ShareService } from '../services/share/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileNavOpen = false;
  currentOpenSubmenu = '';
  searchText = '';
  currentLang = 'en';
  scrollTop = 0;

  // @HostListener("window:scroll", ["$event"])
  //   onWindowScroll() {
  //     this.scrollTop = document.documentElement.scrollTop;
  // }

  constructor(
    private shareService: ShareService
  ) { }

  ngOnInit() {
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  toggleSubMenu(submenu: string) {
    this.currentOpenSubmenu = submenu === this.currentOpenSubmenu ? '' : submenu;
  }

  setLanguage(newLanguage: string) {
    this.currentLang = newLanguage;
    TranslateService.use(newLanguage);
    this.shareService.currentLanguage = this.currentLang;
  }

  searchSite() {
    window.location.href = `https://www.pinnacle1.com/?s=${this.searchText}`;
  }

}
