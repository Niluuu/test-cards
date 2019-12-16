import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from './actions/fetchProducts'
import CartProducts from './components/cart'
import { Spin } from 'antd'
import { List } from 'antd';

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products, pending } = this.props;

    return (
      <div>
        <h1>Moscow Region Real Estate</h1>
        {pending ? <Spin size="large" /> : null}
        {products && products.products && products.products.items &&
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={products.products.items}
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 8,
            }}
            renderItem={items => (
              <List.Item>
                <CartProducts data={items} />
              </List.Item>
            )}
          />
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
