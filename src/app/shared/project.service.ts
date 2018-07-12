import { Project } from "./project.model";

export class ProjectService {

    private projects: Project[] = [
        new Project("Teatru Idiot", "assets/idiot.jpg", "teatruidiot"),
        new Project("First Portofolio", "assets/portofolio1.jpeg", "portofoliu1"),
        new Project("Second Portofolio", "assets/portofolio2.jpg", "portofoliu2"),
        new Project("Third Portofolio", "assets/portofolio1.jpeg", "portofoliu1"),

    ];

    getProjects() {
        return this.projects.slice();
    }
}