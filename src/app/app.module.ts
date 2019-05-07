import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { MdTableComponent } from './modals/md-table/md-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    TableComponent,
    ModalComponent,
    MdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule  
  ],
  entryComponents:[MdTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
