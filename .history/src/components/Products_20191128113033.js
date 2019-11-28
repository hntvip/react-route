import React, {Component} from 'react';


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
        name: 'Iphone X',
        price: 3000
      },
      {
        id: 3,
        name: 'Iphone X',
        price: 3000
      }

    ]
    return (
      <div>Product page</div>
    );
  }
}

export default Products;
