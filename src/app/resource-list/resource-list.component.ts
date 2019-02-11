import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceDetailsService } from '../services/resource-details.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})

export class ResourceListComponent implements OnInit {
  resources: any;
  public show_table: boolean = false
  pageTitle= "Resources Management System";

  constructor(private getresourceservice: ResourceDetailsService, private router:Router) { }

  ngOnInit() {
  }
  OnClickmobile(){
    this.show_table = !this.show_table;
    this.getresourceservice.getMobilelist()
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
    this.getresourceservice.getLaptoplist()
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