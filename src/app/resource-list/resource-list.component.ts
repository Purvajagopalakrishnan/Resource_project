import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})

export class ResourceListComponent implements OnInit {
  resources: any;
  public show_table: boolean = false
  pageTitle= "Resources Management System";

  constructor(private authservice: AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
  OnClickmobile(){
    this.show_table = !this.show_table;
    this.authservice.getMobilelist()
    .subscribe(
      resources => {
        this.resources = resources;
        console.log(this.resources);
        this.router.navigate(['Resourcelist']);
      },
      err => console.log('http error',err),
      () => console.log('http req completed')
    );
  }
  OnClicklaptop(){
    this.show_table = !this.show_table;
    this.authservice.getLaptoplist()
    .subscribe(
      resources => {
        this.resources = resources;
        console.log(this.resources);
        this.router.navigate(['Resourcelist']);
      },
      err => console.log('http error',err),
      () => console.log('http req completed')
    );
  } 
}