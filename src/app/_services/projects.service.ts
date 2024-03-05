import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Recipes Angular App',
      summary: 'Simple recipes app, in which user can add recipes along with their ingredients and add those ingredients to shopping list.',
      description: 'Simple recipes app, in which user can add and modify existing recipes along with their ingredients and add those ingredients to shopping list. User can signup and login to the app. Database - Firebase, Api - firebase, hosting - firebase.',
      projectLink: 'https://recipe-book-36475.firebaseapp.com/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: ['../../assets/Recipes/Rec1.png', '../../assets/Recipes/Rec2.png', '../../assets/Recipes/Rec3.png', '../../assets/Recipes/Rec4.png', '../../assets/Recipes/Rec5.png']
    },

    {
      id: 1,
      name: 'Game React App',
      summary: 'Tic Tac Toe Game with basic react concepts',
      description: 'Tic Tac Toe Game with basic react concepts. In which user can play with their names.',
      projectLink: 'https://github.com/AshhadAzmi/basics-react',
      tags: [Tag.REACT, Tag.JAVASCRIPT],
      pictures: ['../../assets/Game/g1.png', '../../assets/Game/g2.png', '../../assets/Game/g3.png', '../../assets/Game/g4.png', '../../assets/Game/g5.png']
    },

    {
      id: 3,
      name: 'Dating App',
      summary: 'Dating App in which users can register and login, after that they can like and send messages privately.',
      description: 'This is simple dating app in which users can register and login and find their matches, like based on their interests, add photos edit their profiles and send and delete private messages.',
      projectLink: 'https://github.com/AshhadAzmi/DotNet-Angular',
      tags: [Tag.ASPNET, Tag.CSHARP, Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: ['../../assets/DatingApp/d1.png', '../../assets/DatingApp/d2.png', '../../assets/DatingApp/d3.png', '../../assets/DatingApp/d4.png', '../../assets/DatingApp/d5.png', '../../assets/DatingApp/d6.png', '../../assets/DatingApp/d7.png', '../../assets/DatingApp/d8.png']
    },

    {
      id: 4,
      name: 'Simple .Net App',
      summary: '.Net App in which users can add regions and walks and modify the exiying ones.',
      description: 'In this app user can add region and walks with the pictures and modify them. This is and api with all crud operations consumed with the Razor pages.',
      projectLink: 'https://github.com/AshhadAzmi/DotNet-Angular',
      tags: [Tag.ASPNET, Tag.CSHARP, Tag.ANGULAR, Tag.TYPESCRIPT],
      pictures: ['../../assets/ASPNET/an1.png', '../../assets/ASPNET/an2.png', '../../assets/ASPNET/an3.png', '../../assets/ASPNET/an4.png']
    },
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);
    
    if(project === undefined) {
      throw new TypeError('There is no project for the Id:' + id);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) === false) {
          foundAll = false;
        }
      });
      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
