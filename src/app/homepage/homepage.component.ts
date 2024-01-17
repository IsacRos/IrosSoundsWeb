import { Component } from '@angular/core';
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [BackgroundVideoComponent, HomepageContentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
