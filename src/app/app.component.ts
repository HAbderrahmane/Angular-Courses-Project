//app.ts
import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { COURSES } from './env/db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { UsersOpinionsComponent } from './users-opinions/users-opinions.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateCardSecondComponent } from './create-card-second/create-card-second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CreateCardComponent,
    CommonModule,
    DrawerMenuComponent,
    UsersOpinionsComponent,
    SearchBarComponent,
    LoginFormComponent,
    CreateCardSecondComponent,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
