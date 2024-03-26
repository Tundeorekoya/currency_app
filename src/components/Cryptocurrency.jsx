import { Card, Row, Col, input } from "antd"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"
import millify from "millify"
const Cryptocurrency = () => {
  const { data: cryptoList, isFetch } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)
  return (
    <Row gutter={[32, 32]} className="crypto-card-container" >
      {
        cryptos.map((currency) => (
          <Col className="crypto-card" key={currency.id} xs={24} sm={12} lg={6}>
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank} ${currency.name}`} extra={<img className="crypto-image" src={`${currency.iconUrl}`} />} hoverable>
                <p> Price: {millify(currency.price)}</p>
                <p> Market Cap: {millify(currency.marketCap)}</p>
                <p> Daily Change: {millify(currency.change)}</p>

              </Card>
            </Link>
          </Col>
        ))
      }
    </Row>
  )
}

export default Cryptocurrency
