import {
  Component,
  Inject,
  Injectable,
  OnInit,
  LOCALE_ID,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material";

import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  switchMap
} from "rxjs/operators";

import BingMaps from "ol/source/BingMaps";
import { unByKey } from "ol/Observable";
import OlObservable from "ol/Observable";
import OlMap from "ol/Map";
import OlXYZ from "ol/source/XYZ";
import OlTileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";
import OlView from "ol/View";
import * as OlProj from "ol/proj";
import TileGrid from "ol/tilegrid/TileGrid";
import * as OlExtent from "ol/extent.js";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import VectorSource from "ol/source/Vector";
import Circle from "ol/style/Circle.js";
import Select from "ol/interaction/Select";
import UTFGrid from "ol/source/UTFGrid.js";
import * as _ol_TileUrlFunction_ from "ol/tileurlfunction.js";
import Overlay from "ol/Overlay.js";
import Fill from "ol/style/Fill.js";
import * as Condition from "ol/events/condition.js";
import { Lightbox } from "ngx-lightbox";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-image-video-gallery";
import { element } from 'protractor';
import { MapComponent } from "src/app/views/map.component";
 

@Component({
  selector: "app-map-menu-lateral",
  templateUrl: "./map-menu-lateral.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapMenuLateralComponent extends MapComponent {

}