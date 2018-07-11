import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ProjectService]
})
export class WorkComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }


}
