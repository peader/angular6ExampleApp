import { NgModule } from "@angular/core";
import { MatButtonModule,
         MatIconModule,
         MatFormFieldModule, 
         MatInputModule, 
         MatDatepickerModule, 
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatSelectModule,
         MatOptionModule} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule, 
        MatFormFieldModule,
        MatInputModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSelectModule,
        MatOptionModule
    ],
    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSelectModule,
        MatOptionModule
    ]
})
export class MaterialModule{}