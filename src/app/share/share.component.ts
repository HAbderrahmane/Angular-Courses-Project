import { Component } from '@angular/core';
import { DrawerMenuComponent } from '../drawer-menu/drawer-menu.component';
import { UsersOpinionsComponent } from '../users-opinions/users-opinions.component';
@Component({
  selector: 'app-share',
  standalone: true,
  imports: [DrawerMenuComponent,
    UsersOpinionsComponent
  ],
  templateUrl: './share.component.html',
  styleUrl: './share.component.css'
})
export class ShareComponent {

}
