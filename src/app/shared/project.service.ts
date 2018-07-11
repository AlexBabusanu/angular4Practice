import { Project } from "./project.model";

export class ProjectService {

    private projects: Project[] = [
        new Project("Teatru Idiot", "assets/idiot.jpg"),
        new Project("First Portofolio", "assets/portofolio1.jpeg"),
        new Project("Second Portofolio", "assets/portofolio2.jpg"),

    ];

    getProjects() {
        return this.projects.slice();
    }
}