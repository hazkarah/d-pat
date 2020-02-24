import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './views/map.component';
import { MapLayoutComponent } from './views/map.layout.component';

import { DialogOverviewExampleDialog } from './views/map.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { LightboxModule } from 'ngx-lightbox';
import { NgxGalleryModule } from 'ngx-image-video-gallery';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import { DatePipe } from '@angular/common';
import { SpinnerImgComponent } from './views/spinner-img/spinner-img.component';
import { MapMenuLateralComponent } from "src/app/views/map-menu-lateral.component";
import { SearchService } from "src/app/services/search.service";


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapMenuLateralComponent,
    MapLayoutComponent,
    DialogOverviewExampleDialog,
    SpinnerImgComponent
  ],
  exports: [MapComponent,MapMenuLateralComponent,MapLayoutComponent,DialogOverviewExampleDialog],
  imports: [
    TabViewModule,
    NgxGalleryModule,
    FieldsetModule,
    CardModule,
    LightboxModule,
    ScrollPanelModule,
    PanelModule,
    AccordionModule,
    TableModule,
    ChartModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    DragDropModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents:[MapComponent,MapMenuLateralComponent, MapLayoutComponent,  DialogOverviewExampleDialog],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    DatePipe,
    SearchService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
