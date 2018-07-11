import { Component, OnInit } from '@angular/core';
import { Project } from './shared/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  



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
