import { Component } from '@angular/core';
import { DrawerMenuComponent } from '../drawer-menu/drawer-menu.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [DrawerMenuComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {}
