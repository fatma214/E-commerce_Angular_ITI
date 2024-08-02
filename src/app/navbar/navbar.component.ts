import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector:"app-navbar",
  standalone:true,
  imports:[RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl:'./navbar.component.css'
})

export default class NavbarComponent{
  imageUrl:string="https://img.pikbest.com/png-images/ecommerce-logo-vector-graphics-element--e-commerce-logo-icon-design-online-store-logo-icon_1726010.png!w700wp"

}
