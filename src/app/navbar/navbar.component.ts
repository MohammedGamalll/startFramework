import { Component,HostListener} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink ,RouterLinkActive ,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollThreshold = 20;
    this.isScrolled = window.scrollY >= scrollThreshold;
  }
}


