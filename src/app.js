import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from './actions/fetchProducts'
import CartProducts from './components/cart'
import { Spin } from 'antd'
import { Col, Row } from 'antd';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products, error, pending } = this.props;

    return (
      <div>
        <h1>Moscow Region Real Estate</h1>
        {pending ? <Spin size="large" /> : null}
        {products && products.products && products.products.items &&
          <Row gutter={[32, 32]}>
            {products.products.items.map(({ location }) =>
              <Col span={5}>
                <CartProducts data={location} />
              </Col>
            )}
          </Row>
        }
      </div>
    )
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
