import React, {Component} from 'react';
import { directive } from '@babel/types';


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
    return (
        <div className="container">
          
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              
            </div>
          </div>
          
        </div>
    );
  }
}

export default Products;
