import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-business',
  templateUrl: './make-business.page.html',
  styleUrls: ['./make-business.page.scss'],
})
export class MakeBusinessPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoHome(){
    this.router.navigate(['/tabs/home'])
  }
  gotoRegister(){
    this.router.navigate(['register'])
  }
}
