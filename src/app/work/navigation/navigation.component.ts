import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project.model';
import { ProjectService } from '../../shared/project.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
