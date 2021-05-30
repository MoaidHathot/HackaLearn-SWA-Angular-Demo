import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a href="/.auth/login/github">Login</a>
      <br><a href="/.auth/logout">Logout</a>
      <br>
        <div>
          <span>name</span> <input type="text" [(ngModel)]="name" />
          <span>category</span> <input type="text" [(ngModel)]="category" /> 
          <span>devs</span> <input type="text" [(ngModel)]="devs" />
        </div>
      <br><button type=button (click)="getAllProjects()">Get All Projects</button>
      <br><button type=button (click)="getByCategory()">Get By Category</button>
      <br><button type=button (click)="add()">Add Project</button>
      <br><button type=button (click)="update()">Update Project</button>
      <br><button type=button (click)="delete()">Delete Project</button>
      <br>
      <br><button type=button (click)="checkAuth()">Check auth</button>
    </div>`,
})
export class AppComponent {
  name: string = '';
  category: string = '';
  devs: string = ''

  async delete(){
    const response = await fetch(`/api/deleteProject/${this.name}`, {
      method: 'POST'
    });

    const responsePayload = await response.json();
    console.dir(responsePayload);
  }

  async update(){
    const payload = {
      "category": this.category,
      "devs": this.devs.split(",")
    }

    const response = await fetch(`/api/updateProject/${this.name}`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    const responsePayload = await response.json();
    console.dir(responsePayload);
  }


  async add(){
    const payload = {
      "name": this.name,
      "category": this.category,
      "devs": this.devs.split(",")
    }

    const response = await fetch("/api/AddProject", {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    const responsePayload = await response.json();
    console.dir(responsePayload);
  }

  async getByCategory(){
    const response = await fetch(`/api/getProjectsbyCategory/${this.category}`);
    const payload = await response.json();     
    console.dir(payload);
  }

  async getAllProjects(){
    const response = await fetch("/api/getAllProjects");
    const payload = await response.json();     
    console.dir(payload);
  }

  async checkAuth()
  {
    const response = await fetch("/.auth/me");
     const payload = await response.json();
     const { clientPrincipal } = payload;
     console.dir(clientPrincipal);
  }
}
