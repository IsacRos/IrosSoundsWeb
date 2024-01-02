import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-background-video',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './background-video.component.html',
  styleUrl: './background-video.component.css'
})
export class BackgroundVideoComponent {
  faCircleCheck = faCircleCheck
}
