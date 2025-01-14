import { Component } from '@angular/core';
import { DrawerMenuComponent } from '../drawer-menu/drawer-menu.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DrawerMenuComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
