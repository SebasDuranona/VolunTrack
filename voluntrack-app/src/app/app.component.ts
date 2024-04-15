import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RequestFormComponent } from './modules/volunteer/components/volunteer-dash/request-form/request-form.component';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    TabMenuModule,
    BadgeModule,
    InputTextModule,
    CalendarModule,
    RequestFormComponent,
    CardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voluntrack-app';

  value: string = '';

  items: MenuItem[];
  activeItem: MenuItem;
  constructor(private router: Router) {
    this.items = [
      { label: 'worked Hours', routerLink: '/home' },
      { label: 'submit Hours', routerLink: '/about' },
      { label: 'pending Hours', routerLink: '/services' },
      { label: 'approved Hours', routerLink: '/contact' }
    ];

    this.activeItem = this.items[0];
  }

  login() {
    this.router.navigate(['/volunteer']);
  }

}
