import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

function CartProducts(props) {
  const { countryName, house, districtName } = props.data.location
  return (
    <div>
      {props && props.data && props.data.location &&
        <Card
          hoverable
          style={{ minWidth: 240 }}
          cover={<img alt="example" src="https://images.jqestate.ru/PRI2260-5be12c4f-jqestate-2048" />}
        >
          <Meta title={countryName} />
          <p style={{ minHeight: 40 }} >House {house} <br /> in {districtName} </p>
        </Card>
      }
    </div>
  )
}

export default CartProducts

