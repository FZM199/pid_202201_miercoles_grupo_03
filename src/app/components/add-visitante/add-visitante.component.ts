import { Component, OnInit } from '@angular/core';
import { VisitanteService } from 'src/app/services/visitante.service';
import { AppService } from "src/app/services/app.service"
import { Visitante } from 'src/app/models/visitante.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  visitorForm = new FormGroup({
    code: new FormControl(''),
    dni: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    userCode: new FormControl('1',[Validators.required]),
    ownerCode: new FormControl('1',[Validators.required])
  });

  constructor(private appService: AppService, private visitanteService: VisitanteService) { }

  ngOnInit(): void {
    //this.appService.showLoading();
    //this.appService.showModalError("","");
  }

  registerVisitor(): void{

    if(this.visitorForm.invalid){
      this.appService.showModalWarning("Visitante no registrado", "Hay campos que se requiere completar");
      return;
    }
    this.appService.showLoading();
    let visitor : Visitante = new Visitante();
    visitor.cod_visitantes = this.visitorForm.controls['code'].value
    visitor.dni_visitantes = this.visitorForm.controls['dni'].value;
    visitor.nombre_visitante = this.visitorForm.controls['name'].value;
    visitor.apellido_visitante = this.visitorForm.controls['lastName'].value;
    visitor.fecha_visitante = this.visitorForm.controls['date'].value;
    visitor.corro_visitante = this.visitorForm.controls['email'].value;
    visitor.telefono_visitantes = this.visitorForm.controls['phone'].value;
    visitor.cod_usuario = this.visitorForm.controls['userCode'].value;
    visitor.cod_propitario = this.visitorForm.controls['ownerCode'].value;
    this.visitanteService.registerVisitor(visitor).subscribe(data => {
      this.appService.fadeLoading();
      if(data.codigo == 1){
        this.appService.showModalSuccess("Visitante registrado", data.mensaje);
        this.visitorForm.reset();
      }
      else{
        this.appService.showModalError("Visitante no registrado", data.mensaje);
      }
    })
  }

}
