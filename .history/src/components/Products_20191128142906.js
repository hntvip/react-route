import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class Products extends Component {
  render (){
    var products = [
      {
        id: 1,
        name: 'Iphone X',
        price: 3000,
        slug: 'iphone'
      },
      {
        id: 2,
        name: 'Nokia',
        price: 3000,
        slug: 'nokia'
      },
      {
        id: 3,
        name: 'Galaxy 8',
        price: 3000,
        slug: 'galaxy'
      }
    ]
    var { match } = this.props; // this.props.match
    var url = match.url;
    var result = products.map( (product, index) =>{
      return (
        <NavLink to={`${url}/${products.slug}`} key={index}>
          <li class="list-group-item">
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
