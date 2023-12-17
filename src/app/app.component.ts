import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VoitureService } from './voiture.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'devoir';
  voitures:any;
  form= new FormGroup({
    id:new FormControl(''),
    titre: new FormControl(''),
    description :new FormControl(''),
    date : new FormControl(''),
  })
  constructor(private service:VoitureService) {}
ajouterVoit(){
  const newvoit=this.form.value;
    this.service.addVoiture(newvoit).subscribe(response => {})
}
supprimer(id:any){
  this.service.deletVoiture(id).subscribe(response=>{})
}
ngOnInit(){
  this.service.getVoitures().subscribe(
    response=>{
      this.voitures=response;
    }
  )
}

}
