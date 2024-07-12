import { Component, Inject, Signal } from '@angular/core';
import { ProductComponent } from './product/product.component';


import { DataSignalService } from './data-signal.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
}
