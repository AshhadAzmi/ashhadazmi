import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  filtering: boolean = false;

  typescript: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  csharp: boolean = false;
  aspnet: boolean = false;
  javascript: boolean = false;
  java: boolean = false;
  html: boolean = false;
  css: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Ashhad - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }

    if (this.typescript ||
    this.angular ||
    this.react ||
    this.csharp ||
    this.aspnet ||
    this.javascript ||
    this.java ||
    this.html ||
    this.css ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectsByFilter(filterTags);
  }

  resetFilter() {
    this.typescript = false;
    this.angular = false;
    this.react = false;
    this.csharp = false;
    this.aspnet = false;
    this.javascript = false;
    this.java = false;
    this.html = false;
    this.css = false;
    this.filtering = false;

    this.projects = this.projectService.getProjects();
  }
}
