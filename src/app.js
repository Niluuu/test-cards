import React, { Component } from 'react'
import { connect } from 'react-redux';



class App extends Component {
  render() {
    const { products, error, pending } = this.props;
    console.log(this.props)
    return (
      <div>
        hi
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  pending: state.products.pending,
  error: state.products.error
})

export default connect(mapStateToProps)(App) 
