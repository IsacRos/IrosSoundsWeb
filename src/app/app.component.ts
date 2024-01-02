import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    SiteHeaderComponent,
    BackgroundVideoComponent,
    HomepageContentComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IrosSoundsWeb';
}
