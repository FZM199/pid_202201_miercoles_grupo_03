import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  visible: Boolean = false;

  constructor(private appService: AppService) {
    this.appService.loading.subscribe(value => { this.visible = value; } )
  }

  ngOnInit(): void {
  }

}
