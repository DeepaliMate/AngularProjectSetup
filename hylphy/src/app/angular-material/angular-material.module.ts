import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatGridListModule,
  MatSidenavModule,
  MatNavList,
  MatToolbarModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule


} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
const materialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  BrowserAnimationsModule,
  MatMenuModule,
  MatRadioModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule
];


@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularMaterialModule { }
