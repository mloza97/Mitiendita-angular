import { Component, OnInit } from '@angular/core';
import { Producto } from '../agregar-producto/producto';
import { ProductoService } from '../agregar-producto/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      (productos) => this.productos = productos
    );
  }

}
