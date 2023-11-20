import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lander',
  templateUrl: './lander.component.html',
  styleUrls: ['./lander.component.css']
})
export class LanderComponent {
  
  openLogin = false;
  constructor(private router: Router) {}

  enterCinePhiles(): void {
    this.router.navigate(['/Watchlist'])
  }
}
