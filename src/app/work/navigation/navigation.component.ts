import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from '../../shared/project.model';
import { ProjectService } from '../../shared/project.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  projects: Project[];
  position: string;
  topPosition: number;
  bottomPosition: string;
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    this.position = "-" + window.pageYOffset / window.innerHeight * 120;
    this.bottomPosition = "-" + (15 + window.pageYOffset / window.innerHeight * 17.5);
    this.topPosition = 100 - window.pageYOffset / window.innerHeight * 15;
   
  }
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
