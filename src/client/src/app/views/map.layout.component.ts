import {
  Component,
  Inject,
  Injectable,
  OnInit,
  LOCALE_ID,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy,  Input,
} from "@angular/core";

import { HttpClient, HttpParams } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material";

 
 

@Component({
  selector: "app-layout",
  templateUrl: "./map.layout.component.html"
})
export class MapLayoutComponent implements OnInit {
 
  @Input() layout: string = 'menu-lateral';

  constructor( public dialog: MatDialog  ) {
    
  }
  
  ngOnInit() {
      
  }
 
}
