import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { BeatsIdeasComponent } from './beats-ideas/beats-ideas.component';
import { VideosComponent } from './videos/videos.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomepageComponent, title: "Home - Iros Sounds" },
    { path: 'services', component: ServicesComponent, title: "Services - Iros Sounds" },
    { path: 'beats-ideas', component: BeatsIdeasComponent, title: "Beats Ideas - Iros Sounds" },
    { path: 'videos', component: VideosComponent, title: "Videos - Iros Sounds" },
    { path: 'about', component: AboutComponent, title: "About - Iros Sounds" },
    { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];
