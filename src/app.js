import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from './actions/fetchProducts'
import { Spin } from 'antd';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products, error, pending } = this.props;
    if (products){
      if (products.products) {
        if (products.products.items) {
          console.log("it", products.products.items)
          return (
            <div>
              Недвижимость подмосковая
              {pending ? <Spin  size="large"/> : null}
             
            </div>
          )
        }
        else {
          return null
        }
      }
      else {
        return null
      }
    } else {
      return null
    }
  } 
}

const mapStateToProps = state => ({
  products: state.products.products,
  pending: state.products.pending,
  error: state.products.error
})

const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App) 
