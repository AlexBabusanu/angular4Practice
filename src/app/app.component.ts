import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  uri = "/";
  constructor(private router: Router) {
    router.events.subscribe(
      (url: any) => {
        this.uri = router.url;

      }
    )
  }

  ngOnInit() {
  }



  mouseWheelUpFunc() {
    window.scrollTo({
      top: window.scrollY - window.innerHeight,
      behavior: "smooth"
    })
  }
  mouseWheelDownFunc() {

    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth"
    })
  }

}
