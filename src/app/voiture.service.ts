import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:3000/voitures';
  getVoitures(){
    return this.http.get(this.url);
  }
  addVoiture(voiture:any){
    return this.http.post(this.url,voiture);
  }
  deletVoiture(id:any){
    return this.http.delete(this.url+'/'+id);
  }
  getVoiture(id:any){
    return this.http.get(this.url+'/'+id);
  }
  updateVoiture(id:any,voiture:any){
    return this.http.post(this.url+'/'+id,voiture);
  }
}
