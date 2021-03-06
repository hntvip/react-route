import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Products extends Component {
  render (){
    var products = [
      {
        id: 1,
        name: 'Iphone X',
        price: 3000
      },
      {
        id: 2,
        name: 'Nokia',
        price: 3000
      },
      {
        id: 3,
        name: 'Iphone Galaxy 8',
        price: 3000
      }
    ]

    var result = products.map( (product, index) =>{
      return (
        <NavLink key={index}>
          <li class="list-group-item" key={index} >
            {product.id} - {product.name} -{product.price}
          </li>
        </NavLink>
      )
    })

    return (
        <div className="container">
          
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               {result}
            </div>
          </div>
          
        </div>
    );
  }
}

export default Products;
