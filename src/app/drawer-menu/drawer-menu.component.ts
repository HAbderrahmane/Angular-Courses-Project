//drawer.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-drawer-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer-menu.component.html',
  styleUrl: './drawer-menu.component.css'
})
export class DrawerMenuComponent {


  
  selectedValue='';

  onSelect(action: string ){
    this.selectedValue=action;
    console.log(this.selectedValue);
  }
}
