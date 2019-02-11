import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailsService {

  constructor(private http: HttpClient) { }
  
  getMobilelist(){
    return this.http.get("http://localhost:64539/api/resourcedetails/getmobilelist");
  }
  getLaptoplist(){
    return this.http.get("http://localhost:64539/api/resourcedetails/getlaptoplist");
  }
}
