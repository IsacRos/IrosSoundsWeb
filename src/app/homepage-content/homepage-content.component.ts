import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-homepage-content',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './homepage-content.component.html',
  styleUrl: './homepage-content.component.css'
})
export class HomepageContentComponent {
  faMusic = faMusic;
}
