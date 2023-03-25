import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule
  ],
})
export class MaterialModule {}
