import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatCardModule, MatToolbarModule, MatIconModule, MatRippleModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  constructor(public router: Router) {}


  logout() {
    this.router.navigate(['login']);
  }
}
