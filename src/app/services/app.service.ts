import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private loadingBS = new BehaviorSubject<boolean>(false);
  public loading = this.loadingBS.asObservable();

  constructor() { }

  showLoading(): void{
    this.loadingBS.next(true);
  }

  fadeLoading(): void{
    this.loadingBS.next(false);
  }

  showModalError(title:string, message:string):void{
    Swal.fire({
      icon: 'error',
      title: title,
      text: message
    })
  }

  showModalSuccess(title:string, message:string):void{
    Swal.fire({
      icon: 'success',
      title: title,
      text: message
    })
  }

  showModalWarning(title:string, message:string):void{
    Swal.fire({
      icon: 'warning',
      title: title,
      text: message
    })
  }

}
