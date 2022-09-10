import { Component, OnInit } from '@angular/core';
import { Project } from './interfaces/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  filteredProjects: Project[] = [];
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = [
      {
        name: "Teste inicial",
        badge: "angular",
        tags: ["Angular", "Tailwind CSS", "RxJs"],
        app_url: '',
        github_url: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, temporibus nam incidunt sed voluptate repellendus a vel ut quos. Nam perferendis eaque tempora autem eius odio nesciunt voluptates, nostrum sequi.'
      },
      {
        name: "Teste inicial 2",
        badge: "react",
        tags: ["React", "Bootstrap", "Redux"],
        app_url: '',
        github_url: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, temporibus nam incidunt sed voluptate repellendus a vel ut quos. Nam perferendis eaque tempora autem eius odio nesciunt voluptates, nostrum sequi.'
      }
    ]
    this.filteredProjects = [...this.projects];
  }

  searchProject(searchTerm: string) {
    this.filteredProjects = [...this.projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.filter(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())).length > 0
    )]
  }

}
