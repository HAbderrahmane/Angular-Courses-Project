import { Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ShareComponent } from './share/share.component';
import { ProfileComponent } from './profile/profile.component';
import { Component } from '@angular/core';
import { CreateCardSecondComponent } from './create-card-second/create-card-second.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'courses', component: CreateCardComponent },
  { path: 'drawer', component: DrawerMenuComponent },
  { path: 'share', component: ShareComponent },
  { path: 'profile', component: ProfileComponent },
];
