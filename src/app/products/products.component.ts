import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = []
  constructor(_prodcutService: ProductsService) {

    _prodcutService.getProducts().subscribe(
      {
        next: (res) => {
          this.products=res;
          console.log(res);
        },
        error: (err) => {
          console.log(err);

        },
        complete: () => {
          console.log("completed");

        }
      }
    )
  }
}
