import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uri = "/";
  constructor(private router: Router) { 
    router.events.subscribe(
      (url:any) => {
        this.uri = router.url;       
       
      }
    )
  }

  ngOnInit() {
    
  }

}
