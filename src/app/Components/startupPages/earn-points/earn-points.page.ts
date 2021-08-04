import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earn-points',
  templateUrl: './earn-points.page.html',
  styleUrls: ['./earn-points.page.scss'],
})
export class EarnPointsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoBusiness(){
    this.router.navigate(['make-business'])
  }
}
