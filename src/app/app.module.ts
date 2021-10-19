import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CreatenodeComponent } from './createnode/createnode.component';
import { DeletenodeComponent } from './deletenode/deletenode.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({  
  entryComponents: [
    DialogComponent
  ],
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatSelectModule,
    BrowserAnimationsModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    CreatenodeComponent,
    DeletenodeComponent,
    DialogComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
